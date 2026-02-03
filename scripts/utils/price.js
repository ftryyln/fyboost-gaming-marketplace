/**
 * Price Utility Module
 * Handles all price-related operations for FYBoost platform
 */

/**
 * Parse Indonesian Rupiah string to number
 * @param {string} rpString - Price string (e.g., "Rp. 36.000" or "Rp. 12.000.000")
 * @returns {number} - Numeric value (e.g., 36000 or 12000000)
 */
export function parsePrice(rpString) {
  const numberString = rpString.replace(/[^\d]/g, ''); // Remove all non-digit characters
  return parseInt(numberString, 10);
}

/**
 * Format number to Indonesian Rupiah string
 * @param {number} amount - Numeric amount
 * @returns {string} - Formatted price string (e.g., "Rp 36.000")
 */
export function formatPrice(amount) {
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

/**
 * Calculate discount based on total price
 * @param {number} totalPrice - Total price before discount
 * @returns {number} - Discount amount (10% if >= 100,000, otherwise 0)
 */
export function calculateDiscount(totalPrice) {
  return totalPrice >= 100000 ? Math.floor(totalPrice * 0.1) : 0;
}

/**
 * Calculate final price after discount
 * @param {number} basePrice - Base price per item
 * @param {number} quantity - Number of items
 * @returns {object} - Object containing totalRaw, discount, and finalPrice
 */
export function calculateFinalPrice(basePrice, quantity) {
  const totalRaw = basePrice * quantity;
  const discount = calculateDiscount(totalRaw);
  const finalPrice = totalRaw - discount;
  
  return {
    totalRaw,
    discount,
    finalPrice
  };
}
