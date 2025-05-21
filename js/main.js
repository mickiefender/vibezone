/**
 * VibeZone E-commerce - Main JavaScript
 * This file contains general functionality used across the website
 */


/**
 * General Functions
 */

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dots .dot');
    const prevBtn = document.querySelector('.hero-nav-btn.prev');
    const nextBtn = document.querySelector('.hero-nav-btn.next');
    
    if (!slides.length || !dots.length) return;
    
    let currentIndex = 0;
    let slideInterval;
    const intervalTime = 5000; // 5 seconds per slide
    
    // Initialize slider
    function initSlider() {
        // Set first slide as active
        resetSlideAnimations(currentIndex);
        
        // Start auto sliding
        startSlideInterval();
        
        // Add event listeners
        dots.forEach(dot => {
            dot.addEventListener('click', dotClick);
        });
        
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    }
    
    // Reset animations for current slide
    function resetSlideAnimations(index) {
        const currentSlide = slides[index];
        
        if (!currentSlide) return;
        
        const animElements = currentSlide.querySelectorAll('.slide-in-top, .slide-in-right, .slide-in-bottom, .fade-in');
        
        animElements.forEach(el => {
            // Reset animation by removing and re-adding the class
            const animClass = Array.from(el.classList).find(cls => cls.startsWith('slide-in') || cls === 'fade-in');
            if (animClass) {
                el.classList.remove(animClass);
                void el.offsetWidth; // Trigger reflow
                el.classList.add(animClass);
            }
        });
    }
    
    // Start auto sliding
    function startSlideInterval() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    
    // Go to specific slide
    function goToSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Reset animations
        resetSlideAnimations(index);
        
        // Update current index
        currentIndex = index;
        
        // Restart interval
        startSlideInterval();
    }
    
    // Next slide
    function nextSlide() {
        const newIndex = (currentIndex + 1) % slides.length;
        goToSlide(newIndex);
    }
    
    // Previous slide
    function prevSlide() {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(newIndex);
    }
    
    // Dot click
    function dotClick() {
        const index = parseInt(this.getAttribute('data-index'));
        if (!isNaN(index)) {
            goToSlide(index);
        }
    }
    
    // Initialize the slider
    initSlider();
    
    // Pause auto sliding when hovering over the slider
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        heroSection.addEventListener('mouseleave', () => {
            startSlideInterval();
        });
    }
}


// Update category counts
function updateCategoryCounts() {
  const categories = ["cars", "houses", "phones", "watches"]
  const categoryCards = document.querySelectorAll(".category-card")

  categoryCards.forEach((card) => {
    const categoryName = card.querySelector("h3").textContent.toLowerCase()
    if (categories.includes(categoryName)) {
      const count = window.productUtils.getProductsByCategory(categoryName).length
      const countElement = card.querySelector("p")
      if (countElement) {
        countElement.textContent = `${count} Products`
      }
    }
  })
}

// Initialize homepage
function initHomepage() {
  // Load hero slider
  initHeroSlider()

  // Load featured products
  const featuredContainer = document.getElementById("products-container")
  if (featuredContainer) {
    window.cartUtils.loadProductsToContainer(featuredContainer, window.productUtils.getFeaturedProducts(8))

    // Set up tab functionality
    const tabBtns = document.querySelectorAll(".tab-btn")
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const tab = this.getAttribute("data-tab")

        // Update active tab
        tabBtns.forEach((b) => b.classList.remove("active"))
        this.classList.add("active")

        // Load products based on tab
        let products
        switch (tab) {
          case "new-arrival":
            products = window.productUtils.getNewArrivals(8)
            break
          case "best-selling":
            products = window.productUtils.sortProducts(window.productUtils.getAllProducts(), "popularity").slice(0, 8)
            break
          case "top-rated":
            products = window.productUtils.sortProducts(window.productUtils.getAllProducts(), "rating").slice(0, 8)
            break
          default:
            products = window.productUtils.getFeaturedProducts(8)
        }

        window.cartUtils.loadProductsToContainer(featuredContainer, products)
      })
    })
  }

  // Update category counts
  updateCategoryCounts()
}

// Document ready function
document.addEventListener("DOMContentLoaded", () => {
  // Initialize mobile menu
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mainNav = document.querySelector(".main-nav")

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active")
      this.classList.toggle("active")
    })
  }

  // Initialize page-specific functionality
  if (document.querySelector(".hero-section")) {
    // Homepage
    initHomepage()
  }

  // Newsletter form submission
  const newsletterForms = document.querySelectorAll(".newsletter-form")
  newsletterForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value
      window.productUtils.showNotification(`Thank you! ${email} has been subscribed to our newsletter.`)
      this.reset()
    })
  })
})
