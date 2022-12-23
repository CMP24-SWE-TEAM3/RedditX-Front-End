import { BASE_URL } from "API/axios";
import PostContent from "Features/Post/Components/PostContent/PostContent";
import VotingBar from "Features/Post/Components/VotingBar/VotingBar";
import CollapsePostContent from "Features/Post/Layouts/CollapsePostContent/CollapsePostContent";
import { useState } from "react";
import { TiDocumentText } from "react-icons/ti";
import {
  Container,
  ContentContainer,
  StyledImage,
  OuterContianer,
} from "./CollapsePost.styled";

/**
 * Collapsed post Component
 *
 * @param {Object} post - post object
 * @param {Boolean} fullPost - if the post is full post or not
 * @returns {React.Component} PostPublisher component
 */
const CollapsePost = ({ fullPost, post }) => {
  const [collapse, setCollapse] = useState(true);

  return (
    <Container fullPost={fullPost}>
      <VotingBar number={post.votesCount} />
      <OuterContianer>
        <ContentContainer>
          {post.attachments.length !== 0 && (
            <StyledImage
              crossOrigin="anonymous"
              src={`${BASE_URL}/posts/files/${post.attachments[0]}`}
              alt="post"
            />
          )}
          {post.attachments.length === 0 && (
            <StyledImage
              crossOrigin="anonymous"
              src={`${BASE_URL}/posts/files/${post.attachments[0]}`}
              alt="post"
              as="div"
            >
              <TiDocumentText size={25} />
            </StyledImage>
          )}
          <CollapsePostContent
            fullPost={fullPost}
            collapse={collapse}
            setCollapse={setCollapse}
            post={post}
          />
        </ContentContainer>
        {!collapse && <PostContent post={post} />}
      </OuterContianer>
    </Container>
  );
};

export default CollapsePost;
