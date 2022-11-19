export const handleUp = (
  giveUp,
  giveDown,
  count,
  setCount,
  setGiveUp,
  setGiveDown
) => {
  if (!giveUp) {
    if (giveDown) {
      setCount(count + 2);
    } else {
      setCount(count + 1);
    }
  } else {
    setCount(count - 1);
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
  setGiveDown
) => {
  if (!giveDown) {
    if (giveUp) {
      setCount(count - 2);
    } else {
      setCount(count - 1);
    }
  } else {
    setCount(count + 1);
  }
  setGiveDown(!giveDown);
  setGiveUp(false);
};
