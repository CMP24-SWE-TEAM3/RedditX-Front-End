import { useAuth } from "Features/Authentication/Contexts/Authentication";
import getUser from "Features/User/Services/getUser";
import useFetchFunction from "Hooks/useFetchFunction";
import { useState } from "react";
import { useEffect } from "react";
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
  // let [PeopleList, errorPeople, loadingPeople, FB] = useFetchFunction();
  // const [commentBody, setcommentBody] = useState({});
  // const auth = useAuth();
  // let userImage;
  // useEffect(() => {
  //   if (comment.authorId) {
  //     getUser(FB, comment.authorId, auth);
  //   }
  // }, [comment.authorId]);

  if (comment && comment.postID) {
    const commentBody = {
      postContent: comment.postID.title,
      commentUserImage: comment.authorId.avatar,
      userName: comment.authorId._id,
      time: comment.createdAt,
      bodyContent: comment.textJSON,
      postFooter: {
        upVotes: comment.votesCount,
        // Comments: comment.replyingTo.commentsNum,
      },
    };
    console.log(comment.authorId.avatar);
    const postFooter = {
      upVotes: comment.postID.votesCount,
      Comments: comment.postID.commentsNum,
    };
    const postHeader = {
      headerImage: comment.communityID && comment.communityID.icon,
      communityName: comment.communityID && comment.communityID._id,
      communityID: comment.communityID && comment.communityID._id,
      userName: comment.postID.userID._id,
      userID: comment.postID.userID._id,
      time: comment.postID.createdAt,

      nsfw: false,
    };
    console.log(postHeader, "sssssssssss");
    return (
      <Container title="comment">
        <Layout>
          {postHeader && <PostHeader postheader={postHeader} />}
          {commentBody && (
            <CommentBody commentBody={commentBody} comment={comment} />
          )}
          <PostFooter postfooter={postFooter} />
        </Layout>
      </Container>
    );
  }
};

export default Comment;
