// imports
import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {DropDownLeftStyled} from "./DropDownLeft.styled";
import {AiFillHome} from 'react-icons/ai';
import DropDownMenu from "Components/DropDownMenu/DropDownMenu";
import CustomToggle from "Components/CustomToggle/CustomToggle";
import SideBar from "Components/SideBar/SideBar";
import {GrFormDown} from "react-icons/gr";


/**
 * Component that has all your accessibility and profile in drop-down list.
 *
 * @returns {React.Component}
 */

const DropDownLeft = () => {
    /**
     * @ function that controls to show and hide drop-down list
     * @param {boolean,boolean}
     */
    const [show, setShow] = useState(false);

    /**
     * @ function that handle toggleVisible of drop -down list and sidebar
     */
    const handleToggle = () => {
        if (!show && showSideBar)
            return;
        setShow(!show);
    };

    const [showSideBar, setShowSideBar] = useState(false);
    return (

        <DropDownLeftStyled>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-home"
                             onClick={handleToggle}>
                <div className={'all-drop'}>
                    <div className={'home-ico'}>

                        <span>
                            <AiFillHome/>
                        </span>
                        <span>
                            <h6>Home</h6>
                        </span>
                    </div>
                    <SideBar showButton={show} showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
                </div>
                <span className={'down-form'}><GrFormDown/></span>
            </Dropdown.Toggle>
            {show && <DropDownMenu/>}
        </DropDownLeftStyled>

    );
};
export default DropDownLeft;



