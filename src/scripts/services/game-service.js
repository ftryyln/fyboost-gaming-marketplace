/**
 * Game Service Module
 * Unified service card rendering and checkout navigation for all games
 */

import { parsePrice } from '../utils/price.js';
import { saveOrderData } from '../utils/storage.js';

/**
 * Render service cards dynamically
 * @param {Array} services - Array of service objects
 * @param {string} containerId - ID of the container element
 */
export function renderServiceCards(services, containerId) {
    const cardContainer = document.getElementById(containerId);

    if (!cardContainer) {
        console.error(`Container with ID "${containerId}" not found`);
        return;
    }

    // Clear existing content
    cardContainer.innerHTML = '';

    services.forEach(service => {
        const card = createServiceCard(service);
        cardContainer.innerHTML += card;
    });
}

/**
 * Create HTML for a single service card
 * @param {object} service - Service object {title, image, priceNow, features}
 * @returns {string} - HTML string for the card
 */
function createServiceCard(service) {
    const featureList = service.features
        .map(feature => `<li>${feature}</li>`)
        .join('');

    return `
    <div class="col-md-3">
      <div class="card card-custom-bg h-100 text-white shadow-lg">
        <div class="position-relative">
          <img src="${service.image}" class="card-img-top" alt="${service.title}">
        </div>
        <div class="card-body">
          <h5 class="card-title fw-bold">${service.title}</h5>
          <ul class="list-unstyled small">${featureList}</ul>
          <span class="text-success fs-5 fw-bold">${service.priceNow}</span>
        </div>
        <div class="card-footer bg-transparent border-0">
          <button class="btn btn-purple w-100" onclick="window.goToCheckout('${service.title}', '${service.priceNow}')">Order</button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Navigate to checkout page with order data
 * @param {string} title - Service title
 * @param {string} price - Price string (e.g., "Rp. 36.000")
 */
export function goToCheckout(title, price) {
    const orderData = {
        title: title,
        price: parsePrice(price)
    };

    saveOrderData(orderData);
    window.location.href = 'checkout.html';
}

// Make goToCheckout available globally for onclick handlers
window.goToCheckout = goToCheckout;
