/**
 * @param {string[]} words
 *
 * @returns {string[]}
 */
function arrayReverse(words) {
  const arrStr = words.join('');
  let reversedArrStr = arrStr.split('').reverse().join('');
  const reversedArr = [];

  for (let i = 0; i < words.length; i++) {
    reversedArr.push(reversedArrStr.slice(0, words[i].length));

    reversedArrStr = reversedArrStr.slice(
      words[i].length);
  }

  return reversedArr;
}
arrayReverse(['Mate', 'Academy']);
// ['ymed', 'acAetaM'];
