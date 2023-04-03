/**
 * @param {string} words
 *
 * @returns {string}
 */
function makeAbbr(words) {
  let abbreviation = words.charAt(0);
  let previousIndex = 0;

  for (let ch of words) {
    if (ch === " " && words.indexOf(ch) !== words.length - 1) {
      abbreviation += words[words.indexOf(ch, previousIndex) + 1];
    }
    previousIndex++;
  }
  return abbreviation.trim().toUpperCase();
}
