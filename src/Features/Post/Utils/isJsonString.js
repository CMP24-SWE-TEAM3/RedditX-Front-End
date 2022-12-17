/**
 * Checks if a string is a valid JSON
 *
 * @param {String} str - String to check if it is a valid JSON
 * @returns {Boolean} - Returns true if the string is a valid JSON
 */
function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export default isJsonString;