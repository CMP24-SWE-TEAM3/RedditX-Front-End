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
  if (comment && comment.authorId.avatar) {
    console.log(comment);
    const commentBody = {
      postContent: "comment.replyingTo.title",
      commentUserImage: comment.authorId.avatar,
      userName: comment.authorId._id,
      time: comment.createdAt,
      bodyContent: comment.textJSON,
      postFooter: {
        upVotes: comment.votesCount,
        // Comments: comment.replyingTo.commentsNum,
      },
    };
    // const postfooter = {
    //   upVotes: comment.replyingTo.votesCount,
    //   Comments: comment.replyingTo.commentsNum,
    // };
    // const postHeader = {
    //   headerImage: "People_Image.jpg",
    //   // headerImage: comment.replyingTo.communityID.icon,
    //   communityName: comment.replyingTo.communityID._id,
    //   communityID: comment.replyingTo.communityID._id,
    //   userName: comment.replyingTo.userID._id,
    //   userID: comment.replyingTo.userID._id,
    //   nsfw: comment.replyingTo.nsfw,
    //   time: comment.replyingTo.createdAt,
    // };
    console.log(comment.authorId.avatar, "asdfghj");
    return (
      <Container title="comment">
        <Layout>
          {/* <PostHeader postheader={postHeader} /> */}
          {<CommentBody commentBody={commentBody} comment={comment} />}
          {/* <PostFooter postfooter={postfooter} /> */}
        </Layout>
      </Container>
    );
  }
};

export default Comment;
