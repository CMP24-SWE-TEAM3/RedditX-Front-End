// import Components
import {
  Container,
  ModalBodyContainer,
  DraftEditorContainer,
  UserName,
  UserNameContainer,
  CommentsContainer,
  PostContent,
  AsidePostChild,
  AsidePost,
} from "./PostPreview.styled";
import NavigationPost from "Features/Post/Components/NavigationPost/NavigationPost";
import PostShape from "Features/Post/Layouts/PostShape/PostShape";
import RulesWidget from "Features/Post/Components/RulesWidget/RulesWidget";
import ModeratorWidget from "Features/Post/Components/ModeratorWidget/ModeratorWidget";
import RelatedCommunities from "Features/Post/Components/RelatedCommunities/RelatedCommunities";
import CommentDraftEditor from "Features/Post/Components/CommentDarftEditor/CommentDarftEditor";
import { useState, useEffect } from "react";
import Comment from "Features/Post/Components/Comment/Comment";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import getCommunityInfo from "Features/Post/Services/getCommunityInfo";
import CommunityCardPost from "Features/Post/Components/CommunityCardPost/CommunityCardPost";
import submitComment from "Features/Post/Services/submitComment";
import DraftEditor from "Features/Post/Components/DraftEditor/DraftEditor";
import { useNavigate, useParams } from "react-router-dom";
/**
 *
 * Component that displays post with comments , likes displayed on show modal
 * @param show
 * @param setShow
 * @return {React.Component}
 */
const PostPreview = () => {
  // State for files in drat editor
  const [files, setFiles] = useState([]);
  // State for text in draft editor
  const [text, setText] = useState("");
  // State for plain text of post
  const [htmlText, setHtmlText] = useState("");
  const [editPost, setEditPost] = useState(false);
  const { postId } = useParams();
  const [commentRerendered, setCommentRerendered] = useState(false);
  const [data, error, isLoading, dataFetch] = useFetchFunction();
  const [post, errorPost, isLoadingPost, dataFetchPost] = useFetchFunction();
  const [comment, errorComment, isLoadingComment, dataSendComment] =
    useFetchFunction();
  const [
    commentList,
    errorCommentList,
    isLoadingCommentList,
    dataFetchCommentList,
  ] = useFetchFunction();
  const auth = useAuth();

  useEffect(() => {
    getCommunityInfo(dataFetchPost, "t3_" + postId, auth);
  }, []);
  console.log("postId", postId);
  console.log("post", post);
  useEffect(() => {
    setCommentRerendered(false);
    if (post && post.things && post.things[0].communityID)
      getCommunityInfo(dataFetch, post.things[0].communityID, auth);
    if (
      post &&
      post.things &&
      post.things[0].postComments &&
      post.things[0].postComments.length > 0
    ) {
      setCommentRerendered(true);
      getCommunityInfo(
        dataFetchCommentList,
        post.things[0].postComments
          .map((comment) => "t1_" + comment)
          .toString(),
        auth
      );
    }
  }, [post]);
  console.log("commentList", commentList);
  const handleSubmitComment = () => {
    submitComment(
      dataSendComment,
      {
        postID: post.things[0]._id,
        textHTML: htmlText,
        textJSON: text,
      },
      auth
    );
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoadingComment && comment && comment._id && post && post._id) {
      navigate(`/post-preview/${post._id}`);
    }
  }, [comment]);
  const handlePostEdit = () => {
    setEditPost(true);
  };
  return (
    <Container>
      {/* <NavigationPost setHandleShowModal={setShow} /> */}
      <ModalBodyContainer>
        <PostContent>
          {!isLoadingPost && post.things && (
            <PostShape
              handlePostEdit={handlePostEdit}
              editPost={editPost}
              setEditPost={setEditPost}
              fullWidth={true}
              post={post.things[0]}
              fullPost={true}
            />
          )}
          <UserNameContainer>
            Comment as <UserName>{auth.getUserName().substring(3)}</UserName>
          </UserNameContainer>
          <DraftEditorContainer>
            <CommentDraftEditor
              files={files}
              setFiles={setFiles}
              text={text}
              setText={setText}
              setTextHTML={setHtmlText}
              submitComment={handleSubmitComment}
              isLoading={isLoadingComment}
            />
          </DraftEditorContainer>
          <CommentsContainer>
            {commentRerendered &&
              commentList &&
              commentList.things &&
              commentList.things.map(
                (comment) =>
                  comment && <Comment comment={comment} postID={postId} />
              )}
          </CommentsContainer>
        </PostContent>
        <AsidePost>
          <AsidePostChild>
            {!isLoading && data && data.things && data.things[0] && (
              <CommunityCardPost communityInfo={data.things[0]} />
            )}
            {!isLoading && data && data.things && data.things[0] && (
              <RulesWidget
                rules={data.things[0].communityRules}
                communityId={data.things[0]._id}
              />
            )}
            <RelatedCommunities />
            <ModeratorWidget />
          </AsidePostChild>
        </AsidePost>
      </ModalBodyContainer>
    </Container>
  );
};

export default PostPreview;
