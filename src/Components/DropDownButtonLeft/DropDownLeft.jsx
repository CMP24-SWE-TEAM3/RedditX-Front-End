// imports
import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {DropDownLeftStyled} from "./DropDownLeft.styled";
import {AiFillHome} from 'react-icons/ai';
import DropDownMenu from "Components/DropDownMenu/DropDownMenu";
import CustomToggle from "Utils/CustomToggle/CustomToggle";
import SideBar from "Components/SideBar/SideBar";
import CustomMenu from "../../Utils/CustomMenu/CustomMenu";
import {HiOutlinePlus, HiOutlineVideoCamera} from "react-icons/hi";
import ico from "../../Assets/redditico.png";
import {BsArrowUpRightCircle, BsBarChartFill, BsStar} from "react-icons/bs";
import {IoMdNotificationsOutline} from "react-icons/io";


/**
 * Component that has all your accessibility and profile in drop-down list.
 *
 * @returns {React.Component}
 */

const DropDownLeft = () => {
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        if (!show && showSideBar)
            return;
        setShow(!show);
    };
    const [showSideBar, setShowSideBar] = useState(false);
    return (

        <DropDownLeftStyled>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" onClick={handleToggle}>
                <div className={'all-drop'}>
                        <span>
                            <AiFillHome/>
                        </span>
                    <span>
                            <h6>Home</h6>
                        </span>

                    <SideBar showButton={show} showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
                </div>
            </Dropdown.Toggle>
            {show && <DropDownMenu/>}
        </DropDownLeftStyled>

    );
};
export default DropDownLeft;



