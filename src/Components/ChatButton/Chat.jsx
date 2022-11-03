// imports
import React from 'react';
import {BsChatDots} from 'react-icons/bs';
import {GlobalButtonStyled} from "Components/Global/GlobalButton.styled"

/**
 *  Component that displays a message box
 * @param props props passed from parent to test
 * @returns {React.Component}
 */
const ChatButton = (props) => {
    return (
        <GlobalButtonStyled onClick={props.onshow}>
            <BsChatDots/>
        </GlobalButtonStyled>
    );
};

export default ChatButton;
