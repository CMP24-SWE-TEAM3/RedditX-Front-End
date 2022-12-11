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