function squareDigits(num) {
    let str = num.toString();
    let sumOfSquare = '';
    let squareNum = 0;

    for (const n of str) {
        squareNum = n ** 2;
        sumOfSquare += squareNum;
    }

    return Number(sumOfSquare);
}
