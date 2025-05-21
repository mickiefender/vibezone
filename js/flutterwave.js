// Process payment with Flutterwave
function processFlutterwavePayment(order) {
    // Get customer details
    const customer = order.customer;
    
    // Configure Flutterwave
    const config = {
        public_key: "FLWPUBK_TEST-e4b59de06818eb3ba936930fd7a8184e-X", // Replace with your actual public key
        tx_ref: order.id,
        amount: order.total,
        currency: "GHS", // Change to your currency
        payment_options: "card, mobilemoneyghana, ussd",
        customer: {
            email: customer.email,
            phone_number: customer.phone,
            name: `${customer.firstName} ${customer.lastName}`
        },
        customizations: {
            title: "VibeZone",
            description: `Payment for order ${order.id}`,
            logo: "logo.JPG" // Replace with your logo URL
        },
        callback: function(response) {
            // Handle payment response
            handlePaymentResponse(response, order);
        },
        onclose: function() {
            // Handle when customer closes payment modal
            console.log("Payment modal closed");
        }
    };
    
    // Initialize Flutterwave
    FlutterwaveCheckout(config);
}

// Handle payment response
function handlePaymentResponse(response, order) {
    if (response.status === "successful") {
        // Update order status
        updateOrderStatus(order.id, 'paid');
        
        // Send order details to WhatsApp
        sendOrderToWhatsApp(order);
        
        // Clear cart
        Cart.clearCart();
        
        // Redirect to success page
        window.location.href = `order-confirmation.html?order_id=${order.id}`;
    } else {
        // Payment failed
        alert("Payment failed. Please try again.");
        
        // Update order status
        updateOrderStatus(order.id, 'payment_failed');
    }
}

// Update order status
function updateOrderStatus(orderId, status) {
    // Get existing orders
    let orders = localStorage.getItem('vibeZoneOrders');
    if (orders) {
        orders = JSON.parse(orders);
        
        // Find and update order
        const orderIndex = orders.findIndex(order => order.id === orderId);
        if (orderIndex !== -1) {
            orders[orderIndex].status = status;
            
            // Save back to localStorage
            localStorage.setItem('vibeZoneOrders', JSON.stringify(orders));
        }
    }
}

// Send order details to WhatsApp
function sendOrderToWhatsApp(order) {
    // Format order details for WhatsApp
    let message = `*New Order: ${order.id}*\n\n`;
    
    // Customer details
    message += `*Customer:* ${order.customer.firstName} ${order.customer.lastName}\n`;
    message += `*Email:* ${order.customer.email}\n`;
    message += `*Phone:* ${order.customer.phone}\n\n`;
    
    // Order items
    message += `*Order Items:*\n`;
    order.items.forEach(item => {
        message += `- ${item.name} × ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    // Order totals
    message += `\n*Subtotal:* $${order.subtotal.toFixed(2)}\n`;
    message += `*Shipping:* ${order.shipping === 0 ? 'Free' : `$${order.shipping.toFixed(2)}`}\n`;
    message += `*Total:* $${order.total.toFixed(2)}\n\n`;
    
    // Payment status
    message += `*Payment Status:* Paid\n`;
    message += `*Order Date:* ${new Date(order.date).toLocaleString()}\n\n`;
    
    // Shipping address
    message += `*Shipping Address:*\n`;
    message += `${order.customer.address.street}\n`;
    if (order.customer.address.street2) {
        message += `${order.customer.address.street2}\n`;
    }
    message += `${order.customer.address.city}, ${order.customer.address.state} ${order.customer.address.postcode}\n`;
    message += `${getCountryName(order.customer.address.country)}\n\n`;
    
    // Order notes
    if (order.notes) {
        message += `*Notes:* ${order.notes}\n\n`;
    }
    
    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp phone number (replace with your company's number)
    const phoneNumber = "233208517482"; // Replace with your WhatsApp number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
}

// Get country name from country code
function getCountryName(countryCode) {
    const countries = {
        'GH': 'Ghana',
        'NG': 'Nigeria',
        'KE': 'Kenya',
        'ZA': 'South Africa'
        // Add more countries as needed
    };
    
    return countries[countryCode] || countryCode;
}