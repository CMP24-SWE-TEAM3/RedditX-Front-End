import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {OffcanvasBody} from "../DropDownButtonLeft/DropDownLeft.styled";
import Offcanvas from "react-bootstrap/Offcanvas";
import DropDownMenu from "Components/DropDownMenu/DropDownMenu";

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
            <Button variant="primary" onClick={handleShow}>
                Toggle
            </Button>

            <OffcanvasBody show={show} onHide={handleClose} backdrop={false}>
                <Offcanvas.Body>
                    <DropDownMenu/>
                </Offcanvas.Body>
            </OffcanvasBody>
        </>
    );
}

export default SideBar;