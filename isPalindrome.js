/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    const alphanumericRegex = /^[a-z0-9]+$/i;
    let direct = '';
    let reversed = '';

    for (let char of s.toLowerCase()) {
        if (alphanumericRegex.test(char)) {
            direct += char;
            reversed = char + reversed;
        }
    }
    return direct === reversed;
}
