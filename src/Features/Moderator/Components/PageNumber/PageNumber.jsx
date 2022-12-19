import { Container, NavigateButton } from "./PageNumber.styled";
const PageNumber = ({ handleNext, handleBack, pageNumber, numPosts }) => {
  return (
    <Container>
      <NavigateButton disabled={pageNumber === 0} onClick={handleBack}>
        Back
      </NavigateButton>
      <NavigateButton
        disabled={numPosts <= (pageNumber + 1) * 5}
        onClick={handleNext}
      >
        Next
      </NavigateButton>
    </Container>
  );
};

export default PageNumber;
