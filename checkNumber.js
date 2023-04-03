/**
 * @param {number} number
 *
 * @returns {boolean[]}
 */
function checkNumber(number) {
    let result = [];

    number > 0 ? result.push(true) : result.push(false);
    number % 2 === 0 ? result.push(true) : result.push(false);
    number % 10 === 0 ? result.push(true) : result.push(false);

    return result;
}

//function checkNumber(number) {
//    return [isPositive(number), isEven(number), isMultipleTen(number)];
//}

//function isPositive(number) {
//  return number > 0;
//}

//function isEven(number) {
//    return number % 2 === 0;
//}

//function isMultipleTen(number) {
//    return number % 10 === 0;
//}
