/**
 * @param {number[]} testResults
 *
 * @returns {number[]}
 */
function getSpeedStatistic(testResults) {
    if (testResults.length === 0) {
        return [0, 0, 0];
    }
    let min = testResults[0];
    let max = testResults[0];
    let sum = 0;
    let speeds = [];

    for (let value of testResults) {
        if (value > max) {
            max = value;
        } else if (value < min) {
            min = value;
        }
        sum += value;
    }

    const average = Math.floor(sum / testResults.length);
    speeds.push(min);
    speeds.push(max);
    speeds.push(average);

    return speeds;
}
