export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    // Extract order data from request body
    const { customer, items, subtotal, shipping, total, notes } = req.body

    // Validate required fields
    if (!customer || !items || !total) {
      return res.status(400).json({ error: "Missing required order information" })
    }

    // Generate a unique order ID
    const orderId = generateOrderId()

    // Create order object
    const order = {
      id: orderId,
      customer,
      items,
      subtotal,
      shipping,
      total,
      notes,
      status: "pending",
      date: new Date().toISOString(),
    }

    // In a real application, you would save this to a database
    // For this example, we'll just log it
    console.log("Created new order:", JSON.stringify(order))

    // Return the created order with the generated ID
    return res.status(201).json({
      success: true,
      order,
    })
  } catch (error) {
    console.error("Error creating order:", error)
    return res.status(500).json({
      success: false,
      error: "Error creating order",
      details: process.env.NODE_ENV === "development" ? error.message : "An error occurred",
    })
  }
}

/**
 * Generate a unique order ID
 * @returns {string} Unique order ID
 */
function generateOrderId() {
  const timestamp = new Date().getTime()
  const random = Math.floor(Math.random() * 1000)
  return `VZ-${timestamp}-${random}`
}
