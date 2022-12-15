/**
 * Adds minutes to a date
 *
 * @param {Date} date - Date to add minutes to
 * @param {Number} minutes - Number of minutes to add
 * @returns {Date} - Date with minutes added
 */
function AddMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

export default AddMinutes;
