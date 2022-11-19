import { Container, Photo, Community, PublishBy } from "./PostContent.styled";



/**
 * PostPublisher Component that is in the side of Post 
 * @returns {React.Component} PostPublisher component
 */
const PostContent = () => {
    const url = "https://i.pinimg.com/originals/58/2d/96/582d96a1df2d94bb439af1594639ccfe.jpg";
    const communityName = "hello world ";
    const publisher = "mohamedromee";
    const date = "19 hours ago";
  return (
    <Container>
      <Photo url={url}></Photo>
      <Community>{communityName}</Community>
      <PublishBy>. Posted by {publisher} {date}</PublishBy>
    </Container>
  );
};
 
export default PostContent;
