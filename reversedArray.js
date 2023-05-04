function arrayReverse(words) {
  let reversedArr = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reversedWord = '';
    for (let j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }
    reversedArr.push(reversedWord);
  }
  return reversedArr.reverse();
}
arrayReverse(['Mate', 'Academy']);
// ['ymedacA', 'etaM'];

// function arrayReverse(words) {
//   return words.map((word) => word.split('').reverse().join(''));
// }
