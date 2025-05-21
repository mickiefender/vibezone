export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { transaction_id } = req.body

    if (!transaction_id) {
      return res.status(400).json({ error: "Transaction ID is required" })
    }

    // Get your secret key from environment variables
    const secretKey = process.env.FLUTTERWAVE_SECRET_KEY

    if (!secretKey) {
      console.error("Secret key not configured")
      return res.status(500).json({ error: "Server configuration error" })
    }

    // Verify the transaction with Flutterwave
    const response = await fetch(`https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secretKey}`,
      },
    })

    const verification = await response.json()

    // Check if verification was successful
    if (verification.status === "success" && verification.data.status === "successful") {
      // Extract order details
      const {
        tx_ref, // Your order reference
        amount, // Amount paid
        currency, // Currency
        customer, // Customer details
        payment_type, // Payment method
      } = verification.data

      // Process the verified payment
      // This is where you would update your database, send notifications, etc.
      console.log(`Payment verified for order: ${tx_ref}`)

      // Return success response with verified data
      return res.status(200).json({
        success: true,
        data: {
          orderId: tx_ref,
          amount,
          currency,
          customer: {
            name: customer.name,
            email: customer.email,
            phone: customer.phone_number,
          },
          paymentMethod: payment_type,
          transactionId: transaction_id,
        },
      })
    } else {
      // Payment verification failed
      console.error("Payment verification failed:", verification)
      return res.status(400).json({
        success: false,
        error: "Payment verification failed",
        details: verification.message || "Unknown error",
      })
    }
  } catch (error) {
    console.error("Error verifying payment:", error)
    return res.status(500).json({
      success: false,
      error: "Error verifying payment",
      details: process.env.NODE_ENV === "development" ? error.message : "An error occurred",
    })
  }
}
