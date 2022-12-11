function markUnread(id, changeMessage, read) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id ? { ...prevState, read: false } : prevState;
      });
    });
}

export default markUnread;