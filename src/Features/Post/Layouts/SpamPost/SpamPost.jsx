import VotingBar from "Features/Post/Components/VotingBar/VotingBar";
import PostPublisher from "Features/Post/Components/PostPublisher/PostPublisher";
import PostContent from "Features/Post/Components/PostContent/PostContent";
import SpamPostFooter from "Features/Post/Components/SpamPostFooter/SpamPostFooter";

import { Container, ContentContainer } from "./SpamPost.styled";

/**
 * SpamPost Component
 * @returns {React.Component} SpamPost component
 */
const SpamPost = ({ fullPost, post }) => {
  return (
    <Container fullPost={fullPost}>
      <VotingBar number={post.votesCount} />
      <ContentContainer>
        <PostPublisher fullPost={fullPost} post={post} />
        <PostContent post={post} />
        <SpamPostFooter post={post} />
      </ContentContainer>
    </Container>
  );
};

export default SpamPost;