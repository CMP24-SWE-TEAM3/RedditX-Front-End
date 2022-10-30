import React from 'react';
import {ProfileButtonStyled, ProfileLogoStyled} from "./ProfilePostButton.styled";
import Profile from "Assets/profile.ico";

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
