// Import hooks
import { useState } from "react";

// Import modals
import Gender from "../Gender/Gender";
import Interests from "../Interests/Interests";
import UploadPhoto from "../UploadPhoto/UploadPhoto";
import AfterSignUpLoading from "../AfterSignUpLoading/AfterSignUpLoading";

// Import styled components
import { StyledSpinner } from "./AfterSignUp.styled";

/**
 * AfterSignUp component that appear to the user after he signed up
 * @returns {React.Component}  Signup component that appear to the user after he signed up
 */
const AfterSignUp = () => {
  /**
   * state to know the gender of the user
   */
  const [gender, setGender] = useState("");

  /**
   * state to know the interests of the user
   */
  const [interests, setInterests] = useState([]);

  /**
   * state to store user's uploaded profile photo
   */
  const [profilePhoto, setProfilePhoto] = useState(null);
  /**
   * state to know what screen should be shown (if true then show gender screen)
   */
  const [genderScreen, setGenderScreen] = useState(true);

  /**
   *  state to know what screen should be shown (if true then show interests screen)
   */
  const [interestsScreen, setInterestsScreen] = useState(false);

  /**
   * state to know what screen should be shown (if true then show photo upload screen)
   */
  const [photoUploadScreen, setPhotoUploadScreen] = useState(false);

  /**
   *
   */
  const [loadingScreen, setLoadingScreen] = useState(false);
  /**
   * Function to submit the form
   */
  const submitForm = () => {
    // TODO: submit the form
    // profilePhoto, interests, gender
    setGenderScreen(false);
    setInterestsScreen(false);
    setPhotoUploadScreen(false);
    setLoadingScreen(true);
  };
  return (
    <>
      {genderScreen && (
        <Gender
          setGender={setGender}
          setGenderScreen={setGenderScreen}
          setInterestsScreen={setInterestsScreen}
          setPhotoUploadScreen={setPhotoUploadScreen}
        />
      )}

      {interestsScreen && (
        <Interests
          setInterests={setInterests}
          interests={interests}
          setGenderScreen={setGenderScreen}
          setInterestsScreen={setInterestsScreen}
          setPhotoUploadScreen={setPhotoUploadScreen}
        />
      )}

      {photoUploadScreen && (
        <UploadPhoto
          setProfilePhoto={setProfilePhoto}
          profilePhoto={profilePhoto}
          setGenderScreen={setGenderScreen}
          setInterestsScreen={setInterestsScreen}
          setPhotoUploadScreen={setPhotoUploadScreen}
          submitForm={submitForm}
        />
      )}
      {loadingScreen && <AfterSignUpLoading/>}
    </>
  );
};

export default AfterSignUp;
