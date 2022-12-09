import VotingBar from "Features/Post/Components/VotingBar/VotingBar";
import PostBar from "../PostBar/PostBar";

import { Container } from "./PostShape.styled";

/**
 * PostShape Component
 * @returns {React.Component} PostShape component
 */
const PostShape = ({ fullPost, post }) => {
  return (
    <Container fullPost={fullPost}>
      <VotingBar number={post.votesCount} />
      <PostBar fullPost={fullPost} post={post} />
    </Container>
  );
};

export default PostShape;
