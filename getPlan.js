/**
 * @param {number} startProduction
 * @param {number} numberOfMonths
 * @param {number} percent
 *
 * @returns {number[]}
 */
function getPlan(startProduction, numberOfMonths, percent) {
    let goals = [];
    let currentProduction = startProduction;

    for (let month = 1; month <= numberOfMonths; month++) {
        currentProduction =
            currentProduction + Math.floor(currentProduction * (percent / 100));
        goals.push(currentProduction);
    }
    return goals;
}
