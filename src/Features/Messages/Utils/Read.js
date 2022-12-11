/**
 * Function that handles Marking a message as Read
 *
 * @Component
 * @param {number} id - id of the message
 * @param {Function} changeMessage - Function that changes the contents of the current message
 * @param {boolean} read - Indicates whether the message was read or not
 * @returns {React.Component}
 */
function readed(id, changeMessage, read) {
changeMessage((message) => {
    return message.map((prevState) => {
    return prevState.id === id ? { ...prevState, read: true } : prevState;
    });
});
}

export default readed;