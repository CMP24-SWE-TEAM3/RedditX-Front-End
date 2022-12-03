// imports
import React, { useState } from "react";
import DropDownItem from "Components/DropDownItem/DropDownItem";
import { DropDownMenuStyled } from "./DropDownMenu.styled";

/**
 * Component that displays a dropdown menu as a child from dropdown toggle button
 * @param show
 * @param dropdownMenuRef
 * @return {React.Component}
 */
const DropDownMenu = ({ show, dropdownMenuRef }) => {
  const [displayMenu, setDisplayMenu] = useState(true);
  return (
    <DropDownMenuStyled
      data-testid="dropDownMenuId"
      show={show && displayMenu}
      ref={dropdownMenuRef}
    >
      <DropDownItem display={setDisplayMenu} />
    </DropDownMenuStyled>
  );
};

export default DropDownMenu;
