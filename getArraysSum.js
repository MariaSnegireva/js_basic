/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 *
 * @returns {number}
 */
function getArraysSum(arr1, arr2) {
    return getSum(arr1) + getSum(arr2);
}

function getSum(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }
    return sum;
}
