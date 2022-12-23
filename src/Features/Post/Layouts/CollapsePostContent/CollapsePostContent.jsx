import PostPublisher from "Features/Post/Components/PostPublisher/PostPublisher";
import CollapsePostFooter from "Features/Post/Components/CollapsePostFooter/CollapsePostFooter";

import { Container, PostTitle } from "./CollapsePostContent.styled";

/**
 * The content of the collapsed post
 *
 * @param {Object} post - post object
 * @param {Boolean} collapse - if the post is collapsed or not
 * @param {Function} setCollapse - set collapse state
 * @param {Boolean} fullPost - if the post is full post or not
 * @returns
 */
const CollapsePostContent = ({ fullPost, collapse, setCollapse, post }) => {
  return (
    <Container>
      <PostTitle>Post title</PostTitle>
      <PostPublisher fullPost={fullPost} post={post} />
      <CollapsePostFooter
        collapse={collapse}
        setCollapse={setCollapse}
        post={post}
      />
    </Container>
  );
};

export default CollapsePostContent;
