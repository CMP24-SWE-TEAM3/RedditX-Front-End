/**
 * Function to get the strength of the password
 * @param {string} str The user password
 * @returns {number} password strength
 */

let GetPasswordStrength = (str) => {
  const uniqueCount = new Set(str).size;

  return uniqueCount;
};

export default GetPasswordStrength;
