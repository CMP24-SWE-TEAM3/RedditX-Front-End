// imports
import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { Button, Word, Ico } from "./NewButton.styled";

/**
 * Component that directs to New posts
 *
 * @returns {React.Component}
 */
const NewButton = () => {
  return (
    <Button>
      <Ico>
        {" "}
        <MdOutlineWbSunny size={21} />
      </Ico>
      <Word>New</Word>
    </Button>
  );
};

export default NewButton;
