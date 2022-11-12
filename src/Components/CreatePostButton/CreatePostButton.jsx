// imports
import React from 'react';
import {HiOutlinePlus} from 'react-icons/hi';
import {GlobalButtonStyled} from "Components/GlobalButton/GlobalButton.styled";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/**
 * Component that displays the profile button
 *
 * @param props to test against properties
 *
 * @returns {React.Component}
 */
const CreatePostButton = (props) => {
    return (
        <OverlayTrigger
            key={'bottom'}
            placement={'bottom'}
            overlay={
                <Tooltip id={`tooltip-bottom`}>Create Post</Tooltip>}>
            <GlobalButtonStyled onClick={props.onshow}>
                <HiOutlinePlus/>
            </GlobalButtonStyled>
        </OverlayTrigger>
    );
};

export default CreatePostButton;
