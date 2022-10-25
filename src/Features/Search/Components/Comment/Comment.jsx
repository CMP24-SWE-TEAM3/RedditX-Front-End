import CommentBody from "../CommentBody/CommentBody";
import PostFooter from "../PostFooter/PostFooter";
import PostHeader from "../PostHeader/PostHeader";
import { Container, Layout } from "./Comment.styled";

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
