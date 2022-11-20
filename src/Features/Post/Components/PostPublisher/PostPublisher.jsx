import {
  Container,
  Photo,
  Community,
  PublishBy,
  InfoContainer,
  Follow,
} from "./PostPublisher.styled";
import Moment from "react-moment";

import { useState } from "react";

import { BsFillBellFill } from "react-icons/bs";

/**
 * PostPublisher Component that is in the side of Post
 * @returns {React.Component} PostPublisher component
 */
const PostPublisher = ({ fullPost }) => {
  const url =
    "https://i.pinimg.com/originals/58/2d/96/582d96a1df2d94bb439af1594639ccfe.jpg";
  const communityName = "hello world ";
  const publisher = "mohamedromee";
  const date = "2022/011/15, 15:05:45";

  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow(!follow);
  };

  return (
    <Container>
      <InfoContainer>
        <Photo url={url}></Photo>
        <Community>{communityName}</Community>
        <PublishBy>
          . Posted by {publisher} <Moment fromNow>{date}</Moment>
        </PublishBy>
      </InfoContainer>
      {fullPost && (
        <Follow follow={follow}
          onClick={(event) => {
            event.stopPropagation();
            handleFollow();
          }}
        >
          <BsFillBellFill />
        </Follow>
      )}
    </Container>
  );
};

export default PostPublisher;
