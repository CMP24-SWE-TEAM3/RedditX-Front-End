// imports
import React from "react";
import { TiStarburstOutline, TiStarburst } from "react-icons/ti";
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
        <TiStarburstOutline className="un-fill" size={22} />
        <TiStarburst className="fill" size={22} />
      </Word>
      <Word>New</Word>
    </NewBtn>
  );
};

export default NewButton;
