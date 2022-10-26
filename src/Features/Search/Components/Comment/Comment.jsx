import CommentBody from "../CommentBody/CommentBody";
import PostFooter from "../PostFooter/PostFooter";
import PostHeader from "../PostHeader/PostHeader";
import { Container, Layout } from "./Comment.styled";

/**
 * Component that render the Comment component and Contains CommentBody ,CommentHeader, CommentFooter items.
 *
 * @Component
 * @returns {React.Component}
 */
const Comment = () => {
  return (
    <Container>
      <Layout>
        <PostHeader />
        <CommentBody />
        <PostFooter />
      </Layout>
    </Container>
  );
};

export default Comment;
