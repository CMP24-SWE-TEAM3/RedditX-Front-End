import PostPublisher from "Features/Post/Components/PostPublisher/PostPublisher";
import PostContent from "Features/Post/Components/PostContent/PostContent";
import PostFooter from "Features/Post/Components/PostFooter/PostFooter";

import {Container} from "./PostBar.styled"

/**
 * PostPublisher Component 
 * @returns {React.Component} PostPublisher component
 */
const PostBar = ({ fullPost, post, setMakeHidden }) => {
  return (
    <Container>
      <PostPublisher fullPost={fullPost} post={post} />
      <PostContent post={post} />
      <PostFooter post={post} setMakeHidden={setMakeHidden}/>
    </Container>
  );
};

export default PostBar;
