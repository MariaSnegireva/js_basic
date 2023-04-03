/**
 * @param {string} statistic
 *
 * @returns {number}
 */
function getSuccessRate(statistic) {
  if (!statistic) {
    return 0;
  }

  let count = 0;

  for (const char of statistic) {
    if (char === "1") {
      count++;
    }
  }
  return Math.round((count / statistic.length) * 100);
}
