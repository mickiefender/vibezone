export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { orderId } = req.body

    if (!orderId) {
      return res.status(400).json({ error: "Order ID is required" })
    }

    // In a real application, you would fetch the order from your database
    // For this example, we'll just create a mock order
    const order = {
      id: orderId,
      customer: {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "+1234567890",
      },
      items: [
        { name: "Product 1", price: 100, quantity: 2 },
        { name: "Product 2", price: 50, quantity: 1 },
      ],
      subtotal: 250,
      shipping: 10,
      total: 260,
      status: "paid",
      date: new Date().toISOString(),
    }

    // Format the WhatsApp message
    const message = formatWhatsAppMessage(order)

    // Get your WhatsApp business phone number from environment variables
    const phoneNumber = process.env.WHATSAPP_PHONE_NUMBER

    if (!phoneNumber) {
      console.warn("WhatsApp phone number not configured")
      return res.status(200).json({
        success: false,
        error: "WhatsApp phone number not configured",
        message,
      })
    }

    // Create the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

    // Return the WhatsApp URL and message
    return res.status(200).json({
      success: true,
      whatsappUrl,
      message,
    })
  } catch (error) {
    console.error("Error sending WhatsApp notification:", error)
    return res.status(500).json({
      success: false,
      error: "Error sending WhatsApp notification",
      details: process.env.NODE_ENV === "development" ? error.message : "An error occurred",
    })
  }
}

/**
 * Format order details for WhatsApp
 * @param {Object} order - Order object
 * @returns {string} Formatted WhatsApp message
 */
function formatWhatsAppMessage(order) {
  // Format order details for WhatsApp
  let message = `*New Order: ${order.id}*\n\n`

  // Customer details
  message += `*Customer:* ${order.customer.firstName} ${order.customer.lastName}\n`
  message += `*Email:* ${order.customer.email}\n`
  message += `*Phone:* ${order.customer.phone}\n\n`
  // Order items
  message += `*Order Items:*\n`
  order.items.forEach((item) => {
    message += `- ${item.name} × ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}\n`
  })

  // Order totals
  message += `\n*Subtotal:* $${order.subtotal.toFixed(2)}\n`
  message += `*Shipping:* ${order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}\n`
  message += `*Total:* $${order.total.toFixed(2)}\n\n`

  // Payment status
  message += `*Payment Status:* ${order.status === "paid" ? "Paid" : order.status}\n`
  message += `*Order Date:* ${new Date(order.date).toLocaleString()}\n\n`

  return message
}
