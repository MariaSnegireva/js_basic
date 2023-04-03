function persistence(num) {
    let numString = num.toString();
    if (numString.length === 1) {
        return 0;
    }
    let result = 1;
    let count = 0;

    while (numString.length > 1) {
        for (let i = 0; i < numString.length; i++) {
            result = result * numString[i];
        }
        numString = result.toString();
        count++;
        result = 1;
    }

    return count;
}

persistence(155);
