// imports
import React from 'react';
import {BsChatDots} from 'react-icons/bs';
import {ButtonsGroupStyled, GlobalButtonStyled} from "Components/GlobalButton/GlobalButton.styled"
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {RiCoinsLine} from "react-icons/ri";

/**
 *  Component that displays a message box
 * @param props props passed from parent to test
 * @returns {React.Component}
 */
const ChatButton = (props) => {
    return (
        <ButtonsGroupStyled>
            <OverlayTrigger
                key={'bottom'}
                placement={'bottom'}
                overlay={
                    <Tooltip id={`tooltip-bottom`}>Chat</Tooltip>}>
                <GlobalButtonStyled onClick={props.onshow}>
                    <BsChatDots/>
                </GlobalButtonStyled>
            </OverlayTrigger>
        </ButtonsGroupStyled>
    );
};

export default ChatButton;
