// imports
import React from "react";
import { TopBtn, Word } from "./TopButton.styled";
import { AiOutlineToTop } from "react-icons/ai";

/**
 * Component that directs to a top page after user clicks on  a button
 *
 * @returns {React.Component}
 */
const TopButton = ({ clickedBtn, handleClicked }) => {
  return (
    <TopBtn key={4} id={"4"} clickedBtn={clickedBtn} onClick={handleClicked}>
      <span id={"4"}>
        {" "}
        <AiOutlineToTop id={"4"} size={22} />
      </span>
      <Word id={"4"}>Top</Word>
    </TopBtn>
  );
};

export default TopButton;
