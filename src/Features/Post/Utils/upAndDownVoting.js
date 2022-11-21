import { giveVote } from "../Services/postActions";

export const handleUp = (
  giveUp,
  giveDown,
  count,
  setCount,
  setGiveUp,
  setGiveDown,
  id,
  dataFetch
) => {
  const sentId = "t3_" + id;

  if (!giveUp) {
    if (giveDown) {
      setCount(count + 2);

      giveVote(dataFetch, {
        id: sentId,
        dir: 2,
      });

      giveVote(dataFetch, {
        id: sentId,
        dir: 1,
      });
    } else {
      setCount(count + 1);

      giveVote(dataFetch, {
        id: sentId,
        dir: 1,
      });
    }
  } else {
    setCount(count - 1);

    giveVote(dataFetch, {
      id: sentId,
      dir: 0,
    });
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
  dataFetch
) => {
  const sentId = "t3_" + id;

  if (!giveDown) {
    if (giveUp) {
      setCount(count - 2);

      giveVote(dataFetch, {
        id: sentId,
        dir: 0,
      });

      giveVote(dataFetch, {
        id: sentId,
        dir: -1,
      });
    } else {
      setCount(count - 1);

      giveVote(dataFetch, {
        id: sentId,
        dir: -1,
      });
    }
  } else {
    setCount(count + 1);

    giveVote(dataFetch, {
      id: sentId,
      dir: 2,
    });
  }
  setGiveDown(!giveDown);
  setGiveUp(false);
};
