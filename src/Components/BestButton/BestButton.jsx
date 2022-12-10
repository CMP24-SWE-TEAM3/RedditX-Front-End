// imports
import React from "react";
import { BestBtn, Word } from "./BestButton,styled";
import { RiRocketLine } from "react-icons/ri";

/**
 * Component that displays a list of posts on the homepage categorized as hot posts
 *
 * @returns {React.Component}
 */
const BestButton = ({ clickedBtn, handleClicked }) => {
  return (
    <BestBtn key={1} onClick={handleClicked} id={"1"} clickedBtn={clickedBtn}>
      <Word id={"1"}>
        <RiRocketLine id={"1"} size={20} />{" "}
      </Word>
      <Word id={"1"}>Best</Word>
    </BestBtn>
  );
};

export default BestButton;
