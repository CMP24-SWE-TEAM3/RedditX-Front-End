// imports
import React from 'react';
import {IconStyled, LinkButtonStyled} from "./LinkButton.styled";

/**
 * Component that displays a link button which directs to create post page to upload  link
 * @returns {React.Component}
 */
const LinkButton = () => {
    const LinkButton = () => {
        alert("Go to Create Post  Link");
    }
    return (
        <LinkButtonStyled id={'create-link-post'} onClick={LinkButton}>
            <IconStyled/>
        </LinkButtonStyled>
    );
};

export default LinkButton;
