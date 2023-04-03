function getSum(a, b) {
    let result = 0;
    let bigger = a > b ? a : b;
    let smaller = a < b ? a : b;
    for (let i = smaller; i <= bigger; i++) {
        result += i;
    }
    return result;
}
