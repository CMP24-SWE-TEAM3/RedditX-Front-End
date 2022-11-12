/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import {
  AuthContainer,
  Privacy,
  AuthParagraph,
  AuthHeader,
  RedditIcon,
  Upper,
  Skip,
} from "./AfterSignUpLoading.styled";

/**
 *  AfterSignUpLoading component that is used in AfterSignUp Component
 * @returns {React.Component}  AfterSignUpLoading component that is used in AfterSignUp Component
 */

const AfterSignUpLoading = () => {
  return (
    <>
      {
        <AuthContainer>
            <AuthHeader>We're happy you're here!</AuthHeader>
            <AuthParagraph>Your home feed is being created now...</AuthParagraph>
          <LoadingSpinner />
        </AuthContainer>
      }
    </>
  );
};

export default AfterSignUpLoading;
