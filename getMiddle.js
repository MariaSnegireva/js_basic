function getMiddle(s) {
    let middle = '';
    if (s.length % 2 === 0) {
        middle = s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);
    } else if (s.length % 2 > 0) {
        middle = s.charAt(s.length / 2);
    }

    return middle;
}
