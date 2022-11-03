// imports
import React, {useState} from 'react';
import {MdOutlineRemoveModerator} from 'react-icons/md';
import {ButtonModerator} from './ModeratorButton.styled';
import Dropdown from "react-bootstrap/Dropdown";
import {GrMailOption} from 'react-icons/gr';
import {TbBoxModel2} from "react-icons/tb";

/**
 * Component to display the dropdown button with dropdown results
 *
 * @returns {React.Component}
 */
const ModeratorButton = () => {
    return (
        <>
            <ButtonModerator>
                <Dropdown.Toggle as={MdOutlineRemoveModerator}/>
                <Dropdown.Menu>
                    <Dropdown.Item href="#"><span><TbBoxModel2/></span> <span>Mod Queue</span></Dropdown.Item>
                    <Dropdown.Item href="#"><span><GrMailOption/></span> <span>Modmail</span></Dropdown.Item>
                </Dropdown.Menu>
            </ButtonModerator>
        </>
    );
};

export default ModeratorButton;
