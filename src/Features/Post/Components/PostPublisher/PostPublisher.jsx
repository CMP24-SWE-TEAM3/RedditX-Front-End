import {
  Container,
  Photo,
  Community,
  PublishBy,
  InfoContainer,
  Follow,
} from "./PostPublisher.styled";
import Moment from "react-moment";

import { makeFollow } from "Features/Post/Services/postActions";

import useFetchFunction from "Hooks/useFetchFunction";

import { useState } from "react";

import { BsFillBellFill } from "react-icons/bs";

/**
 * PostPublisher Component that is in the side of Post
 * @returns {React.Component} PostPublisher component
 */
const PostPublisher = ({ fullPost, post }) => {
  /**
   * Custom hook
   */
  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const url =
    "https://i.pinimg.com/originals/58/2d/96/582d96a1df2d94bb439af1594639ccfe.jpg";
  const communityName = "hello world ";
  const publisher = "mohamedromee";
  const date = "2022/011/15, 15:05:45";

  const id = "5496783"; //test;

  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow(!follow);

    const sentId = "t3_" + id;

    makeFollow(dataFetch, {
      linkID: sentId,
      action: !follow,
    });
  };

  return (
    <Container>
      <InfoContainer>
        <Photo url={url}></Photo>
        <Community>{communityName}</Community>
        <PublishBy>
          . Posted by {post.userID._id}{" "}
          <Moment fromNow>{post.createdAt}</Moment>
        </PublishBy>
      </InfoContainer>
      {fullPost && (
        <Follow
          data-testid="makeFollow"
          follow={follow}
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
