
function readed(id, changeMessage, read) {
changeMessage((message) => {
    return message.map((prevState) => {
    return prevState.id === id ? { ...prevState, read: true } : prevState;
    });
});
}

export default readed;