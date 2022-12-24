import { Container, Up, Count, Down } from "./VotingBar.styled";

import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";

import { useState, useEffect } from "react";

import { handleUp, handleDown } from "Features/Post/Utils/upAndDownVoting";

import NumberAbbreviate from "number-abbreviate";

import useFetchFunction from "Hooks/useFetchFunction";

import { useAuth } from "Features/Authentication/Contexts/Authentication";

/**
 * VotingBar Component that is in the side of Post Container (it contains up vote and down vote buttons).
 * @returns {React.Component} VotingBar component
 */
const VotingBar = ({ number, id, voters }) => {
  const auth = useAuth();
  const [giveUp, setGiveUp] = useState(
    auth.isLoggedIn() && voters
      ? voters.findIndex(
          (voter) => voter.userID === auth.getUserName() && voter.voteType === 1
        ) !== -1
      : false
  );
  const [giveDown, setGiveDown] = useState(
    auth.isLoggedIn() && voters
      ? voters.findIndex(
          (voter) =>
            voter.userID === auth.getUserName() && voter.voteType === -1
        ) !== -1
      : false
  );
  const [count, setCount] = useState(number);
  const [countStr, setCountStr] = useState("");

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
