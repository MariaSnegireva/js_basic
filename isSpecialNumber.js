/**
 * @param {number} n
 *
 * @returns {string}
 */
function isSpecialNumber(n) {
    let string = n.toString();

    for (const elem of string) {
        if (elem > 5) {
            return 'NOT!!';
        }
    }
    return 'Special!!';
}
