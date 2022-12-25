/**
 * Function that handles downvoting a Post Reply or a Username Mention  [Used in UI]
 *
 * @Function
 * @param {number} id - id of the message
 * @param {Function} changeMessage - Function that changes the contents of the current message
 * @param {boolean} upvote - Indicates Upvote status of the comment
 * @returns {object} - State after being edited
 */
function downVote(id, changeMessage, upvote) {
    changeMessage((message) => {
      return message.map((prevState) => {
        if(prevState.id === id && (upvote === "up" || upvote ==="neutral")) {
          return { ...prevState, upvote: "down" };
        }
        else if (prevState.id === id && upvote === "down")
        {
          return { ...prevState, upvote: "neutral"};
        }
        else {
          return prevState;
        }
      });
    });
}

export default downVote;