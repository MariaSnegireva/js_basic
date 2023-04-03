/**
 * @param {number} detailsCount
 * @param {string} robotPart
 *
 * @returns {string}[]
 */
function makeStickers(detailsCount, robotPart) {
    if (detailsCount === 0) {
        return [];
    }

    let partsArr = [];

    for (let i = 1; i <= detailsCount; i++) {
        partsArr.push(`${robotPart} detail #${i}`);
    }
    return partsArr;
}
