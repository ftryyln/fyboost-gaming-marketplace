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

  // Observe newly added cards for reveal animation
  if (window.revealObserver) {
    cardContainer.querySelectorAll('.reveal').forEach(el => {
      window.revealObserver.observe(el);
    });
  } else {
    // Fallback: show them immediately if observer isn't ready
    cardContainer.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('active');
    });
  }
}

/**
 * Create HTML for a single service card
 * @param {object} service - Service object {title, image, priceNow, features}
 * @returns {string} - HTML string for the card
 */
function createServiceCard(service) {
  const featureList = service.features
    .map(feature => `<li><i data-lucide="check-circle-2"></i> <span>${feature}</span></li>`)
    .join('');

  // Ensure icons are created after rendering
  setTimeout(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, 0);

  return `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div class="service-card-premium reveal">
        <div class="card-img-wrapper">
          <img src="${service.image}" alt="${service.title}">
        </div>
        <div class="card-content-premium">
          <h4 class="card-title">${service.title}</h4>
          <ul class="feature-list">
            ${featureList}
          </ul>
          <div class="mt-auto">
            <span class="price-tag">${service.priceNow}</span>
            <button class="order-btn" onclick="window.goToCheckout('${service.title}', '${service.priceNow}')">
              Order Now
            </button>
          </div>
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
