import React from "react";
import { BaseButton } from "./InterestButton.styled";

/**
 * InterestButton component that is used in AfterSignUp modals
 * @param {string} children The text of the button
 * @param {Array} otherProps Props to know the shape of the button
 * @returns {React.Component}  InterestButton component that is used in AfterSignUp modals
 */
const InterestButton = ({ children, ...otherProps }) => {
  return <BaseButton {...otherProps}>{children}</BaseButton>;
};

export default InterestButton;
