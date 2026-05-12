/**
 * Utility functions for tyre e-commerce calculations.
 */

/**
 * Calculates the final price after discount.
 * @param {number} originalPrice - The original price.
 * @param {number} discountPercent - The discount percentage.
 * @returns {number} The final price rounded to nearest integer.
 */
export const calculateFinalPrice = (originalPrice, discountPercent) => {
  return Math.round(originalPrice * (1 - discountPercent / 100));
};

/**
 * Formats price with Indian Rupee symbol.
 * @param {number} price - The price to format.
 * @returns {string} Formatted price string.
 */
export const formatPrice = (price) => {
  return `₹${price.toLocaleString('en-IN')}`;
};

/**
 * Generates a unique ID for cart items.
 * @param {object} item - The item object.
 * @returns {string} Unique ID.
 */
export const generateCartItemId = (item) => {
  return `${item.id}-${Date.now()}`;
};