/**
 * @param {integer} number
 *
 * @returns {boolean}
 */
function isTidy(number) {
    let newString = number.toString();

    for (let i = 1; i < newString.length; i++) {
        if (newString[i - 1] > newString[i]) {
            return false;
        }
    }
    return true;
}
