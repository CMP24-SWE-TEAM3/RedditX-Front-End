import React from 'react';
import redditLogo from 'Assets/redditLogo.svg'
import logo from 'Assets/logo.png'
import {StyledIcon, StyledLink, StyledTextLogo} from './Badge.styled'

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