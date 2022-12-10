import PostPublisher from "Features/Post/Components/PostPublisher/PostPublisher";
import PostContent from "Features/Post/Components/PostContent/PostContent";
import CollapsePostFooter from "Features/Post/Components/CollapsePostFooter/CollapsePostFooter";

import { Container, PostTitle } from "./CollapsePostContent.styled";
import { useState } from "react";
const CollapsePostContent = ({ fullPost, collapse, setCollapse }) => {
  return (
    <Container>
      <PostTitle>Post title</PostTitle>
      <PostPublisher fullPost={fullPost} />
      <CollapsePostFooter collapse={collapse} setCollapse={setCollapse} />
    </Container>
  );
};

export default CollapsePostContent;
