/**
 * Utility functions for data handling.
 * These are used to demonstrate SonarQube analysis and provide reusable logic.
 */

/**
 * Formats a numeric price into a currency string.
 * @param {number} price - The price to format.
 * @param {string} currency - The currency code (default: 'USD').
 * @returns {string} Formatted price or 'N/A' if invalid.
 */
export const formatPrice = (price, currency = 'USD') => {
  if (typeof price !== 'number' || isNaN(price)) {
    return 'N/A';
  }
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  } catch (error) {
    return `${price} ${currency}`;
  }
};

/**
 * Sanitizes a string by removing basic HTML-like tags and trimming whitespace.
 * @param {string} str - The string to sanitize.
 * @returns {string} Sanitized string.
 */
export const sanitizeString = (str) => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.trim().replace(/[<>]/g, '');
};

/**
 * Calculates the price after applying a discount percentage.
 * @param {number} price - Original price.
 * @param {number} discountPercentage - Discount percentage (0-100).
 * @returns {number} Discounted price.
 */
export const calculateDiscount = (price, discountPercentage) => {
  const validPrice = typeof price === 'number' ? price : 0;
  const validDiscount = typeof discountPercentage === 'number' ? discountPercentage : 0;

  if (validPrice <= 0 || validDiscount < 0 || validDiscount > 100) {
    return Math.max(0, validPrice);
  }
  
  const discountAmount = (validPrice * validDiscount) / 100;
  return Number((validPrice - discountAmount).toFixed(2));
};

/**
 * Returns a color code based on a status string.
 * @param {string} status - The status to evaluate.
 * @returns {string} CSS color name or hex code.
 */
export const getStatusColor = (status) => {
  const colors = {
    active: '#28a745',
    pending: '#ffc107',
    inactive: '#dc3545',
    default: '#6c757d',
  };
  return colors[status?.toLowerCase()] || colors.default;
};

/**
 * Converts an array of objects to a map (object) indexed by a key.
 * @param {Array} arr - The array to convert.
 * @param {string} key - The property to use as the map key.
 * @returns {Object} The resulting map.
 */
export const arrayToMap = (arr, key = 'id') => {
  if (!Array.isArray(arr)) {
    return {};
  }
  return arr.reduce((acc, item) => {
    if (item && typeof item === 'object' && item[key]) {
      acc[item[key]] = item;
    }
    return acc;
  }, {});
};

/**
 * Formats a date string into a localized Spanish format.
 * @param {string|Date} dateValue - The date to format.
 * @returns {string} Formatted date or 'Fecha inválida'.
 */
export const formatDate = (dateValue) => {
  if (!dateValue) return 'Fecha inválida';
  
  const date = new Date(dateValue);
  if (isNaN(date.getTime())) {
    return 'Fecha inválida';
  }
  
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Capitalizes the first letter of each word in a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} Capitalized string.
 */
export const capitalizeWords = (str) => {
  if (typeof str !== 'string' || !str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
};
