import VotingBar from "Features/Post/Components/VotingBar/VotingBar";
import PostPublisher from "Features/Post/Components/PostPublisher/PostPublisher";
import PostContent from "Features/Post/Components/PostContent/PostContent";
import PostFooter from "Features/Post/Components/PostFooter/PostFooter";

import { Container, ContentContainer } from "./PostShape.styled";

import { useState } from "react";
/**
 * PostShape Component
 * @returns {React.Component} PostShape component
 */
const PostShape = ({ fullPost, post }) => {
  const [makeHidden, setMakeHidden] = useState(false);

  return (
    <>
      {!makeHidden && (
        <Container fullPost={fullPost}>
          <VotingBar number={post.votesCount} />
          <ContentContainer>
            <PostPublisher fullPost={fullPost} post={post} />
            <PostContent post={post} />
            <PostFooter post={post} setMakeHidden={setMakeHidden} />
          </ContentContainer>
        </Container>
      )}
    </>
  );
};

export default PostShape;
