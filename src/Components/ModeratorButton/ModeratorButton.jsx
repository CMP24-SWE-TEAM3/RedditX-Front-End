import React from 'react';
import {MdOutlineRemoveModerator} from 'react-icons/md';
import {GlobalButtonStyled} from "Components/Global/GlobalButton.styled";

const ModeratorButton = (props) => {
    return (
        <GlobalButtonStyled onClick={props.onshow}>
            <MdOutlineRemoveModerator/>
        </GlobalButtonStyled>
    );
};

export default ModeratorButton;
