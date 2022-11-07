import React from 'react';
import redditLogo from 'Assets/Images/redditLogo.svg'
import logo from 'Assets/Images/logo.png'
import {StyledIcon, StyledLink, StyledTextLogo} from './Badge.styled'
import {Link} from "react-router-dom";

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
