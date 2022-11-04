// imports
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {DropDownLeftStyled} from "./DropDownLeft.styled";
import {AiFillHome} from 'react-icons/ai';
import DropDownMenu from "Components/DropDownMenu/DropDownMenu";
import {CustomToggle} from "Utils/CustomToggle/CustomToggle";
import SideBar from "Components/SideBar/SideBar";


/**
 * Component that has all your accessibility and profile in drop-down list.
 *
 * @returns {React.Component}
 */

const DropDownLeft = () => {
    return (

        <DropDownLeftStyled>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                <div>
                        <span>
                            <AiFillHome/>
                        </span>
                    <span>
                            <h6>Home</h6>
                        </span>

                    <SideBar/>
                </div>
            </Dropdown.Toggle>
            <DropDownMenu/>
        </DropDownLeftStyled>

    );
};
export default DropDownLeft;



