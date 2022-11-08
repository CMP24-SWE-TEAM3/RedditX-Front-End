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
const Comment = ({ comment }) => {
  return (
    <Container>
      <Layout>
        <PostHeader postheader={comment.postHeader} />
        <CommentBody />
        <PostFooter upVotes={comment.upVotes} />
      </Layout>
    </Container>
  );
};

export default Comment;
