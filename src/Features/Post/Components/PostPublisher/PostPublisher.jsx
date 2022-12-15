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
import { BASE_URL } from "API/axios";

import { useAuth } from "Features/Authentication/Contexts/Authentication";

/**
 * PostPublisher Component that is in the side of Post
 * @returns {React.Component} PostPublisher component
 */
const PostPublisher = ({ fullPost, post }) => {
  /**
   * Custom hook
   */
  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();

  const url =
    "https://i.pinimg.com/originals/58/2d/96/582d96a1df2d94bb439af1594639ccfe.jpg";
  const communityName = "hello world ";

  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow(!follow);

    makeFollow(
      dataFetch,
      {
        linkID: post._id,
        action: !follow,
      },
      auth.getToken()
    );
  };

  return (
    <Container>
      <InfoContainer>
        <Photo
          crossOrigin="anonymous"
          src={`${
            post.userID.avatar
              ? `${BASE_URL}/users/files/${post.userID.avatar}`
              : url
          }`}
          alt="user"
        ></Photo>
        <Community>{communityName}</Community>
        <PublishBy>
          . Posted by {post.userID._id.substring(3)}{" "}
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
