import { giveVote } from "../Services/postActions";

export const handleUp = (
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

      giveVote(dataFetch, {
        id: sentId,
        dir: 2,
      },token);

      giveVote(dataFetch, {
        id: sentId,
        dir: 1,
      },token);
    } else {
      setCount(count + 1);

      giveVote(dataFetch, {
        id: sentId,
        dir: 1,
      },token);
    }
  } else {
    setCount(count - 1);

    giveVote(dataFetch, {
      id: sentId,
      dir: 0,
    },token);
  }
  setGiveUp(!giveUp);
  setGiveDown(false);
};

export const handleDown = (
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

      giveVote(dataFetch, {
        id: sentId,
        dir: 0,
      }, token);

      giveVote(dataFetch, {
        id: sentId,
        dir: -1,
      }, token);
    } else {
      setCount(count - 1);

      giveVote(dataFetch, {
        id: sentId,
        dir: -1,
      }, token);
    }
  } else {
    setCount(count + 1);

    giveVote(dataFetch, {
      id: sentId,
      dir: 2,
    }, token);
  }
  setGiveDown(!giveDown);
  setGiveUp(false);
};
