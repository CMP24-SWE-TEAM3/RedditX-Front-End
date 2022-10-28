import React from "react";
import { BaseButton } from "./Button.styled";

/**
 * Button component that is used in authentication pages
 * @param {string} children The text of the button
 * @param {Array} otherProps Props to know the shape of the button 
 * @returns {React.Component}  Button component
 */
const Button = ({ children, ...otherProps }) => {
  return <BaseButton {...otherProps}>{children}</BaseButton>;
};

export default Button;
