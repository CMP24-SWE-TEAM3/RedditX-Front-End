// imports
import React, { useEffect } from "react";
import {
  ProfileButtonStyled,
  ProfileLogoStyled,
  LastContainer,
  ProfileContainer,
  CapContainer,
  Cover,
} from "./ProfilePostButton.styled";
import Profile from "Assets/Images/profile.ico";
import getUser from "Features/User/Services/getMine";
import useFetchFunction from "Hooks/useFetchFunction";
import { BASE_URL } from "API/axios";
import { useAuth } from "Features/Authentication/Contexts/Authentication";

/**
 *  Component that displays the profile's avatar or profile image
 * @returns {Component.React}
 */
const ProfilePostButton = () => {
  // authorization's user
  const auth = useAuth();
  // Fetch communities
  // Call useFetchFunction hook to handle states: loading, error, data
  // Loading: Boolean to tell if the request has been sent, or it's still loading
  // Error: Contains error message when the request is failed
  // Data: the response data
  const [userInfo, error, isLoading, fetchData] = useFetchFunction();
  useEffect(() => {
    getUser(fetchData, auth);
  }, []);

  return (
    <ProfileButtonStyled>
      <CapContainer>
        <Cover>
          <LastContainer />
          <ProfileContainer>
            {userInfo &&
              userInfo.length !== 0 &&
              userInfo.meInfo.user.hasOwnProperty("avatar") && (
                <ProfileLogoStyled
                  crossOrigin="anonymous"
                  src={`${BASE_URL}/users/files/${userInfo.meInfo.user.avatar}`}
                  alt={""}
                />
              )}
            {userInfo &&
              userInfo.length !== 0 &&
              !userInfo.meInfo.user.hasOwnProperty("avatar") && (
                <ProfileLogoStyled
                  crossOrigin="anonymous"
                  src={Profile}
                  alt={""}
                />
              )}
          </ProfileContainer>
        </Cover>
      </CapContainer>
    </ProfileButtonStyled>
  );
};

export default ProfilePostButton;
