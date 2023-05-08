/**
 * @param {string} str
 *
 * @returns {string}
 */
function reverseWords(str) {
  if (str === '') {
    return '';
  }

  const words = str.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let reversed = '';

    for (let j = 0; j < word.length; j++) {
      reversed = word[j] + reversed;
    }
    result += reversed + ' ';
  }

  return result.trim();
}
