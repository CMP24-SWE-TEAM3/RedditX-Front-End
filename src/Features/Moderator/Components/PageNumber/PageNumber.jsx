import React from "react";
import { Container, NavigateButton } from "./PageNumber.styled";

/**
 * Page number component which handles paging in queues (moderator page)
 *
 * @param {Function} handleNext function to handle move to next page
 * @param {Function} handleBack function to handle move to previous page
 * @param {Number} pageNumber current page number
 * @param {Number} numPosts number of posts in the queue
 * @param {Boolean} more is number of posts fills the page
 * @param {Boolean} less is number of posts doesn't fill the page
 * @returns {React.Component} PageNumber
 */
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
