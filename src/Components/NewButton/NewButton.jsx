// imports
import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { NewBtn, Word } from "./NewButton.styled";

/**
 * Component that directs to New posts
 *
 * @returns {React.Component}
 */
const NewButton = ({ clickedBtn, handleClicked }) => {
  return (
    <NewBtn key={3} id={"3"} onClick={handleClicked} clickedBtn={clickedBtn}>
      <Word id={"3"}>
        {" "}
        <MdOutlineWbSunny id={"3"} size={21} />
      </Word>
      <Word id={"3"}>New</Word>
    </NewBtn>
  );
};

export default NewButton;
