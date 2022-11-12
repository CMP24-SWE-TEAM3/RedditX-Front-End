import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import DropDownItem from "Components/DropDownItem/DropDownItem";
import {DropDownMenuStyled} from "./DropDownMenu.styled";

const DropDownMenu = () => {
    return (
        <DropDownMenuStyled>
            <Dropdown.Menu id={'drop-down-menu-home'} show={true}>
                <DropDownItem/>
            </Dropdown.Menu>
        </DropDownMenuStyled>
    );
};

export default DropDownMenu;
