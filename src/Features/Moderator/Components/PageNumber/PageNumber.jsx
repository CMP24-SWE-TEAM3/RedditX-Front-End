import { Container, NavigateButton } from "./PageNumber.styled";
const PageNumber = ({
  handleNext,
  handleBack,
  pageNumber,
  numPosts,
  more,
  less,
}) => {
  return (
    <Container>
      <NavigateButton
        disabled={pageNumber === 0 || less === 1}
        onClick={handleBack}
      >
        Back
      </NavigateButton>
      <NavigateButton
        disabled={numPosts <= (pageNumber + 1) * 5 || more === 1}
        onClick={handleNext}
      >
        Next
      </NavigateButton>
    </Container>
  );
};

export default PageNumber;
