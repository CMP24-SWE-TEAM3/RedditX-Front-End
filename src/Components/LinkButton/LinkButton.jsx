import React from 'react';
import {IconStyled, LinkButtonStyled} from "./LinkButton.styled";

const LinkButton = () => {
    const LinkButton = () => {
        alert("Go to Create Post  Link");
    }
    return (
        <LinkButtonStyled onClick={LinkButton}>
            <IconStyled/>
        </LinkButtonStyled>
    );
};

export default LinkButton;
