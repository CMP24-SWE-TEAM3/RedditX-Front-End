import PostPublisher from "Features/Post/Components/PostPublisher/PostPublisher";
import PostContent from "Features/Post/Components/PostContent/PostContent";
import PostFooter from "Features/Post/Components/PostFooter/PostFooter";

import {Container} from "./PostBar.styled"

/**
 * PostPublisher Component 
 * @returns {React.Component} PostPublisher component
 */
const PostBar = () => {
  return (
    <Container>
      <PostPublisher fullPost={true}/>
      <PostContent/>
      <PostFooter/>
    </Container>
  );
};

export default PostBar;
