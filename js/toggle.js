// main.js - Complete rewrite
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    initMobileMenu();
    
    // Hero Slider
    initHeroSlider();
    
    // Product Tabs
    initProductTabs();
    
    // Other initializations...
});

// Mobile Menu Toggle Function
function initMobileMenu() {
    console.log('Initializing mobile menu');
    
    // Get elements
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (!mobileMenuToggle || !mainNav) {
        console.error('Mobile menu elements not found!');
        return;
    }
    
    // Create close button if it doesn't exist
    let mobileMenuClose = document.querySelector('.mobile-menu-close');
    if (!mobileMenuClose) {
        mobileMenuClose = document.createElement('button');
        mobileMenuClose.className = 'mobile-menu-close';
        mobileMenuClose.innerHTML = '<i class="fas fa-times"></i>';
        mobileMenuClose.setAttribute('aria-label', 'Close menu');
        mainNav.prepend(mobileMenuClose);
    }
    
    // Create overlay if it doesn't exist
    let menuOverlay = document.querySelector('.menu-overlay');
    if (!menuOverlay) {
        menuOverlay = document.createElement('div');
        menuOverlay.className = 'menu-overlay';
        document.body.appendChild(menuOverlay);
    }
    
    // Open menu function
    function openMenu() {
        mainNav.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // Close menu function
    function closeMenu() {
        mainNav.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
    }
    
    // Add event listeners
    mobileMenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openMenu();
    });
    
    mobileMenuClose.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
    });
    
    menuOverlay.addEventListener('click', function() {
        closeMenu();
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
            closeMenu();
        }
    });
}

// Hero Slider Function
function initHeroSlider() {
    const dots = document.querySelectorAll('.hero-dots .dot');
    const heroImage = document.getElementById('hero-image');
    
    if (!dots.length || !heroImage) return;
    
    const images = [
        'img/hero/hero-1.jpg',
        'img/hero/hero-2.jpg',
        'img/hero/hero-3.jpg',
        'img/hero/hero-4.jpg'
    ];
    
    let currentIndex = 0;
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });
    
    function updateSlider() {
        // Update active dot
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Update image
        heroImage.src = images[currentIndex];
    }
    
    // Auto slide
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }, 5000);
}

// Product Tabs Function
function initProductTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    if (!tabBtns.length) return;
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get tab name
            const tabName = btn.getAttribute('data-tab');
            
            // Load products for this tab
            loadProducts(tabName);
        });
    });
    
    // Load default tab products
    loadProducts('featured');
}

// Load Products Function
function loadProducts(tabName) {
    const productsContainer = document.getElementById('products-container');
    
    if (!productsContainer) return;
    
    // You would typically fetch products from an API or your products.js file
    // For now, we'll just simulate loading with a message
    productsContainer.innerHTML = `<p>Loading ${tabName} products...</p>`;
    
    // Simulate loading delay
    setTimeout(() => {
        // This would be replaced with your actual product loading logic
        productsContainer.innerHTML = `<p>Products for ${tabName} tab would be displayed here.</p>`;
    }, 500);
}