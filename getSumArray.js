function getSum(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;
    let max = numbers[0];

    for (const n of numbers) {
        if (n > max) {
            max = n;
        }
        sum += n;
    }

    console.log(max);

    return Math.round(sum / numbers.length);
    // return Math.ceil(sum / numbers.length);
    // return Math.floor(sum / numbers.length);
}
