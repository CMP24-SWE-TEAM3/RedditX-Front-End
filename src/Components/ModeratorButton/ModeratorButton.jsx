// imports
import React, {useState} from 'react';
import {MdOutlineRemoveModerator} from 'react-icons/md';
import {ButtonModerator} from './ModeratorButton.styled';
import Dropdown from "react-bootstrap/Dropdown";
import {GrMailOption} from 'react-icons/gr';
import {TbBoxModel2} from "react-icons/tb";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {GlobalButtonStyled} from "../GlobalButton/GlobalButton.styled";
import {BsChatDots} from "react-icons/bs";

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
            <ButtonModerator>
                <Dropdown.Toggle as={MdOutlineRemoveModerator}/>
                <Dropdown.Menu>
                    <Dropdown.Item href="#"><span><TbBoxModel2/></span> <span>Mod Queue</span></Dropdown.Item>
                    <Dropdown.Item href="#"><span><GrMailOption/></span> <span>Modmail</span></Dropdown.Item>
                </Dropdown.Menu>
            </ButtonModerator>
        </OverlayTrigger>
        </>
    );
};

export default ModeratorButton;
