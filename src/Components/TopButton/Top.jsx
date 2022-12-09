// imports
import React from "react";
import { Button, Word } from "./Top.styled";
import { AiOutlineToTop } from "react-icons/ai";

/**
 * Component that directs to a top page after user clicks on  a button
 *
 * @returns {React.Component}
 */
const TopButton = ({ setShowDate }) => {
  return (
    <Button onClick={() => setShowDate(true)}>
      <span>
        {" "}
        <AiOutlineToTop size={22} />
      </span>
      <Word>Top</Word>
    </Button>
  );
};

export default TopButton;
