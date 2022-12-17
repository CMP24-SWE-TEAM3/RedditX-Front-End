// imports
import React from "react";
import { TopBtn, Word } from "./TopButton.styled";
import { AiOutlineToTop } from "react-icons/ai";

/**
 * Component that directs to a top page after user clicks on  a button
 *
 * @returns {React.Component}
 */
const TopButton = () => {
  return (
    <TopBtn to="top">
      <span>
        {" "}
        <AiOutlineToTop size={22} />
      </span>
      <Word>Top</Word>
    </TopBtn>
  );
};

export default TopButton;
