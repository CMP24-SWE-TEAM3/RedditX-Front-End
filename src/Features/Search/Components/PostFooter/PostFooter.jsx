import { Footer } from "./PostFooter.styled";

/**
 * Component that contains the Post Header Footer.
 *
 * @Component
 * @param {object} postfooter - the post footer object
 * @returns {React.Component}
 */

const PostFooter = ({ postfooter }) => {
  if (postfooter) {
    return (
      <Footer>
        <span>{postfooter.upVotes}k upvotes</span>
        <span>{postfooter.Comments}k comments</span>
      </Footer>
    );
  }
};

export default PostFooter;
