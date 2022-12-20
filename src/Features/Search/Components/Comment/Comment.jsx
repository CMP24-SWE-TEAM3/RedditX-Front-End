import CommentBody from "../CommentBody/CommentBody";
import PostFooter from "../PostFooter/PostFooter";
import PostHeader from "../PostHeader/PostHeader";
import { Container, Layout } from "./Comment.styled";

/**
 * Component that render the Comment component and Contains CommentBody ,CommentHeader, CommentFooter items.
 *
 * @Component
 * @param {object} comment - contain all the Comments
 * @returns {React.Component}
 */
const Comment = ({ comment }) => {
  if (comment && comment.postID) {
    console.log(comment);
    const commentBody = {
      postContent: comment.postID.title,
      commentUserImage: comment.authorId.avatar,
      userName: comment.authorId,
      time: comment.createdAt,
      bodyContent: comment.textJSON,
      postFooter: {
        upVotes: comment.votesCount,
        // Comments: comment.replyingTo.commentsNum,
      },
    };
    const postFooter = {
      upVotes: comment.postID.votesCount,
      Comments: comment.postID.commentsNum,
    };
    const postHeader = {
      headerImage:
        comment.postID.communityID && comment.postID.communityID.icon,
      communityName:
        comment.postID.communityID && comment.postID.communityID._id,
      communityID: comment.postID.communityID && comment.postID.communityID._id,
      userName: comment.postID.userID._id,
      userID: comment.postID.userID._id,
      time: comment.postID.createdAt,

      nsfw: false,
    };
    // console.log(comment.authorId.avatar, "asdfghj");
    return (
      <Container title="comment">
        <Layout>
          <PostHeader postheader={postHeader} />
          {<CommentBody commentBody={commentBody} comment={comment} />}
          <PostFooter postfooter={postFooter} />
        </Layout>
      </Container>
    );
  }
};

export default Comment;
