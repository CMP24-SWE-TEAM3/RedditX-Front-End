import Comment from "Features/Search/Components/Comment/Comment.jsx";
import {
  Container,
  List,
  OuterContainer,
  InnerContainer,
} from "./CommentsPage.styled.js";
// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
/**
 * Component that render the CommentsPage component and Contains Comment item.
 * @Component
 * @param {object} CommentLists - contain all the Comments
 * @returns {React.Component}
 */

const CommentsPage = ({ CommentLists }) => {
  if (CommentLists.results) {
    // console.log(CommentLists.results);
    return (
      <Container>
        <OuterContainer>
          <InnerContainer>
            <List>
              {CommentLists.results.map((comment) => (
                <Comment comment={comment} key={comment._id} />
              ))}
            </List>
          </InnerContainer>
        </OuterContainer>
      </Container>
    );
  } else {
    return <h1>load</h1>;
  }
};

export default CommentsPage;
