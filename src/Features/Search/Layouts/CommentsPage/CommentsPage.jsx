import Comment from "Features/Search/Components/Comment/Comment.jsx";
import {
  Container,
  List,
  OuterContainer,
  InnerContainer,
} from "./CommentsPage.styled.js";

/**
 * Component that render the CommentsPage component and Contains Comment item.
 *
 * @Component
 * @returns {React.Component}
 */

const CommentsPage = () => {
  return (
    <Container>
      <OuterContainer>
        <InnerContainer>
          <List>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </List>
        </InnerContainer>
      </OuterContainer>
    </Container>
  );
};

export default CommentsPage;
