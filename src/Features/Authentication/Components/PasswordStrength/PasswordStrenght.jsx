import { Container, Child } from "./PasswordStrength.styled";

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
