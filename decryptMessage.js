/**
 * @param {string} message
 *
 * @returns {string}
 */
function decryptMessage(message) {
  let reversed = "";

  for (let char of message) {
    reversed = char + reversed;
  }
  return reversed;
}
