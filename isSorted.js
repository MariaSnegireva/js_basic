/**
 * @param {number[]} boxNumbers
 *
 * @returns {boolean}
 */
function isSorted(boxNumbers) {
    for (let i = 1; i < boxNumbers.length; i++) {
        const current = boxNumbers[i];
        const previous = boxNumbers[i - 1];

        if (current < previous) {
            return false;
        }
    }
    return true;
}
