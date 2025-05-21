/**
 * VibeZone E-commerce - Data Management
 * This file serves as a bridge between the old data structure and the new products.js file.
 * It ensures backward compatibility with existing code while leveraging the new product database.
 */

// Import products from products.js (this is handled automatically in the browser)
// The products variable is now globally available from products.js

// Legacy hero slides data for backward compatibility
const heroSlides = [
    {
        image: 'img/hero/hero-1.jpg',
        subtitle: 'PREMIUM COLLECTION',
        title: 'Luxury Cars',
        description: 'Experience the thrill of driving with our exclusive collection.'
    },
    {
        image: 'img/hero/hero-2.jpg',
        subtitle: 'DREAM HOMES',
        title: 'Exclusive Properties',
        description: 'Find your perfect home with our curated selection of luxury properties.'
    },
    {
        image: 'img/hero/hero-3.jpg',
        subtitle: 'CUTTING EDGE',
        title: 'Latest Smartphones',
        description: 'Stay connected with the most advanced mobile technology.'
    },
    {
        image: 'img/hero/hero-4.jpg',
        subtitle: 'TIMELESS ELEGANCE',
        title: 'Luxury Watches',
        description: 'Precision craftsmanship for the discerning collector.'
    }
];

// Legacy reviews data for backward compatibility
const reviews = [
    {
        id: 1,
        author: 'John Smith',
        rating: 5,
        date: '2023-03-15',
        title: 'Excellent product!',
        content: 'I am extremely satisfied with this purchase. The quality is outstanding and the service was impeccable.'
    },
    {
        id: 2,
        author: 'Sarah Johnson',
        rating: 4,
        date: '2023-02-28',
        title: 'Great value for money',
        content: 'Very good product for the price. Delivery was quick and the item was exactly as described.'
    },
    {
        id: 3,
        author: 'Michael Brown',
        rating: 5,
        date: '2023-02-10',
        title: 'Highly recommended',
        content: 'This exceeded my expectations. The build quality is excellent and it looks even better in person.'
    },
    {
        id: 4,
        author: 'Emily Davis',
        rating: 3,
        date: '2023-01-25',
        title: 'Good but could be better',
        content: 'The product is good overall, but there are a few minor issues that could be improved.'
    }
];

// Legacy helper functions for backward compatibility
function getRandomProducts(count) {
    // Assuming 'products' is defined globally in products.js
    if (typeof products === 'undefined') {
        console.error('products is not defined. Ensure products.js is loaded.');
        return []; // Return an empty array to prevent errors
    }
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    // Half star
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}