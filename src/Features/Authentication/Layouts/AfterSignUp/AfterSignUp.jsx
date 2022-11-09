import { useState } from "react";

import Gender from "../Gender/Gender";

import Interests from "../Interests/Interests";

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
   * state to know the interests of the user
   */
  const [genderScreen, setGenderScreen] = useState(true);

  /**
   * state to know the interests of the user
   */
  const [interestsScreen, setInterestsScreen] = useState(false);

  /**
   * state to know the interests of the user
   */
  const [photoUploadScreen, setPhotoUploadScreen] = useState(false);

  return (
    <>
      {genderScreen && (
        <Gender
          setGender={setGender}
          setGenderScreen={setGenderScreen}
          setInterestsScreen={setInterestsScreen}
        />
      )}

      {interestsScreen && (
        <Interests
          setInterests={setInterests}
          interests={interests}
          setGenderScreen={setGenderScreen}
          setInterestsScreen={setInterestsScreen}
        />
      )}

      {/* {photoUploadScreen && (
        <Interests
          setInterests={setInterests}
          interests={interests}
          setGenderScreen={setGenderScreen}
          setInterestsScreen={setInterestsScreen}
        />
      )} */}
    </>
  );
};

export default AfterSignUp;
