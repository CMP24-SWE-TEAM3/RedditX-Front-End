import VotingBar from "Features/Post/Components/VotingBar/VotingBar";
import PostPublisher from "Features/Post/Components/PostPublisher/PostPublisher";
import PostContent from "Features/Post/Components/PostContent/PostContent";
import SpamPostFooter from "Features/Post/Components/SpamPostFooter/SpamPostFooter";

import { Container, ContentContainer } from "./SpamPost.styled";

/**
 * Spam Post Component it appears in moderation page
 *
 * @param {Object} post - post object
 * @param {Boolean} fullPost - if the post is full post or not
 * @param {Function} handlerApprove - handler for approve button of spam post
 * @returns {React.Component} SpamPost component
 */
const SpamPost = ({ fullPost, post, handlerApprove }) => {
  return (
    <Container fullPost={fullPost}>
      <VotingBar number={post.votesCount} />
      <ContentContainer>
        <PostPublisher fullPost={fullPost} post={post} />
        <PostContent post={post} />
        <SpamPostFooter post={post} handlerApprove={handlerApprove} />
      </ContentContainer>
    </Container>
  );
};

export default SpamPost;
