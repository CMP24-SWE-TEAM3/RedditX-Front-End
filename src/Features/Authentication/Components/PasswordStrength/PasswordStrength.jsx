import { Container, Child } from "./PasswordStrength.styled";

/**
 * Component to show the strength of the password (with different colors) when the user is signing up
 * @param {number} strength The strength of the password 
 * @returns {React.Component}  PasswordStrength component used in sign up (modal & page)
 */

const PasswordStrength = ({ strength }) => {
  return (
    <Container>
      <Child strength={strength} number={5} top={true}></Child>
      <Child strength={strength} number={4}></Child>
      <Child strength={strength} number={3}></Child>
      <Child strength={strength} number={2}></Child>
      <Child strength={strength} number={1} bottom={true}></Child>
    </Container>
  );
};

export default PasswordStrength;
