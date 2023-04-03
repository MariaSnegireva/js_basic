function accum(s) {
    let result = s.toLowerCase();
    let str = '';

    for (let i = 0; i < result.length; i++) {
        if (i > 0) {
            str += '-';
        }

        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                str += result[i].toUpperCase();
            } else {
                str += result[i];
            }
        }
    }
    return str;
}

// function accum(s) {
//     let result = [];
//     for (let i = 0; i < s.length; i++) {
//         let currentChar = s[i].toUpperCase();
//         for (let j = 0; j < i; j++) {
//             currentChar += s[i].toLowerCase();
//         }
//         result.push(currentChar);
//     }
//     return result.join('-');
// }
