import VotingBar from "Features/Post/Components/VotingBar/VotingBar";
import PostPublisher from "Features/Post/Components/PostPublisher/PostPublisher";
import PostContent from "Features/Post/Components/PostContent/PostContent";
import PostFooter from "Features/Post/Components/PostFooter/PostFooter";

import { Container, ContentContainer } from "./PostShape.styled";

/**
 * PostShape Component
 * @returns {React.Component} PostShape component
 */
const PostShape = ({ fullPost, post }) => {
  return (
    <Container fullPost={fullPost}>
      <VotingBar number={post.votesCount} />
      <ContentContainer>
        <PostPublisher fullPost={fullPost} post={post} />
        <PostContent post={post} />
        <PostFooter post={post} />
      </ContentContainer>
    </Container>
  );
};

export default PostShape;
