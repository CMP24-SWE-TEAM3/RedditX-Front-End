import VotingBar from "Features/Post/Components/VotingBar/VotingBar";
import PostBar from "../PostBar/PostBar";

import { useState } from "react";

import { Container } from "./PostShape.styled";

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
          <VotingBar number={post.votesCount} id={post._id} />
          <PostBar fullPost={fullPost} post={post} setMakeHidden={setMakeHidden}/>
        </Container>
      )}
    </>
  );
};

export default PostShape;
