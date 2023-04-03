/**
 * @param {string} text
 *
 * @returns {number}
 */
function countMs(text) {
  let count = 0;

  for (let ch of text) {
    if (ch === "m" || ch === "M") {
      count++;
    }
  }
  return count;
}
