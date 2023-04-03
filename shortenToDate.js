function shortenToDate(longDate) {
    let newDate = '';

    for (let i = 0; i < longDate.length - 1; i++) {
        if (longDate[i] === ',') {
            break;
        }
        newDate += longDate[i];
    }
    return newDate;
}
