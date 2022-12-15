// imports
import React from "react";
import { HotBtn, Word, NavLinkBtn } from "./HotButton.styled";
import { HiFire } from "react-icons/hi";
/**
 * Component that displays a list of posts on the homepage categorized as hot posts
 *
 * @returns {React.Component}
 */
const HotButton = ({ clickedBtn, handleClicked }) => {
  return (
    <HotBtn key={2} onClick={handleClicked} id={"2"} clickedBtn={clickedBtn}>
      <Word clickedBtn={clickedBtn} id={"2"}>
        <HiFire id={"2"} size={21} />{" "}
      </Word>
      <Word clickedBtn={clickedBtn} id={"2"}>
        Hot
      </Word>
    </HotBtn>
  );
};

export default HotButton;
