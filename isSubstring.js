/**
 * @param {string} phrase
 * @param {string} part
 *
 * @returns {boolean}
 */
function isSubstring(phrase, part) {
  if (phrase.toLocaleLowerCase === part.toLocaleLowerCase) {
    return phrase.includes(part);
  }
  return false;
}
