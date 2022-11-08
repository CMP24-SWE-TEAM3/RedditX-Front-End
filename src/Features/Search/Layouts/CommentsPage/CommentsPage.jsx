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
 *
 * @Component
 * @returns {React.Component}
 */

const CommentsPage = () => {
  let [CommentLists, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/CommentList",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });

  return (
    <Container>
      <OuterContainer>
        <InnerContainer>
          <List>
            {CommentLists.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </List>
        </InnerContainer>
      </OuterContainer>
    </Container>
  );
};

export default CommentsPage;
