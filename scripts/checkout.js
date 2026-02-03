/**
 * Checkout Page Logic
 * Refactored to use utility modules
 */

import { calculateFinalPrice, formatPrice } from './utils/price.js';
import { getOrderData, clearOrderData } from './utils/storage.js';

// Initialize page on load
window.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.getElementById("quantity");
  quantityInput.addEventListener("input", updateOrderSummary);

  // Handle Payment Method Selection
  const paymentCards = document.querySelectorAll('.payment-card');
  const paymentInput = document.getElementById('payment');

  paymentCards.forEach(card => {
    card.addEventListener('click', function () {
      // Remove selected class from all
      paymentCards.forEach(c => c.classList.remove('selected'));
      // Add to clicked
      this.classList.add('selected');
      // Update hidden input
      paymentInput.value = this.getAttribute('data-payment');
    });
  });

  // Handle Quantity Buttons
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');

  if (qtyMinus && qtyPlus) {
    qtyMinus.addEventListener('click', () => {
      const currentVal = parseInt(quantityInput.value) || 1;
      if (currentVal > 1) {
        quantityInput.value = currentVal - 1;
        updateOrderSummary();
      }
    });

    qtyPlus.addEventListener('click', () => {
      const currentVal = parseInt(quantityInput.value) || 1;
      quantityInput.value = currentVal + 1;
      updateOrderSummary();
    });
  }

  updateOrderSummary(); // Initial load
});

/**
 * Update order summary display
 */
function updateOrderSummary() {
  const orderData = getOrderData();
  const quantity = parseInt(document.getElementById("quantity").value) || 1;

  if (!orderData) {
    console.error('No order data found');
    return;
  }

  const { totalRaw, discount, finalPrice } = calculateFinalPrice(orderData.price, quantity);

  // Update UI
  document.getElementById("order-title").textContent = `${orderData.title} × ${quantity}`;
  document.getElementById("order-price").textContent = formatPrice(totalRaw);
  document.getElementById("discount-price").textContent = formatPrice(discount);
  document.getElementById("total-price").textContent = formatPrice(finalPrice);
}

// Handle form submission
document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const orderData = getOrderData();

  if (!orderData) {
    alert("Data order tidak ditemukan.");
    return;
  }

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    gameID: document.getElementById("gameID").value,
    email: document.getElementById("email").value,
    payment: document.getElementById("payment").value,
    quantity: parseInt(document.getElementById("quantity").value)
  };

  // Calculate final price
  const { finalPrice } = calculateFinalPrice(orderData.price, formData.quantity);

  // In a real application, you would send this data to a server
  console.log('Order submitted:', { ...formData, orderData, finalPrice });

  // Clear order data and redirect
  clearOrderData();
  window.location.href = 'thankyou.html';
});
