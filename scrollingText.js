/**
 * @param {string} word
 *
 * @returns {string[]}
 */
function scrollingText(word) {
    let reversedWord = [];
    let uppersWord = word.toUpperCase();

    for (let i = 0; i < word.length; i++) {
        reversedWord.push(uppersWord);
        uppersWord = uppersWord.slice(1) + word[i].toUpperCase();
    }
    return reversedWord;
}

// function scrollingText(word) {
//     const result = [];

//     for (let i = 0; i < word.length; i++) {
//         const part = word.slice(i) + word.slice(0, i);

//         result.push(part.toUpperCase());
//     }

//     return result;
// }
