// imports
import React from "react";
import {
  ProfileButtonStyled,
  ProfileLogoStyled,
  LastContainer,
  ProfileContainer,
  CapContainer,
  Cover,
} from "./ProfilePostButton.styled";
import Profile from "Assets/Images/profile.ico";

/**
 *  Component that displays the profile's avatar or profile image
 * @returns {Component.React}
 */
const ProfilePostButton = () => {
  return (
    <ProfileButtonStyled>
      <CapContainer>
        <Cover>
          <LastContainer />
          <ProfileContainer>
            <ProfileLogoStyled src={Profile} alt={"Profile Picture"} />
          </ProfileContainer>
        </Cover>
      </CapContainer>
    </ProfileButtonStyled>
  );
};

export default ProfilePostButton;
