import Comment from "Features/Search/Components/Comment/Comment.jsx";
import {
  Container,
  List,
  OuterContainer,
  InnerContainer,
} from "./CommentsPage.styled.js";
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
