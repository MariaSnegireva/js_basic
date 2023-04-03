/**
 * @param {number[]} first
 * @param {number[]} second
 *
 * @returns {number[]}
 */
function combineArrays(first, second) {
    let result = [];

    for (let i = 0; i < first.length; i++) {
        result.push(first[i] + second[i]);
    }
    return result;
}
