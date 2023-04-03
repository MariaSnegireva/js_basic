function getWordsLengths(words) {
    const result = [];

    for (const word of words) {
        result.push(word.length);
    }

    return result;
}

//result [3, 3, 5, 4, 4]
getWordsLengths(['one', 'two', 'three', 'four', 'five']);
