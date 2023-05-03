'use strict';

/**
 * @param {number} salePrice
 * @param {number} discount
 *
 * @returns {number}
 */
function getOriginalPrice(salePrice, discount) {
  const price = salePrice / (1 - discount / 100);

  return Number(price.toFixed(2));
}
