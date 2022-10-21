import { BaseButton } from "./Button.styled";

const Button = ({ children, ...otherProps }) => {
  return <BaseButton {...otherProps}>{children}</BaseButton>;
};

export default Button;
