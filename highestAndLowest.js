function highAndLow(numbers) {
    let str = numbers.split(' ');
    let min = str[0];
    let max = str[0];

    for (const element of str) {
        const num = +element; // convert string to number
        if (num < min) {
            min = num;
        } else if (num > max) {
            max = num;
        }
    }

    return max + ' ' + min;
}

// function highAndLow(numbers) {
//    numbers = numbers.split(' ').map(Number);
//    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }
