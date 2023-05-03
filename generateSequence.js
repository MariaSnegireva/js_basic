/**
 * @param {number} num
 * @param {any|function} pattern
 *
 * @returns {any[]}
 */
function generateSequence(num, pattern) {
  const result = [];

  if (typeof pattern === 'function') {
    for (let i = 0; i < num; i++) {
      result.push(pattern(i));
    }
  } else {
    for (let i = 0; i < num; i++) {
      result.push(pattern);
    }
  }

  return result;
}
