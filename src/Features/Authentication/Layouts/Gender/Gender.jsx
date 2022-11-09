/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { SiReddit } from "react-icons/si";

import {
  AuthContainer,
  Privacy,
  AuthParagraph,
  AuthHeader,
  RedditIcon,
  Upper,
  Skip,
} from "./Gender.styled";

import GenderButton from "Features/Authentication/Components/GenderButton/GenderButton";

/**
 *  Gender component that is used in AfterSignUp Component
 * @param {Function} setGender Function to set the gender of the user
 * @param {Function} setGenderScreen Function to set the state of genderScreen
 * @param {Function} setInterestsScreen Function to set the state of interestsScreen
 * @returns {React.Component}  Gender component that is used in AfterSignUp Component
 */

const Gender = ({
  setGender,
  setGenderScreen,
  setInterestsScreen,
  setPhotoUploadScreen,
}) => {
  /**
   * Function to set the gender of the user and go to the next screen
   * @param {String} gender The Gender of the user
   */
  const nextScreen = (gender) => {
    //console.log(gender);
    setGender(gender);
    setGenderScreen(false);
    setPhotoUploadScreen(false);
    setInterestsScreen(true);
  };

  return (
    <>
      {
        <AuthContainer>
          <Upper>
            <RedditIcon>
              <span>
                <SiReddit size={60} color={"red"}></SiReddit>
              </span>
            </RedditIcon>
            <Skip
              onClick={() => {
                setGenderScreen(false);
                setInterestsScreen(true);
              }}
            >
              Skip
            </Skip>
          </Upper>
          <AuthHeader>About you</AuthHeader>
          <AuthParagraph>
            Tell us about yourself to start building your home feed.
          </AuthParagraph>
          <AuthParagraph identity={true}>How do you identify?</AuthParagraph>
          <GenderButton onClick={() => nextScreen("woman")}>Woman</GenderButton>
          <GenderButton onClick={() => nextScreen("man")}>Man</GenderButton>
        </AuthContainer>
      }
    </>
  );
};

export default Gender;
