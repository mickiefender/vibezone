/**
 * VibeZone E-commerce - Cart Management
 * This file contains all cart-related functionality
 */

/**
 * Cart Management Functions
 */

// Get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || []
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
}

// Add product to cart
function addToCart(productId, quantity = 1) {
  const cart = getCart()
  const product = window.productUtils.getProductById(productId)

  if (!product) return false

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      sku: product.sku || "", // Include SKU
      category: product.category || "", // Include category
      brand: product.brand || "", // Include brand
    })
  }

  saveCart(cart)
  updateCartCount()
  return true
}

// Update cart item quantity
function updateCartItemQuantity(productId, quantity) {
  const cart = getCart()
  const itemIndex = cart.findIndex((item) => item.id === productId)

  if (itemIndex === -1) return false

  if (quantity <= 0) {
    cart.splice(itemIndex, 1)
  } else {
    cart[itemIndex].quantity = quantity
  }

  saveCart(cart)
  updateCartCount()
  return true
}

// Remove item from cart
function removeFromCart(productId) {
  const cart = getCart()
  const updatedCart = cart.filter((item) => item.id !== productId)

  saveCart(updatedCart)
  updateCartCount()
  return true
}

// Clear cart
function clearCart() {
  saveCart([])
  updateCartCount()
  return true
}

// Calculate cart totals
function calculateCartTotals() {
  const cart = getCart()

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const tax = subtotal * 0.08 // 8% tax
  const shipping = subtotal > 1 ? 0 : 10 // Free shipping over $100
  const total = subtotal + tax + shipping

  return {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    shipping: shipping.toFixed(2),
    total: total.toFixed(2),
    itemCount: cart.reduce((count, item) => count + item.quantity, 0),
  }
}

// Update cart count in UI
function updateCartCount() {
  const cart = getCart()
  const count = cart.reduce((total, item) => total + item.quantity, 0)

  // Update all cart count elements
  const cartCountElements = document.querySelectorAll("#cart-count, #header-cart-count")
  cartCountElements.forEach((element) => {
    if (element) {
      element.textContent = count
    }
  })
}

// Initialize cart page
function initCartPage() {
  const cart = getCart()

  // Show empty cart or cart content
  const cartEmpty = document.getElementById("cart-empty")
  const cartContent = document.getElementById("cart-content")

  if (!cartEmpty || !cartContent) return

  if (cart.length === 0) {
    cartEmpty.style.display = "block"
    cartContent.style.display = "none"
    return
  }

  cartEmpty.style.display = "none"
  cartContent.style.display = "block"

  // Populate cart items
  const cartItemsContainer = document.getElementById("cart-items")
  if (!cartItemsContainer) return

  cartItemsContainer.innerHTML = ""

  cart.forEach((item) => {
    const product = window.productUtils.getProductById(item.id)
    if (!product) return

    const itemTotal = item.price * item.quantity

    const row = document.createElement("tr")
    row.innerHTML = `
            <td>
                <div class="cart-product">
                    <div class="cart-product-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-product-info">
                        <h3>${item.name}</h3>
                        <p>Category: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    </div>
                </div>
            </td>
            <td>${window.productUtils.formatPrice(item.price)}</td>
            <td>
                <div class="quantity-selector cart-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}"><i class="fas fa-minus"></i></button>
                    <input type="number" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn plus" data-id="${item.id}"><i class="fas fa-plus"></i></button>
                </div>
            </td>
            <td>${window.productUtils.formatPrice(itemTotal)}</td>
            <td><i class="fas fa-trash remove-item" data-id="${item.id}"></i></td>
        `

    cartItemsContainer.appendChild(row)
  })

  // Add event listeners to quantity buttons
  const minusBtns = document.querySelectorAll(".cart-quantity .minus")
  const plusBtns = document.querySelectorAll(".cart-quantity .plus")
  const quantityInputs = document.querySelectorAll(".cart-quantity input")
  const removeButtons = document.querySelectorAll(".remove-item")

  minusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const itemId = this.getAttribute("data-id")
      const input = document.querySelector(`.cart-quantity input[data-id="${itemId}"]`)
      let quantity = Number.parseInt(input.value)
      quantity = Math.max(1, quantity - 1)
      input.value = quantity
    })
  })

  plusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const itemId = this.getAttribute("data-id")
      const input = document.querySelector(`.cart-quantity input[data-id="${itemId}"]`)
      let quantity = Number.parseInt(input.value)
      quantity += 1
      input.value = quantity
    })
  })

  quantityInputs.forEach((input) => {
    input.addEventListener("change", function () {
      let quantity = Number.parseInt(this.value)
      if (isNaN(quantity) || quantity < 1) {
        quantity = 1
        this.value = 1
      }
    })
  })

  removeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const itemId = this.getAttribute("data-id")
      if (removeFromCart(itemId)) {
        initCartPage() // Refresh cart page
        window.productUtils.showNotification("Item removed from cart.")
      }
    })
  })

  // Update cart totals
  const totals = calculateCartTotals()
  const subtotalElement = document.getElementById("cart-subtotal")
  const taxElement = document.getElementById("cart-tax")
  const totalElement = document.getElementById("cart-total")

  if (subtotalElement) subtotalElement.textContent = window.productUtils.formatPrice(Number.parseFloat(totals.subtotal))
  if (taxElement) taxElement.textContent = window.productUtils.formatPrice(Number.parseFloat(totals.tax))
  if (totalElement) totalElement.textContent = window.productUtils.formatPrice(Number.parseFloat(totals.total))

  // Set up clear cart button
  const clearCartBtn = document.getElementById("clear-cart")
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your cart?")) {
        clearCart()
        initCartPage() // Refresh cart page
        window.productUtils.showNotification("Your cart has been cleared.")
      }
    })
  }

  // Set up update cart button
  const updateCartBtn = document.getElementById("update-cart")
  if (updateCartBtn) {
    updateCartBtn.addEventListener("click", () => {
      const inputs = document.querySelectorAll(".cart-quantity input")
      let updated = false

      inputs.forEach((input) => {
        const itemId = input.getAttribute("data-id")
        const quantity = Number.parseInt(input.value) || 1

        if (updateCartItemQuantity(itemId, quantity)) {
          updated = true
        }
      })

      if (updated) {
        initCartPage() // Refresh cart page
        window.productUtils.showNotification("Your cart has been updated.")
      }
    })
  }

  // Load suggested products
  const suggestedContainer = document.getElementById("suggested-products")
  if (suggestedContainer) {
    // Get random products excluding cart items
    const cartIds = cart.map((item) => item.id)
    const availableProducts = window.productUtils.getAllProducts().filter((p) => !cartIds.includes(p.id))
    const randomProducts = availableProducts.sort(() => 0.5 - Math.random()).slice(0, 4)

    loadProductsToContainer(suggestedContainer, randomProducts)
  }
}

// Helper function to load products to container
function loadProductsToContainer(container, products) {
  container.innerHTML = ""

  if (products.length === 0) {
    container.innerHTML = '<div class="no-products">No products found.</div>'
    return
  }

  products.forEach((product) => {
    container.appendChild(window.productUtils.createProductCard(product))
  })
}

// Add event listeners to cart buttons
function setupCartButtons() {
  // Add to cart buttons
  document.addEventListener("click", (e) => {
    if (e.target.closest(".add-to-cart-btn")) {
      e.preventDefault()
      const button = e.target.closest(".add-to-cart-btn")
      const productId = button.getAttribute("data-id")
      if (addToCart(productId)) {
        const product = window.productUtils.getProductById(productId)
        window.productUtils.showNotification(`${product.name} has been added to your cart.`)
      }
    }
  })
}

// Export cart functions for use in other files
window.cartUtils = {
  getCart,
  saveCart,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
  calculateCartTotals,
  updateCartCount,
  initCartPage,
  loadProductsToContainer,
  setupCartButtons,
}

// Initialize cart functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize cart count
  updateCartCount()

  // Setup cart buttons
  setupCartButtons()

  // Initialize cart page if we're on it
  if (document.querySelector(".cart-section")) {
    initCartPage()
  }
})
