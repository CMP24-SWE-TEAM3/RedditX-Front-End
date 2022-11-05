import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import CustomMenu from "Utils/CustomMenu/CustomMenu";
import DropDownItem from "Components/DropDownItem/DropDownItem";
import {DropDownMenuStyled} from "./DropDownMenu.styled";

const DropDownMenu = () => {
    return (
        <DropDownMenuStyled>
            <Dropdown.Menu as={CustomMenu} show={true}>
                <DropDownItem/>
            </Dropdown.Menu>
        </DropDownMenuStyled>
    );
};

export default DropDownMenu;
