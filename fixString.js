function solve(s) {
    let isUppercase = 0;
    let isLowerCase = 0;
    let result = '';

    for (const char of s) {
        if (char === char.toUpperCase()) {
            isUppercase += 1;
        }
    }
    isLowerCase = s.length - isUppercase;
    if (isUppercase > isLowerCase) {
        result = s.toUpperCase();
    } else if (isUppercase <= isLowerCase) {
        result = s.toLowerCase();
    }
    return result;
}
