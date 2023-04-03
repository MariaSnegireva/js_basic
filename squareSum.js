function squareSum(numbers) {
    let sum = 0;
    let square = 0;

    for (const number of numbers) {
        square = number ** 2;
        sum += square;
    }
    return sum;
}
