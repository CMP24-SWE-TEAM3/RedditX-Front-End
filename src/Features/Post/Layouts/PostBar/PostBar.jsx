import PostPublisher from "Features/Post/Components/PostPublisher/PostPublisher";


import {Container} from "./PostBar.styled"

/**
 * PostPublisher Component 
 * @returns {React.Component} PostPublisher component
 */
const PostBar = () => {
  return (
    <Container>
      <PostPublisher/>
    </Container>
  );
};

export default PostBar;
