/**
 * Function that handles upvoting a Post Reply or a Username Mention
 *
 * @Component
 * @param {number} id - id of the message
 * @param {Function} changeMessage - Function that changes the contents of the current message
 * @param {boolean} upvote - Indicates Upvote status of the comment
 * @returns {React.Component}
 */
function upVote(id, changeMessage, upvote) {
    changeMessage((message) => {
      return message.map((prevState) => {
        if(prevState.id === id && (upvote === "down" || upvote ==="neutral")) {
          return { ...prevState, upvote: "up" };
        }
        else if (prevState.id === id && upvote === "up")
        {
          return { ...prevState, upvote: "neutral"};
        }
        else {
          return prevState;
        }
      });
    });
}

export default upVote;