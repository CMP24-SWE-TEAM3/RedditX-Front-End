import { Footer } from "./PostFooter.styled";

/**
 * Component that contains the Post Header Footer.
 *
 * @Component
 * @param {object} postfooter - the post footer object
 * @returns {React.Component}
 */

const PostFooter = ({ postfooter }) => {
  return (
    <Footer>
      <span>1k upvotes</span>
      <span>1.7k comments</span>
    </Footer>
  );
};

export default PostFooter;
