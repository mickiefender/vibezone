/**
 * VibeZone E-commerce - Checkout Page Functionality
 * This file contains all checkout page specific functionality
 */

// Paystack public key - Replace with your actual public key
const PAYSTACK_PUBLIC_KEY = "pk_live_bd3b0dd39cf2d4e602a56bdc7b05413878491a86"

/**
 * Checkout Functions
 */

// Initialize checkout page
function initCheckoutPage() {
  // Render order summary
  renderOrderSummary()

  // Place order button
  const placeOrderBtn = document.getElementById("place-order")
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", () => {
      if (validateCheckoutForm()) {
        processOrder()
      }
    })
  }
}

// Render order summary
function renderOrderSummary() {
  const cart = window.cartUtils.getCart()
  const orderItemsElement = document.getElementById("order-items")

  if (cart.length === 0) {
    window.location.href = "cart.html"
    return
  }

  let html = ""
  cart.forEach((item) => {
    const subtotal = item.price * item.quantity
    html += `
      <div class="order-summary-item">
        <span>${item.name} × ${item.quantity}</span>
        <span>${window.productUtils.formatPrice(subtotal)}</span>
      </div>
    `
  })

  orderItemsElement.innerHTML = html

  // Update totals
  updateOrderTotals()
}

// Update order totals
function updateOrderTotals() {
  const totals = window.cartUtils.calculateCartTotals()

  const subtotalElement = document.getElementById("order-subtotal")
  const shippingElement = document.getElementById("order-shipping")
  const totalElement = document.getElementById("order-total")

  if (subtotalElement) subtotalElement.textContent = window.productUtils.formatPrice(Number.parseFloat(totals.subtotal))
  if (shippingElement)
    shippingElement.textContent =
      totals.shipping > 0 ? window.productUtils.formatPrice(Number.parseFloat(totals.shipping)) : "Free"
  if (totalElement) totalElement.textContent = window.productUtils.formatPrice(Number.parseFloat(totals.total))
}

// Validate checkout form
function validateCheckoutForm() {
  const form = document.getElementById("checkout-form")
  const termsCheckbox = document.getElementById("terms")

  if (!form.checkValidity()) {
    form.reportValidity()
    return false
  }

  if (!termsCheckbox.checked) {
    window.productUtils.showNotification("Please agree to the terms and conditions", "error")
    return false
  }

  return true
}

// Process order
function processOrder() {
  // Get form data
  const firstName = document.getElementById("first-name").value
  const lastName = document.getElementById("last-name").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value

  // Generate unique order ID
  const orderId = generateOrderId()

  // Get cart totals
  const totals = window.cartUtils.calculateCartTotals()

  // Create order object
  const order = {
    id: orderId,
    customer: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      company: document.getElementById("company").value,
      address: {
        street: document.getElementById("address").value,
        street2: document.getElementById("address-2").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        postcode: document.getElementById("postcode").value,
        country: document.getElementById("country").value,
      },
    },
    items: window.cartUtils.getCart(),
    subtotal: Number.parseFloat(totals.subtotal),
    shipping: Number.parseFloat(totals.shipping),
    tax: Number.parseFloat(totals.tax),
    total: Number.parseFloat(totals.total),
    notes: document.getElementById("notes").value,
    status: "pending",
    date: new Date().toISOString(),
  }

  // Store order in localStorage (in a real app, you'd send this to your server)
  storeOrder(order)

  // Process payment with Paystack
  processPaystackPayment(order)
}

// Generate unique order ID
function generateOrderId() {
  const timestamp = new Date().getTime()
  const random = Math.floor(Math.random() * 1000)
  return `VZ-${timestamp}-${random}`
}

// Store order in localStorage
function storeOrder(order) {
  // Get existing orders
  let orders = localStorage.getItem("vibeZoneOrders")
  if (orders) {
    orders = JSON.parse(orders)
  } else {
    orders = []
  }

  // Add new order
  orders.push(order)

  // Save back to localStorage
  localStorage.setItem("vibeZoneOrders", JSON.stringify(orders))
}

// Process payment with Paystack
function processPaystackPayment(order) {
  // Show loading indicator
  window.productUtils.showNotification("Initializing payment...", "info")

  // Make sure the Paystack script is loaded
  if (typeof PaystackPop === "undefined") {
    // Load Paystack script dynamically
    const script = document.createElement("script")
    script.src = "https://js.paystack.co/v1/inline.js"
    script.async = true
    script.onload = () => {
      // Script loaded, now initialize payment
      openPaystackPopup(order)
    }
    document.head.appendChild(script)
  } else {
    // Paystack already loaded, initialize payment
    openPaystackPopup(order)
  }
}

// Update the openPaystackPopup function to include detailed product information
function openPaystackPopup(order) {
  // Format product details for metadata
  const productDetails = order.items.map((item) => ({
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    subtotal: item.price * item.quantity,
  }))

  const handler = PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email: order.customer.email,
    amount: Math.round(order.total * 100), // Convert to kobo/pesewas (smallest currency unit)
    currency: "GHS", // Change to your currency (GHS for Ghana, NGN for Nigeria)
    ref: order.id, // Use order ID as reference
    metadata: {
      order_id: order.id,
      customer_name: `${order.customer.firstName} ${order.customer.lastName}`,
      customer_phone: order.customer.phone,
      shipping_address: `${order.customer.address.street}, ${order.customer.address.city}`,
      products: JSON.stringify(productDetails), // Include detailed product information
      custom_fields: [
        {
          display_name: "Order ID",
          variable_name: "order_id",
          value: order.id,
        },
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: `${order.customer.firstName} ${order.customer.lastName}`,
        },
        {
          display_name: "Items Count",
          variable_name: "items_count",
          value: order.items.length,
        },
        {
          display_name: "Total Amount",
          variable_name: "total_amount",
          value: order.total,
        },
      ],
    },
    callback: (response) => {
      // Payment successful
      handlePaymentSuccess(response, order)
    },
    onClose: () => {
      // Handle popup closed
      console.log("Payment window closed")
    },
  })

  handler.openIframe()
}

// Update the handlePaymentSuccess function to automatically send WhatsApp notification
function handlePaymentSuccess(response, order) {
  // Update order status
  updateOrderStatus(order.id, "paid")

  // Automatically send order details to WhatsApp
  sendOrderToWhatsApp(order)

  // Clear cart
  window.cartUtils.clearCart()

  // Show success message
  window.productUtils.showNotification("Payment successful! Your order has been placed.", "success")

  // Redirect to success page
  window.location.href = `order-confirmation.html?order_id=${order.id}`
}

// Update order status
function updateOrderStatus(orderId, status) {
  // Get existing orders
  let orders = localStorage.getItem("vibeZoneOrders")
  if (orders) {
    orders = JSON.parse(orders)

    // Find and update order
    const orderIndex = orders.findIndex((order) => order.id === orderId)
    if (orderIndex !== -1) {
      orders[orderIndex].status = status

      // Save back to localStorage
      localStorage.setItem("vibeZoneOrders", JSON.stringify(orders))
    }
  }
}

// Get order by ID
function getOrderById(orderId) {
  let orders = localStorage.getItem("vibeZoneOrders")
  if (orders) {
    orders = JSON.parse(orders)
    return orders.find((order) => order.id === orderId)
  }
  return null
}

// Enhance the sendOrderToWhatsApp function to include more detailed product information
function sendOrderToWhatsApp(order) {
  if (!order) return

  // Format order details for WhatsApp
  let message = `*New Order: ${order.id}*\n\n`

  // Customer details
  message += `*Customer:* ${order.customer.firstName} ${order.customer.lastName}\n`
  message += `*Email:* ${order.customer.email}\n`
  message += `*Phone:* ${order.customer.phone}\n\n`

  // Order items with more details
  message += `*Order Items:*\n`
  order.items.forEach((item, index) => {
    const subtotal = item.price * item.quantity
    message += `${index + 1}. *${item.name}*\n`
    message += `   - Quantity: ${item.quantity}\n`
    message += `   - Unit Price: ${window.productUtils.formatPrice(item.price)}\n`
    message += `   - Subtotal: ${window.productUtils.formatPrice(subtotal)}\n`
    if (item.sku) {
      message += `   - SKU: ${item.sku}\n`
    }
    message += `\n`
  })

  // Order totals
  message += `*Order Summary:*\n`
  message += `Subtotal: ${window.productUtils.formatPrice(order.subtotal)}\n`
  message += `Shipping: ${order.shipping === 0 ? "Free" : window.productUtils.formatPrice(order.shipping)}\n`
  if (order.tax) {
    message += `Tax: ${window.productUtils.formatPrice(order.tax)}\n`
  }
  message += `*Total: ${window.productUtils.formatPrice(order.total)}*\n\n`

  // Payment status
  message += `*Payment Status:* Paid\n`
  message += `*Order Date:* ${new Date(order.date).toLocaleString()}\n\n`

  // Shipping address
  message += `*Shipping Address:*\n`
  message += `${order.customer.address.street}\n`
  if (order.customer.address.street2) {
    message += `${order.customer.address.street2}\n`
  }
  message += `${order.customer.address.city}, ${order.customer.address.state} ${order.customer.address.postcode}\n`
  message += `${getCountryName(order.customer.address.country)}\n\n`

  // Order notes
  if (order.notes) {
    message += `*Notes:* ${order.notes}\n\n`
  }

  // Encode message for WhatsApp URL
  const encodedMessage = encodeURIComponent(message)

  // WhatsApp phone number (replace with your company's number)
  const phoneNumber = "233208517482" // Replace with your WhatsApp number

  // Create WhatsApp URL
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, "_blank")
}

// Get country name from country code
function getCountryName(countryCode) {
  const countries = {
    GH: "Ghana",
    NG: "Nigeria",
    KE: "Kenya",
    ZA: "South Africa",
    // Add more countries as needed
  }

  return countries[countryCode] || countryCode
}

// Initialize checkout functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize checkout page if we're on it
  if (document.querySelector(".checkout-section")) {
    initCheckoutPage()
  }

  // Initialize order confirmation page if we're on it
  if (document.querySelector(".confirmation-section")) {
    // Get order ID from URL
    const urlParams = new URLSearchParams(window.location.search)
    const orderId = urlParams.get("order_id")

    if (orderId) {
      // Load order details
      loadOrderDetails(orderId)

      // WhatsApp button
      const whatsappBtn = document.getElementById("whatsapp-order")
      if (whatsappBtn) {
        whatsappBtn.addEventListener("click", (e) => {
          e.preventDefault()
          sendOrderToWhatsApp(getOrderById(orderId))
        })
      }
    } else {
      // Redirect to home if no order ID
      window.location.href = "index.html"
    }
  }
})

// Load order details for confirmation page
function loadOrderDetails(orderId) {
  const order = getOrderById(orderId)

  if (!order) {
    window.location.href = "index.html"
    return
  }

  // Update order details
  document.getElementById("confirmation-order-id").textContent = order.id
  document.getElementById("confirmation-date").textContent = new Date(order.date).toLocaleDateString()
  document.getElementById("confirmation-total").textContent = window.productUtils.formatPrice(order.total)

  // Update order items
  const itemsElement = document.getElementById("confirmation-items")
  let html = ""

  order.items.forEach((item) => {
    const subtotal = item.price * item.quantity
    html += `
      <div class="order-summary-item">
        <span>${item.name} × ${item.quantity}</span>
        <span>${window.productUtils.formatPrice(subtotal)}</span>
      </div>
    `
  })

  itemsElement.innerHTML = html

  // Update totals
  document.getElementById("confirmation-subtotal").textContent = window.productUtils.formatPrice(order.subtotal)
  document.getElementById("confirmation-shipping").textContent =
    order.shipping === 0 ? "Free" : window.productUtils.formatPrice(order.shipping)
  document.getElementById("confirmation-order-total").textContent = window.productUtils.formatPrice(order.total)
}
