// imports
import React from "react";
import DropDownItem from "Components/DropDownItem/DropDownItem";
import { DropDownMenuStyled } from "./DropDownMenu.styled";

/**
 * Component that displays a dropdown menu as a child from dropdown toggle button
 * @param show
 * @param dropdownMenuRef
 * @return {React.Component}
 */
const DropDownMenu = ({ show, dropdownMenuRef, dropDownItemRef }) => {
  return (
    <DropDownMenuStyled
      data-testid="dropDownMenuId"
      show={show}
      ref={dropdownMenuRef}
    >
      <DropDownItem dropDownItemRef={dropDownItemRef} />
    </DropDownMenuStyled>
  );
};

export default DropDownMenu;
