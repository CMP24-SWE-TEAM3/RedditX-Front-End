import { Container, Up, Count, Down } from "./VotingBar.styled";

import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";

import { useState, useEffect } from "react";

import { handleUp, handleDown } from "Features/Post/Utils/upAndDownVoting";

import NumberAbbreviate from "number-abbreviate";

import useFetchFunction from "Hooks/useFetchFunction";

import { useAuth } from "Features/Authentication/Contexts/Authentication";

/**
 * VotingBar Component that is in the side of Post Container
 * @returns {React.Component} VotingBar component
 */
const VotingBar = ({ number, id }) => {
  console.log("id = ", id);
  const [giveUp, setGiveUp] = useState(false);
  const [giveDown, setGiveDown] = useState(false);
  const [count, setCount] = useState(number);
  const [countStr, setCountStr] = useState("");
  const auth = useAuth();

  /**
   * Custom hook
   */
  const [data, error, isLoading, dataFetch] = useFetchFunction();

  useEffect(() => {
    setCountStr(NumberAbbreviate(count, 2));
  }, [count]);

  return (
    <Container>
      <Up
        data-testid="up"
        choosed={giveUp}
        onClick={(event) => {
          event.stopPropagation();
          console.log("up");
          handleUp(
            giveUp,
            giveDown,
            count,
            setCount,
            setGiveUp,
            setGiveDown,
            id,
            dataFetch,
            auth.getToken()
          );
        }}
      >
        <TbArrowBigTop size={22} />
      </Up>
      <Count data-testid="count" up={giveUp} down={giveDown}>
        {countStr}
      </Count>
      <Down
        data-testid="down"
        choosed={giveDown}
        onClick={(event) => {
          event.stopPropagation();
          handleDown(
            giveUp,
            giveDown,
            count,
            setCount,
            setGiveUp,
            setGiveDown,
            id,
            dataFetch,
            auth.getToken()
          );
        }}
      >
        <TbArrowBigDown size={22} />
      </Down>
    </Container>
  );
};

export default VotingBar;
