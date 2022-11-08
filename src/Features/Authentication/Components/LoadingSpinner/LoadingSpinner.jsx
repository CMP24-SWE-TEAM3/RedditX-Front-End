import Spinner from "react-bootstrap/Spinner";
import { SpinnerContainer } from "./LoadingSpinner.styled";

/**
 * Component to return a loading spinner 
 * @returns {React.Component}  Spinner component
 */
const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner animation="border" />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
