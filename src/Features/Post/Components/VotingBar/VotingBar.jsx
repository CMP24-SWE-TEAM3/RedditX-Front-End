import { Container, Up, Count, Down } from "./VotingBar.styled";

import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";

import { useState, useEffect } from "react";

import { handleUp, handleDown } from "Features/Post/Utils/upAndDownVoting";

import NumberAbbreviate from "number-abbreviate";

/**
 * VotingBar Component that is in the side of Post Container
 * @returns {React.Component} VotingBar component
 */
const VotingBar = ({number}) => {
  /**
   * state to know if the email is valid or not to control what to show to the user
   */
  const [giveUp, setGiveUp] = useState(false);
  const [giveDown, setGiveDown] = useState(false);
  const [count, setCount] = useState(number);
  const [countStr, setCountStr] = useState("");


  useEffect(() => {
    setCountStr(NumberAbbreviate(count,2));
  }, [count]);

  return (
    <Container>
      <Up
        choosed={giveUp}
        onClick={() =>
          handleUp(giveUp, count, setCount, setGiveUp, setGiveDown)
        }
      >
        <TbArrowBigTop size={22} />
      </Up>
      <Count>{countStr}</Count>
      <Down
        choosed={giveDown}
        onClick={() => {
            handleDown(giveDown, count, setCount, setGiveUp, setGiveDown)
        }}
      >
        <TbArrowBigDown size={22} />
      </Down>
    </Container>
  );
};

export default VotingBar;
