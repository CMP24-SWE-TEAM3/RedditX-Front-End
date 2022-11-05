import React, {useState} from "react";
import {OffcanvasBody} from "../DropDownButtonLeft/DropDownLeft.styled";
import Offcanvas from "react-bootstrap/Offcanvas";
import DropDownMenu from "Components/DropDownMenu/DropDownMenu";
import {AiOutlineContainer} from "react-icons/ai";
import {ButtonStyled} from "./SideBar.styled";
import DropDownItem from "../DropDownItem/DropDownItem";

/**
 * Component that displays a sidebar which includes a dropdown menu in it
 * @returns {React.Component}
 */
const SideBar = ({showButton,showSideBar,setShowSideBar}) => {

    const handleClose = () => setShowSideBar(false);
    const handleShow = () => {
        setShowSideBar(true);
    };

    return (
        <>
            {showButton && <ButtonStyled onClick={handleShow}>
                <AiOutlineContainer/>
            </ButtonStyled>}

            <OffcanvasBody show={showSideBar} onHide={handleClose} className={'mt-5'} backdrop={false}>
                <Offcanvas.Body>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title/>
                    </Offcanvas.Header>
                    <DropDownItem/>
                </Offcanvas.Body>
            </OffcanvasBody>
        </>
    );
}

export default SideBar;