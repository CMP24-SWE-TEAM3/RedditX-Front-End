// imports
import React from "react";
import { Button, Word } from "./HotButton.styled";

/**
 * Component that displays a list of posts on the homepage categorized as hot posts
 *
 * @returns {React.Component}
 */
const HotButton = ({ ico, name }) => {
  return (
    <div>
      <Button>
        <span>{ico} </span>
        <Word>{name}</Word>
      </Button>
    </div>
  );
};

export default HotButton;
