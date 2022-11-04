import React, {useState} from "react";
import {OffcanvasBody} from "../DropDownButtonLeft/DropDownLeft.styled";
import Offcanvas from "react-bootstrap/Offcanvas";
import DropDownMenu from "Components/DropDownMenu/DropDownMenu";
import {AiOutlineContainer} from "react-icons/ai";
import {ButtonStyled} from "./SideBar.styled";

/**
 * Component that displays a sidebar which includes a dropdown menu in it
 * @returns {React.Component}
 */
const SideBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <ButtonStyled onClick={handleShow}>
                <AiOutlineContainer/>
            </ButtonStyled>

            <OffcanvasBody show={show} onHide={handleClose} className={'mt-5'} backdrop={false}>
                <Offcanvas.Body>
                    <DropDownMenu/>
                </Offcanvas.Body>
            </OffcanvasBody>
        </>
    );
}

export default SideBar;