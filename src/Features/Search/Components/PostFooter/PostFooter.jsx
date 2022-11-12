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
        <span className="upvote">
          {postfooter.upVotes}
          <span className="upvote-units">k</span> upvotes
        </span>
        <span className="comment">
          {postfooter.Comments}
          <span className="comment-units">k</span> comments
        </span>
      </Footer>
    );
  }
};

export default PostFooter;
