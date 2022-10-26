import { Footer } from "./PostFooter.styled";

/**
 * Component that contains the Post Header Footer.
 *
 * @Component
 * @returns {React.Component}
 */

const PostFooter = () => {
  return (
    <Footer>
      <span>15.1k upvotes</span>
      <span>1.7k comments</span>
    </Footer>
  );
};

export default PostFooter;
