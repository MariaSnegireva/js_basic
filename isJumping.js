/**
 * @param {number} number
 *
 * @returns {string}
 */
function isJumping(number) {
    const numToStr = number.toString();
    let result = 0;

    for (let i = 1; i < numToStr.length; i++) {
        result = numToStr[i] - numToStr[i - 1];
        if (result != 1 && result != -1) {
            return 'NOT JUMPING';
        }
    }
    return 'JUMPING';
}
