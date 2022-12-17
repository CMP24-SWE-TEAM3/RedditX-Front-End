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
} from "./Post.styled";
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
/**
 *
 * Component that displays post with comments , likes displayed on show modal
 * @param show
 * @param setShow
 * @return {React.Component}
 */
const Post = ({ post, show, setShow }) => {
  // State for files in drat editor
  const [files, setFiles] = useState([]);
  // State for text in draft editor
  const [text, setText] = useState("");
  // State for plain text of post
  const [htmlText, setHtmlText] = useState("");
  const [commentRerendered, setCommentRerendered] = useState(false);
  const [editPost, setEditPost] = useState(false);

  const [data, error, isLoading, dataFetch] = useFetchFunction();
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
    setCommentRerendered(false);
    if (post.communityID) getCommunityInfo(dataFetch, post.communityID, auth);
    if (post && post.postComments && post.postComments.length > 0) {
      setCommentRerendered(true);
      getCommunityInfo(
        dataFetchCommentList,
        post.postComments.map((comment) => "t1_" + comment).toString(),
        auth
      );
    }
  }, [post._id]);
  const handleSubmitComment = () => {
    submitComment(
      dataSendComment,
      {
        postID: post._id,
        textHTML: htmlText,
        textJSON: text,
      },
      auth
    );
  };
  const handlePostEdit = () => {
    setEditPost(true);
  };
  return (
    <Container
      show={show}
      onHide={() => {
        setShow(false);
        setEditPost(false);
      }}
      backdrop={"true"}
    >
      <NavigationPost setHandleShowModal={setShow} />
      <ModalBodyContainer>
        <PostContent>
          <PostShape
            handlePostEdit={handlePostEdit}
            editPost={editPost}
            setEditPost={setEditPost}
            post={post}
            fullPost={true}
          />

          <UserNameContainer>
            Comment as{" "}
            <UserName>
              {auth.isLoggedIn() && auth.getUserName().substring(3)}
            </UserName>
          </UserNameContainer>
          <DraftEditorContainer>
            <CommentDraftEditor
              files={files}
              setFiles={setFiles}
              text={text}
              setText={setText}
              setTextHTML={setHtmlText}
              submitComment={handleSubmitComment}
            />
          </DraftEditorContainer>
          <CommentsContainer>
            {commentRerendered &&
              commentList &&
              commentList.things &&
              commentList.things.map(
                (comment) => comment && <Comment comment={comment} />
              )}
          </CommentsContainer>
        </PostContent>
        <AsidePost>
          <AsidePostChild>
            {data && data.things && data.things[0] && !isLoading && (
              <CommunityCardPost communityInfo={data.things[0]} />
            )}
            {data && data.things && data.things[0] && !isLoading && (
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

export default Post;
