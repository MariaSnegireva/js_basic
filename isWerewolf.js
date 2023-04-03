/**
 * @param {string} target
 *
 * @returns {boolean}
 */
function isWerewolf(target) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  let direct = "";
  let reversed = "";

  for (let char of target.toLowerCase()) {
    if (abc.includes(char)) {
      direct += char;
      reversed = char + reversed;
    }
  }

  console.log(`target: "${target}" `);
  console.log(`direct: "${direct}" `);
  console.log(`reversed: "${reversed}" `);

  return direct === reversed;
}
