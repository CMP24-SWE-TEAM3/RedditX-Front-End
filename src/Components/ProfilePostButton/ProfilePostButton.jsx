// imports
import React from 'react';
import {ProfileButtonStyled, ProfileLogoStyled} from "./ProfilePostButton.styled";
import Profile from "Assets/Images/profile.ico";

/**
 *  Component that displays the profile's avatar or profile image
 * @returns {Component.React}
 */
const ProfilePostButton = () => {
    return (
        <ProfileButtonStyled>
            <div className={'cap'}>
                <div className={'cover'}>
                    <div className={'last'}/>
                    <div className={'profile-container'}>
                        <ProfileLogoStyled src={Profile} alt={"Profile Picture"}/>
                    </div>
                </div>
            </div>
        </ProfileButtonStyled>
    );
};

export default ProfilePostButton;
