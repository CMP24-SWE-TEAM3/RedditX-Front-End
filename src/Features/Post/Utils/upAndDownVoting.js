import { giveVote } from "../Services/postActions";
/**
 * Function to handle the operation of voteup
 * @param {Boolean} giveUp the previous value of votting up
 * @param {Boolean} giveDown  the previous value of votting down
 * @param {Number} count the number of votes
 * @param {Function} setCount Function to set the number of votes
 * @param {Function} setGiveUp Function to set the state of giveUp
 * @param {Function} setGiveDown  Function to set the state of giveDown
 * @param {String} id The id of the post
 * @param {Function} dataFetch function coming from the custom hook
 * @param {String} token The token of the user for authorization
 */
const handleUp = (
  giveUp,
  giveDown,
  count,
  setCount,
  setGiveUp,
  setGiveDown,
  id,
  dataFetch,
  token
) => {
  const sentId = "t3_" + id;

  if (!giveUp) {
    if (giveDown) {
      setCount(count + 2);

      giveVote(
        dataFetch,
        {
          id: sentId,
          dir: 2,
        },
        token
      );

      giveVote(
        dataFetch,
        {
          id: sentId,
          dir: 1,
        },
        token
      );
    } else {
      setCount(count + 1);

      giveVote(
        dataFetch,
        {
          id: sentId,
          dir: 1,
        },
        token
      );
    }
  } else {
    setCount(count - 1);

    giveVote(
      dataFetch,
      {
        id: sentId,
        dir: 0,
      },
      token
    );
  }
  setGiveUp(!giveUp);
  setGiveDown(false);
};


/**
 * Function to handle the operation of voteDown
 * @param {Boolean} giveUp the previous value of votting up
 * @param {Boolean} giveDown  the previous value of votting down
 * @param {Number} count the number of votes
 * @param {Function} setCount Function to set the number of votes
 * @param {Function} setGiveUp Function to set the state of giveUp
 * @param {Function} setGiveDown  Function to set the state of giveDown
 * @param {String} id The id of the post
 * @param {Function} dataFetch function coming from the custom hook
 * @param {String} token The token of the user for authorization
 */
const handleDown = (
  giveUp,
  giveDown,
  count,
  setCount,
  setGiveUp,
  setGiveDown,
  id,
  dataFetch,
  token
) => {
  const sentId = "t3_" + id;

  if (!giveDown) {
    if (giveUp) {
      setCount(count - 2);

      giveVote(
        dataFetch,
        {
          id: sentId,
          dir: 0,
        },
        token
      );

      giveVote(
        dataFetch,
        {
          id: sentId,
          dir: -1,
        },
        token
      );
    } else {
      setCount(count - 1);

      giveVote(
        dataFetch,
        {
          id: sentId,
          dir: -1,
        },
        token
      );
    }
  } else {
    setCount(count + 1);

    giveVote(
      dataFetch,
      {
        id: sentId,
        dir: 2,
      },
      token
    );
  }
  setGiveDown(!giveDown);
  setGiveUp(false);
};

export { handleUp, handleDown };
