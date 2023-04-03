/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
    let sum = 0;
    for (const char of jewels) {
        for (const ch of stones) {
            if (char === ch) {
                sum++;
            }
        }
    }
    return sum;
}

console.log(numJewelsInStones('aA', 'aAAbbbb'));
