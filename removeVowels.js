/**
 * @param {string} doc
 *
 * @returns {string}
 */
function removeVowels(doc) {
  let result = "";

  for (const ch of doc) {
    if (!"aeiouy".includes(ch.toLowerCase())) {
      result += ch;
    }
  }
  return result;
}
