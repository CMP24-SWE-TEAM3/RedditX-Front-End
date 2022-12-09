import PostContent from "Features/Post/Components/PostContent/PostContent";
import VotingBar from "Features/Post/Components/VotingBar/VotingBar";
import CollapsePostContent from "Features/Post/Layouts/CollapsePostContent/CollapsePostContent";
import { useState } from "react";

import {
  Container,
  ContentContainer,
  StyledImage,
} from "./CollapsePost.styled";

/**
 * PostPublisher Component
 * @returns {React.Component} PostPublisher component
 */
const CollapsePost = ({ fullPost }) => {
  const [collapse, setCollapse] = useState(true);

  return (
    <Container fullPost={fullPost}>
      <VotingBar number={2004} />
      <div>
        <ContentContainer>
          <StyledImage src="https://picsum.photos/200/300" alt="post" />
          <CollapsePostContent
            fullPost={fullPost}
            collapse={collapse}
            setCollapse={setCollapse}
          />
        </ContentContainer>
        {!collapse && <PostContent />}
      </div>
    </Container>
  );
};

export default CollapsePost;
