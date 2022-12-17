// imports
import React from "react";
import { HotBtn, Word } from "./HotButton.styled";
import { HiFire } from "react-icons/hi";
/**
 * Component that displays a list of posts on the homepage categorized as hot posts
 *
 * @returns {React.Component}
 */
const HotButton = () => {
  return (
    <HotBtn to="hot" exact>
      <Word>
        <HiFire size={21} />{" "}
      </Word>
      <Word>Hot</Word>
    </HotBtn>
  );
};

export default HotButton;
