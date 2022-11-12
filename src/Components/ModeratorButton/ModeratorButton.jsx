// imports
import React from 'react';
import {MdOutlineRemoveModerator} from 'react-icons/md';
import {ButtonModerator} from './ModeratorButton.styled';
import Dropdown from "react-bootstrap/Dropdown";
import {TbBoxModel2} from "react-icons/tb";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {FiMail} from "react-icons/fi";

/**
 * Component to display the dropdown button with dropdown results
 *
 * @returns {React.Component}
 */
const ModeratorButton = () => {
    return (
        <><OverlayTrigger
            key={'bottom'}
            placement={'bottom'}
            overlay={
                <Tooltip id={`tooltip-bottom`}>Moderator</Tooltip>}>
            <ButtonModerator id={'moderator-button'}>
                <Dropdown.Toggle key={Math.random()} as={MdOutlineRemoveModerator}/>
                <Dropdown.Menu id={'moderator-menu'}>
                    <Dropdown.Item key={Math.random()} href="#"><span><TbBoxModel2/></span> <span>Mod Queue</span></Dropdown.Item>
                    <Dropdown.Item key={Math.random()} href="#"><span><FiMail/></span> <span>Modmail</span></Dropdown.Item>
                </Dropdown.Menu>
            </ButtonModerator>
        </OverlayTrigger>
        </>
    );
};

export default ModeratorButton;
