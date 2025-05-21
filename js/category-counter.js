/**
 * Dynamic Category Counter
 * This script automatically updates the number of items in each category
 * based on the actual products in the data.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Wait for products data to be available
    if (typeof products === 'undefined') {
        console.error('Products data not found. Make sure products.js is loaded before this script.');
        return;
    }
    
    updateCategoryCounts();
});

/**
 * Updates the category counts in the sidebar
 */
function updateCategoryCounts() {
    console.log('Updating category counts...');
    
    // Get all category links in the sidebar
    const categoryLinks = document.querySelectorAll('.category-list a');
    
    if (!categoryLinks.length) {
        console.log('No category links found in the sidebar.');
        return;
    }
    
    // Count products by category
    const categoryCounts = countProductsByCategory();
    console.log('Category counts:', categoryCounts);
    
    // Update the count for each category link
    categoryLinks.forEach(link => {
        // Get category from the link's href or data attribute
        let category = getCategoryFromLink(link);
        
        if (category) {
            // Find the count span element
            const countSpan = link.querySelector('span');
            
            if (countSpan) {
                // Update the count
                const count = categoryCounts[category] || 0;
                countSpan.textContent = count;
                console.log(`Updated count for ${category}: ${count}`);
            }
        }
    });
}

/**
 * Counts the number of products in each category
 * @returns {Object} An object with category names as keys and counts as values
 */
function countProductsByCategory() {
    const counts = {};
    
    // Loop through all products
    products.forEach(product => {
        const category = product.category.toLowerCase();
        
        // Increment the count for this category
        if (counts[category]) {
            counts[category]++;
        } else {
            counts[category] = 1;
        }
    });
    
    return counts;
}

/**
 * Extracts the category name from a category link
 * @param {HTMLElement} link - The category link element
 * @returns {string|null} The category name or null if not found
 */
function getCategoryFromLink(link) {
    // Try to get category from data attribute first
    let category = link.getAttribute('data-category');
    
    // If no data attribute, try to extract from href
    if (!category) {
        const href = link.getAttribute('href');
        
        if (href) {
            // Extract category from URL query parameter
            const match = href.match(/[?&]category=([^&]+)/);
            if (match && match[1]) {
                category = decodeURIComponent(match[1]).toLowerCase();
            }
            
            // If no query parameter, try to extract from URL path
            if (!category) {
                const pathParts = href.split('/');
                const lastPart = pathParts[pathParts.length - 1].split('.')[0];
                
                if (lastPart && lastPart !== 'shop') {
                    category = lastPart.toLowerCase();
                }
            }
        }
    }
    
    return category;
}

/**
 * Updates category counts when products are filtered
 * Call this function whenever the product list is filtered
 * @param {Array} filteredProducts - The filtered list of products
 */
function updateCategoryCountsForFiltered(filteredProducts) {
    // Count products by category in the filtered list
    const counts = {};
    
    filteredProducts.forEach(product => {
        const category = product.category.toLowerCase();
        
        if (counts[category]) {
            counts[category]++;
        } else {
            counts[category] = 1;
        }
    });
    
    // Update the count for each category link
    const categoryLinks = document.querySelectorAll('.category-list a');
    
    categoryLinks.forEach(link => {
        let category = getCategoryFromLink(link);
        
        if (category) {
            const countSpan = link.querySelector('span');
            
            if (countSpan) {
                const count = counts[category] || 0;
                countSpan.textContent = count;
            }
        }
    });
}