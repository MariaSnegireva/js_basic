/**
 * @param {string} str
 *
 * @returns {string[]}
 */
function splitString(str) {
    let result = [];
    let string = str;

    if (string.length % 2 !== 0) {
        string += '_';
    }

    for (let i = 0; i < string.length; i += 2) {
        result.push(string[i] + string[i + 1]);
    }
    return result;
}
