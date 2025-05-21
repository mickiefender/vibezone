/**
 * VibeZone E-commerce - Product Detail Page Functionality
 * This file contains all product detail page specific functionality
 */

/**
 * Product Detail Page Functions
 */

// Initialize product detail page
function initProductDetailPage() {
  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search)
  const productId = urlParams.get("id")

  if (!productId) {
    window.location.href = "shop.html"
    return
  }

  const product = window.productUtils.getProductById(productId)

  if (!product) {
    window.location.href = "shop.html"
    return
  }

  // Update page title and breadcrumb
  document.title = `${product.name} - VibeZone`
  const productTitleElement = document.getElementById("product-title")
  const breadcrumbTitleElement = document.getElementById("breadcrumb-title")

  if (productTitleElement) productTitleElement.textContent = product.name
  if (breadcrumbTitleElement) breadcrumbTitleElement.textContent = product.name

  // Update product details
  const detailProductTitleElement = document.getElementById("detail-product-title")
  const productPriceElement = document.getElementById("product-price")
  const productOldPriceElement = document.getElementById("product-old-price")
  const productDescriptionElement = document.getElementById("product-description")
  const fullDescriptionElement = document.getElementById("full-description")

  if (detailProductTitleElement) detailProductTitleElement.textContent = product.name

  if (productPriceElement) productPriceElement.textContent = window.productUtils.formatPrice(product.price)

  if (productOldPriceElement) {
    if (product.oldPrice) {
      productOldPriceElement.textContent = window.productUtils.formatPrice(product.oldPrice)
      productOldPriceElement.style.display = "inline-block"
    } else {
      productOldPriceElement.style.display = "none"
    }
  }

  if (productDescriptionElement) productDescriptionElement.textContent = product.shortDescription
  if (fullDescriptionElement) fullDescriptionElement.textContent = product.description

  // Update product meta info
  const productSkuElement = document.getElementById("product-sku")
  const productCategoryElement = document.getElementById("product-category")
  const productTagsElement = document.getElementById("product-tags")

  if (productSkuElement) productSkuElement.textContent = product.sku
  if (productCategoryElement)
    productCategoryElement.textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1)
  if (productTagsElement) productTagsElement.textContent = product.tags.join(", ")

  // Update product images
  const mainImageElement = document.getElementById("main-product-image")
  if (mainImageElement) {
    mainImageElement.src = product.images[0]
    mainImageElement.alt = product.name
  }

  // Update thumbnail images
  const thumbnailContainer = document.querySelector(".thumbnail-images")
  if (thumbnailContainer) {
    thumbnailContainer.innerHTML = ""

    product.images.forEach((image, index) => {
      const thumbnail = document.createElement("div")
      thumbnail.className = `thumbnail ${index === 0 ? "active" : ""}`
      thumbnail.innerHTML = `<img src="${image}" alt="${product.name} - Image ${index + 1}">`

      thumbnail.addEventListener("click", function () {
        // Update active thumbnail
        document.querySelectorAll(".thumbnail").forEach((t) => t.classList.remove("active"))
        this.classList.add("active")

        // Update main image
        mainImageElement.src = image
      })

      thumbnailContainer.appendChild(thumbnail)
    })
  }

  // Update product badges
  const badgesContainer = document.querySelector(".product-badges")
  if (badgesContainer) {
    badgesContainer.innerHTML = ""

    if (product.isNew) {
      const newBadge = document.createElement("span")
      newBadge.className = "badge new"
      newBadge.textContent = "New"
      badgesContainer.appendChild(newBadge)
    }

    if (product.isSale) {
      const saleBadge = document.createElement("span")
      saleBadge.className = "badge sale"
      saleBadge.textContent = "Sale"
      badgesContainer.appendChild(saleBadge)
    }

    if (product.discount) {
      const discountBadge = document.createElement("span")
      discountBadge.className = "badge discount"
      discountBadge.textContent = `-${product.discount}%`
      badgesContainer.appendChild(discountBadge)
    }
  }

  // Update specifications
  const specsTableBody = document.getElementById("specs-table-body")
  if (specsTableBody) {
    specsTableBody.innerHTML = ""

    product.specifications.forEach((spec) => {
      const row = document.createElement("tr")
      row.innerHTML = `
                <td>${spec.name}</td>
                <td>${spec.value}</td>
            `
      specsTableBody.appendChild(row)
    })
  }

  // Update color options
  const colorOptions = document.querySelector(".color-options")
  if (colorOptions) {
    colorOptions.innerHTML = ""

    product.colors.forEach((color) => {
      const colorOption = document.createElement("label")
      colorOption.className = "color-option"
      colorOption.innerHTML = `
                <input type="radio" name="color" value="${color}">
                <span style="background-color: ${color}"></span>
            `
      colorOptions.appendChild(colorOption)
    })
  }

  // Update reviews
  const reviewsList = document.getElementById("reviews-list")
  if (reviewsList) {
    reviewsList.innerHTML = ""

    if (product.reviews && product.reviews.length > 0) {
      product.reviews.forEach((review) => {
        const reviewItem = document.createElement("div")
        reviewItem.className = "review-item"
        reviewItem.innerHTML = `
                    <div class="review-header">
                        <div class="reviewer-info">
                            <div class="reviewer-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="reviewer-details">
                                <h4>${review.author}</h4>
                                <div class="review-date">${new Date(review.date).toLocaleDateString()}</div>
                            </div>
                        </div>
                        <div class="review-rating">
                            ${window.productUtils.getStarRatingHTML(review.rating)}
                        </div>
                    </div>
                    <div class="review-title">${review.title}</div>
                    <div class="review-content">${review.content}</div>
                `
        reviewsList.appendChild(reviewItem)
      })
    } else {
      reviewsList.innerHTML = '<div class="no-reviews">No reviews yet. Be the first to review this product!</div>'
    }
  }

  // Update review summary
  const averageRating = document.querySelector(".average-rating .rating-number")
  const ratingStars = document.querySelector(".average-rating .rating-stars")
  const ratingCount = document.querySelector(".average-rating .rating-count")

  if (averageRating) averageRating.textContent = product.rating.toFixed(1)
  if (ratingStars) ratingStars.innerHTML = window.productUtils.getStarRatingHTML(product.rating)
  if (ratingCount) ratingCount.textContent = `Based on ${product.reviewCount} reviews`

  // Set up product tabs
  setupProductTabs()

  // Set up add to cart functionality
  const addToCartBtn = document.getElementById("add-to-cart-btn")
  const buyNowBtn = document.getElementById("buy-now-btn")
  const quantityInput = document.getElementById("product-quantity")

  if (addToCartBtn && quantityInput) {
    addToCartBtn.addEventListener("click", () => {
      const quantity = Number.parseInt(quantityInput.value) || 1
      if (window.cartUtils.addToCart(product.id, quantity)) {
        window.productUtils.showNotification(`${product.name} has been added to your cart.`)
      }
    })
  }

  // Set up buy now functionality
  if (buyNowBtn && quantityInput) {
    buyNowBtn.addEventListener("click", () => {
      const quantity = Number.parseInt(quantityInput.value) || 1

      // Clear cart first to ensure only this product is in cart
      window.cartUtils.clearCart()

      // Add product to cart
      if (window.cartUtils.addToCart(product.id, quantity)) {
        // Redirect to checkout page
        window.location.href = "checkout.html"
      }
    })
  }

  // Set up quantity buttons
  const minusBtn = document.querySelector(".quantity-btn.minus")
  const plusBtn = document.querySelector(".quantity-btn.plus")

  if (minusBtn && plusBtn && quantityInput) {
    minusBtn.addEventListener("click", () => {
      let quantity = Number.parseInt(quantityInput.value) || 1
      quantity = Math.max(1, quantity - 1)
      quantityInput.value = quantity
    })

    plusBtn.addEventListener("click", () => {
      let quantity = Number.parseInt(quantityInput.value) || 1
      quantity += 1
      quantityInput.value = quantity
    })
  }

  // Load related products
  const relatedContainer = document.getElementById("related-products")
  if (relatedContainer) {
    const relatedProducts = window.productUtils.getRelatedProducts(product.id, 4)
    window.cartUtils.loadProductsToContainer(relatedContainer, relatedProducts)
  }
}

// Setup product tabs
function setupProductTabs() {
  const tabBtns = document.querySelectorAll(".product-tabs .tab-btn")
  const tabPanels = document.querySelectorAll(".product-tabs .tab-panel")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tab = this.getAttribute("data-tab")

      // Update active tab button
      tabBtns.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")

      // Update active tab panel
      tabPanels.forEach((panel) => panel.classList.remove("active"))
      document.getElementById(`${tab}-panel`).classList.add("active")
    })
  })
}

// Export product detail functions for use in other files
window.productDetailUtils = {
  initProductDetailPage,
  setupProductTabs,
}

// Initialize product detail functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize product detail page if we're on it
  if (document.querySelector(".product-detail-section")) {
    initProductDetailPage()
  }
})
