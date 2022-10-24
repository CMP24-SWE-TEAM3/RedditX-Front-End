import React from 'react';
import Badge from "Components/BadgeButton/Badge";
import {StyledHeader, StyledSeperator} from "Layouts/Navbar/Navbar.styled";
import SignUp from "Components/SignUp/SignUp";
import LoginButton from "Components/LoginButton/LoginButton";
import LandingSearch from "Components/LandingSearch/LandingSearch";
import DropDownRightButton from "Components/DropDownRight/DropDownRight";
const LoginNavbar = (props) => {
    const ButtonHandler = () => {
        alert('Hello Reddit!');
        console.log('Hello Reddit!');

    }
    return (
        <>
        <StyledHeader>
            <Badge/>
            <LandingSearch/>
            <SignUp/>
            <LoginButton/>
            <DropDownRightButton darkModeON={props.Changemode}/>
        </StyledHeader>
        </>
    );
};

export default LoginNavbar;
