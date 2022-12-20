// imports
import React from "react";
import { PostStyled } from "./Post.styled";
import { useNavigate } from "react-router-dom";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
/**
 *  Component that displays a post with the specified input placeholder
 * @returns {React.Component}
 */

const Post = () => {
  const { communityID } = useSubRedditID();
  const navigate = useNavigate();
  return (
    <PostStyled
      id={"create-post-container"}
      onFocus={() => navigate(communityID && `/submit/${communityID}`)}
      type="post"
      placeholder="Create Post"
    />
  );
};

export default Post;
