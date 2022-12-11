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