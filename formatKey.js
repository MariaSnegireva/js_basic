'use strict';

/**
 * @param {string} key
 * @param {number} k
 *
 * @returns {string}
 */
function formatKey(key, k) {
  const formattedKey = key.replace(/-/g, '').toUpperCase();
  let result = '';

  if (formattedKey.length <= k) {
    result += formattedKey;
  } else {
    let firstGroupLength = formattedKey.length % k;

    if (firstGroupLength === 0) {
      firstGroupLength = k;
    }
    result += formattedKey.substr(0, firstGroupLength) + '-';

    for (let i = firstGroupLength; i < formattedKey.length; i += k) {
      result += formattedKey.substr(i, k);

      if (i + k < formattedKey.length) {
        result += '-';
      }
    }
  }
  return result;
}

// formatKey('5F3Z-2e-9-w', 4) === '5F3Z-2E9W'
// formatKey('2-5g-3-J', 2) === '2-5G-3J'
// formatKey('rk-6', 3) === 'RK6'
