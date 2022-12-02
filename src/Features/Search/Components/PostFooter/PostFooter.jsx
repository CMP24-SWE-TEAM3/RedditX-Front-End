import { Footer } from "./PostFooter.styled";

/**
 * Component that contains the Post Header Footer.
 *
 * @Component
 * @param {object} postfooter - the post footer object
 * @returns {React.Component}
 */
var abbreviate = require("number-abbreviate");
const PostFooter = ({ postfooter }) => {
  if (postfooter) {
    return (
      <Footer>
        <span className="upvote">
          {/* {postfooter.upVotes} */}
          {abbreviate(postfooter.upVotes, 1)} upvotes
        </span>
        {postfooter.Comments && (
          <span className="comment">
            {/* {postfooter.Comments} */}
            {abbreviate(postfooter.Comments, 1)} comments
          </span>
        )}
      </Footer>
    );
  }
};

export default PostFooter;
