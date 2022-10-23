import React from 'react';
import {BsChatDots} from 'react-icons/bs';
import {GlobalButtonStyled} from "Components/GlobalButton/GlobalButton.styled"
const ChatButton = (props) => {
    return (
        <GlobalButtonStyled onClick={props.onshow}>
            <BsChatDots/>
        </GlobalButtonStyled>
    );
};

export default ChatButton;