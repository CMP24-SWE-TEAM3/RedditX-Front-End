// imports
import React from "react";
import { Container } from "./CreatePost.styled";
import Post from "Features/Subreddit/Components/Post/Post";
import ImageButton from "Features/Subreddit/Components/ImageButton/ImageButton";
import LinkButton from "Features/Subreddit/Components/LinkButton/LinkButton";
import ProfilePostButton from "Features/Subreddit/Components/ProfilePostButton/ProfilePostButton";
/**
 * Component that shows input field to entry text , Images  and link  etc....
 *
 * @returns {React.Component}
 */
const CreatePost = () => {
  return (
    <Container>
      <ProfilePostButton />
      <Post />
      <ImageButton />
      <LinkButton />
    </Container>
  );
};

export default CreatePost;
