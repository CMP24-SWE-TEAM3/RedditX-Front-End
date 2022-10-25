import React from 'react';
import {ProfileButtonStyled, ProfileLogoStyled} from "./ProfilePostButton.styled";
import Profile from "Assets/profile.ico";
const ProfilePostButton = () => {
    return (
        <ProfileButtonStyled>
            <ProfileLogoStyled src={Profile} alt={"Profile Picture"}/>
        </ProfileButtonStyled>
    );
};

export default ProfilePostButton;
