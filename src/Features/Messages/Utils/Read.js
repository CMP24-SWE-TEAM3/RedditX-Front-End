/**
 * Function that handles Marking a message as Read
 *
 * @Component
 * @param {number} id - id of the message
 * @param {Function} changeMessage - Function that changes the contents of the current message
 * @returns {React.Component}
 */
function readed(id, changeMessage) {
changeMessage((message) => {
    return message.map((prevState) => {
    return prevState.id === id ? { ...prevState, read: true } : prevState;
    });
});
}

export default readed;