/**
 * @param {number} N
 *
 * @returns {number[]}
 */
function createArray(N) {
    if (N === 0) {
        return [];
    }

    let numbers = [];

    for (let i = 1; i <= N; i++) {
        numbers.push(i);
    }

    return numbers;
}
