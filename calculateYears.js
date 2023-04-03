function calculateYears(principal, interest, tax, desired) {
    let proficient = principal;
    let result = 0;
    let countYears = 0;

    if (proficient === desired) {
        return 0;
    }

    while (proficient <= desired) {
        result = proficient * interest * ((100 - 100 * tax) / 100);
        proficient += result;
        countYears++;
    }
    return countYears;
}
