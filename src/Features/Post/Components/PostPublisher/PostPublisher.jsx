import { Container, Photo, Community, PublishBy } from "./PostPublisher.styled";
import Moment from 'react-moment';


/**
 * PostPublisher Component that is in the side of Post 
 * @returns {React.Component} PostPublisher component
 */
const PostPublisher = () => {
    const url = "https://i.pinimg.com/originals/58/2d/96/582d96a1df2d94bb439af1594639ccfe.jpg";
    const communityName = "hello world ";
    const publisher = "mohamedromee";
    const date = "2022/011/15, 15:05:45";
  return (
    <Container>
      <Photo url={url}></Photo>
      <Community>{communityName}</Community>
      <PublishBy>. Posted by {publisher} <Moment fromNow>{date}</Moment></PublishBy>
    </Container>
  );
};
 
export default PostPublisher;
