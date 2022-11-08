// imports
import React from 'react';
import {MdOutlineRemoveModerator} from 'react-icons/md';
import {ButtonModerator} from './ModeratorButton.styled';
import Dropdown from "react-bootstrap/Dropdown";
import {GrMailOption} from 'react-icons/gr';
import {TbBoxModel2} from "react-icons/tb";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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
                <Dropdown.Toggle key={Math.random()} as={MdOutlineRemoveModerator}/>
                <Dropdown.Menu>
                    <Dropdown.Item key={Math.random()} href="#"><span><TbBoxModel2/></span> <span>Mod Queue</span></Dropdown.Item>
                    <Dropdown.Item key={Math.random()} href="#"><span><GrMailOption/></span> <span>Modmail</span></Dropdown.Item>
                </Dropdown.Menu>
            </ButtonModerator>
        </OverlayTrigger>
        </>
    );
};

export default ModeratorButton;
