// imports
import React from "react";
import { BestBtn, Word } from "./BestButton,styled";
import { RiRocketLine } from "react-icons/ri";
/**
 * Component that displays a list of posts on the homepage categorized as hot posts
 *
 * @returns {React.Component}
 */
const BestButton = ({ top }) => {
  return (
    <BestBtn to="best" className={top ? "" : "active"}>
      <Word>
        <RiRocketLine size={20} />{" "}
      </Word>
      <Word>Best</Word>
    </BestBtn>
  );
};

export default BestButton;
