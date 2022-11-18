import CommentBody from "../CommentBody/CommentBody";
import PostFooter from "../PostFooter/PostFooter";
import PostHeader from "../PostHeader/PostHeader";
import { Container, Layout } from "./Comment.styled";

/**
 * Component that render the Comment component and Contains CommentBody ,CommentHeader, CommentFooter items.
 *
 * @Component
 * @param {object} comment - contain all the Comments
 * @returns {React.Component}
 */
const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <Container>
      <Layout>
        <PostHeader postheader={comment.postHeader} />
        <CommentBody commentBody={comment.commentBody} />
        <PostFooter postfooter={comment.postFooter} />
      </Layout>
    </Container>
  );
};

export default Comment;
