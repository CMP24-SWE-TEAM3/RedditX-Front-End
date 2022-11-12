import React from "react";
import { BaseButton } from "./GenderButton.styled";

/**
 * GenderButton component that is used in AfterSignUp modals
 * @param {string} children The text of the button
 * @param {Array} otherProps Props to know the shape of the button
 * @returns {React.Component}  GenderButton component that is used in AfterSignUp modals
 */
const GenderButton = ({ children, ...otherProps }) => {
  return <BaseButton {...otherProps}>{children}</BaseButton>;
};

export default GenderButton;
