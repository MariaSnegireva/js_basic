/**
 * @param {number[]} currentPowers
 *
 * @returns {number[]}
 */
function doublePower(currentPowers) {
    if (currentPowers === []) {
        return [];
    }

    let result = [];

    for (let i = 0; i < currentPowers.length; i++) {
        result.push(currentPowers[i] * 2);
    }
    return result;
}
