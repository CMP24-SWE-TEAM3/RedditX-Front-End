/**
 * Function that handles Marking a message as Unread
 *
 * @Function
 * @param {number} id - id of the message
 * @param {Function} changeMessage - Function that changes the contents of the current message
 * @returns {object} - State after marking Unread
 */
function markUnread(id, changeMessage) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id ? { ...prevState, read: false } : prevState;
      });
    });
}

export default markUnread;