import React, {useState} from 'react';
import {MdOutlineRemoveModerator} from 'react-icons/md';
import {ButtonModerator} from './ModeratorButton.styled';
import Dropdown from "rsuite/Dropdown";

const ModeratorButton = (props) => {
    const [show, setShow] = useState(false);
    const handlerShow = () => {
        setShow(!show);
    }
    return (
        <>
        <ButtonModerator>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </ButtonModerator>
        </>
    );
};

export default ModeratorButton;
