export const handleUp = (giveUp, count, setCount, setGiveUp, setGiveDown) => {
  if (!giveUp) {
    setCount(count + 1);
  } else {
    setCount(count - 1);
  }
  setGiveUp(!giveUp);
  setGiveDown(false);
};

export const handleDown = (giveDown, count, setCount, setGiveUp, setGiveDown) => {
  if (!giveDown) {
    setCount(count - 1);
  } else {
    setCount(count + 1);
  }
  setGiveDown(!giveDown);
  setGiveUp(false);
};
