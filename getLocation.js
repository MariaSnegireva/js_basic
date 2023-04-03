/**
 * @param {number[]} coordinates
 * @param {string[]} commands
 *
 * @returns {number[]}
 */
function getLocation(coordinates, commands) {
    let x = coordinates[0];
    let y = coordinates[1];
    let result = [];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'forward') {
            y += 1;
        } else if (commands[i] === 'back') {
            y -= 1;
        } else if (commands[i] === 'right') {
            x += 1;
            console.log(x);
        } else if (commands[i] === 'left') {
            x -= 1;
            console.log(x);
        }
    }
    result.push(x);
    result.push(y);

    return result;
}
