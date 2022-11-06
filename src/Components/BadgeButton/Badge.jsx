import React from 'react';
import redditLogo from 'Assets/images/redditLogo.svg'
import logo from 'Assets/images/logo.png'
import {StyledIcon, StyledLink, StyledTextLogo} from './Badge.styled'

/**
 * Component that displays logos of reddit website
 * @returns {React.Component}
 *
 */
const Badge = () => {
    return (
        <StyledLink>
            <a href={"#"} target={"_self"}>
                <StyledIcon src={logo} alt="logo of reddit"/>
                <StyledTextLogo src={redditLogo} alt="Reddit Logo"/>
            </a>
        </StyledLink>
    );
};
export default Badge;
