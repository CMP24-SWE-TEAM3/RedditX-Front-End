// imports
import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { NewBtn, Word } from "./NewButton.styled";

/**
 * Component that directs to New posts
 *
 * @returns {React.Component}
 */
const NewButton = () => {
  return (
    <NewBtn to="new" exact>
      <Word>
        {" "}
        <MdOutlineWbSunny size={21} />
      </Word>
      <Word>New</Word>
    </NewBtn>
  );
};

export default NewButton;
