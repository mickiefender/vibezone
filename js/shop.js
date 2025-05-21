/**
 * VibeZone E-commerce - Shop Page Functionality
 * This file contains all shop page specific functionality
 */

/**
 * Shop Page Functions
 */

// Initialize shop page
function initShopPage() {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const category = urlParams.get("category")

  // Load products based on category
  const shopContainer = document.getElementById("shop-products")
  if (!shopContainer) return

  let productsToShow

  if (category) {
    productsToShow = window.productUtils.getProductsByCategory(category)

    // Update active category in sidebar
    const categoryLinks = document.querySelectorAll(".category-list a")
    categoryLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("data-category") === category) {
        link.classList.add("active")
      }
    })
  } else {
    productsToShow = window.productUtils.getAllProducts()
  }

  window.cartUtils.loadProductsToContainer(shopContainer, productsToShow)
  updateProductCount(productsToShow.length)

  // Set up category filter
  setupCategoryFilter(shopContainer)

  // Set up price filter
  setupPriceFilter(shopContainer)

  // Set up brand filter
  setupBrandFilter(shopContainer)

  // Set up rating filter
  setupRatingFilter(shopContainer)

  // Set up sorting
  setupSorting(shopContainer)

  // Set up view switcher
  setupViewSwitcher(shopContainer)
}

// Update product count display
function updateProductCount(count) {
  const productCountElement = document.getElementById("showing-count")
  const totalCountElement = document.getElementById("total-count")

  if (productCountElement) {
    productCountElement.textContent = count > 0 ? `1-${count}` : "0"
  }

  if (totalCountElement) {
    totalCountElement.textContent = count
  }
}

// Setup category filter
function setupCategoryFilter(shopContainer) {
  const categoryLinks = document.querySelectorAll(".category-list a")

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Get category
      const category = this.getAttribute("data-category")

      // Update active category
      categoryLinks.forEach((l) => l.classList.remove("active"))
      this.classList.add("active")

      // Filter products
      let productsToShow
      if (category === "all") {
        productsToShow = window.productUtils.getAllProducts()
      } else {
        productsToShow = window.productUtils.getProductsByCategory(category)
      }

      // Load filtered products
      window.cartUtils.loadProductsToContainer(shopContainer, productsToShow)
      updateProductCount(productsToShow.length)

      // Update URL
      const url = new URL(window.location)
      if (category === "all") {
        url.searchParams.delete("category")
      } else {
        url.searchParams.set("category", category)
      }
      window.history.pushState({}, "", url)
    })
  })
}

// Setup price filter
function setupPriceFilter(shopContainer) {
  const minPriceInput = document.getElementById("min-price")
  const maxPriceInput = document.getElementById("max-price")
  const filterPriceBtn = document.getElementById("filter-price")

  if (filterPriceBtn && minPriceInput && maxPriceInput) {
    filterPriceBtn.addEventListener("click", () => {
      const minPrice = Number.parseFloat(minPriceInput.value) || 0
      const maxPrice = Number.parseFloat(maxPriceInput.value) || Number.POSITIVE_INFINITY

      // Filter products by price
      const filteredProducts = window.productUtils.filterByPrice(minPrice, maxPrice)

      // Load filtered products
      window.cartUtils.loadProductsToContainer(shopContainer, filteredProducts)
      updateProductCount(filteredProducts.length)
    })
  }
}

// Setup brand filter
function setupBrandFilter(shopContainer) {
  const brandCheckboxes = document.querySelectorAll('input[name="brand"]')

  brandCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      // Get selected brands
      const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map((cb) =>
        cb.value.toLowerCase(),
      )

      // Filter products by brand
      let filteredProducts
      if (selectedBrands.length > 0) {
        filteredProducts = window.productUtils.filterByBrand(selectedBrands)
      } else {
        filteredProducts = window.productUtils.getAllProducts()
      }

      // Load filtered products
      window.cartUtils.loadProductsToContainer(shopContainer, filteredProducts)
      updateProductCount(filteredProducts.length)
    })
  })
}

// Setup rating filter
function setupRatingFilter(shopContainer) {
  const ratingCheckboxes = document.querySelectorAll('input[name="rating"]')

  ratingCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      // Get highest selected rating
      const selectedRatings = Array.from(document.querySelectorAll('input[name="rating"]:checked')).map((cb) =>
        Number.parseInt(cb.value),
      )

      // Filter products by rating
      let filteredProducts
      if (selectedRatings.length > 0) {
        const minRating = Math.min(...selectedRatings)
        filteredProducts = window.productUtils.filterByRating(minRating)
      } else {
        filteredProducts = window.productUtils.getAllProducts()
      }

      // Load filtered products
      window.cartUtils.loadProductsToContainer(shopContainer, filteredProducts)
      updateProductCount(filteredProducts.length)
    })
  })
}

// Setup sorting
function setupSorting(shopContainer) {
  const sortSelect = document.getElementById("sort-products")

  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      const sortBy = this.value

      // Get current products in container
      const productElements = shopContainer.querySelectorAll(".product-card")
      const productIds = Array.from(productElements).map((el) => el.getAttribute("data-id"))
      const productsToSort = productIds.map((id) => window.productUtils.getProductById(id))

      // Sort products
      const sortedProducts = window.productUtils.sortProducts(productsToSort, sortBy)

      // Load sorted products
      window.cartUtils.loadProductsToContainer(shopContainer, sortedProducts)
    })
  }
}

// Setup view switcher
function setupViewSwitcher(shopContainer) {
  const gridViewBtn = document.querySelector(".grid-view")
  const listViewBtn = document.querySelector(".list-view")

  if (gridViewBtn && listViewBtn) {
    gridViewBtn.addEventListener("click", () => {
      shopContainer.classList.remove("list-view")
      shopContainer.classList.add("grid-view")
      gridViewBtn.classList.add("active")
      listViewBtn.classList.remove("active")
    })

    listViewBtn.addEventListener("click", () => {
      shopContainer.classList.remove("grid-view")
      shopContainer.classList.add("list-view")
      listViewBtn.classList.add("active")
      gridViewBtn.classList.remove("active")
    })
  }
}

// Export shop functions for use in other files
window.shopUtils = {
  initShopPage,
  updateProductCount,
  setupCategoryFilter,
  setupPriceFilter,
  setupBrandFilter,
  setupRatingFilter,
  setupSorting,
  setupViewSwitcher,
}

// Initialize shop functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize shop page if we're on it
  if (document.querySelector(".shop-section")) {
    initShopPage()
  }
})
