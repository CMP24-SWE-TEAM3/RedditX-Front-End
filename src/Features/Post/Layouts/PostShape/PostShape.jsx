import VotingBar from "Features/Post/Components/VotingBar/VotingBar";
import PostBar from "../PostBar/PostBar";


import {Container} from "./PostShape.styled"

/**
 * PostShape Component 
 * @returns {React.Component} PostShape component
 */
const PostShape = ({fullPost}) => {
  return (
    <Container fullPost={fullPost}>
      <VotingBar number={2004}/>
      <PostBar fullPost={fullPost}/>
    </Container>
  );
};

export default PostShape;
