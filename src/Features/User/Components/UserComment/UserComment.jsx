import {
  CommentHeaderContainer,
  CommentHeaderContent,
  CommentHeaderInnerContainer,
  CommentHeaderInfo,
  UserLink,
  PostTitleLink,
  CommentHeaderRoot,
  CommunityLink,
  Dot,
  PostedLink,
  CommentBodyContainer,
  CommentBodyInnerContainer,
  CommentBodyContent,
  DashedLine,
  CommentBodyInfoContainer,
  CommentBodyInfoInnerContainer,
  CommentedContainer,
  CommentedLink,
  Point,
  DaysLink,
  CommentContainer,
  CommentInnerContainer,
  ReplyShareContainer,
  ReplyShareButton,
  ThreeDotsButton,
  StyledCommentLink,
} from "./UserComment.styled";
import { FaRegCommentAlt } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import RichTextPostBody from "Features/Post/Components/RichTextPostBody/RichTextPostBody";
import { useUserID } from "Features/User/Contexts/UserIDProvider";
import Moment from "react-moment";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserComment = ({ comment, overview }) => {
  const { userID } = useUserID;
  const [title, setTitle] = useState("");
  const [communityName, setCommunityName] = useState("");
  const [poster, setPoster] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    comment &&
      comment.postID &&
      comment.postID.title &&
      setTitle(comment.postID.title);

    comment &&
      comment.postID &&
      comment.postID.communityID &&
      comment.postID.communityID._id &&
      setCommunityName(comment.postID.communityID._id);

    comment &&
      comment.postID &&
      comment.postID.userID &&
      comment.postID.userID._id &&
      setPoster(comment.postID.userID._id);

    comment && comment.authorId && setAuthor(comment.authorId);
  }, [comment]);

  function isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  function handleClick(e) {
    // console.log(e.currentTarget.nodeName)
    comment &&
      comment.postID &&
      comment.postID._id &&
      comment._id &&
      navigate(`/post-preview/${comment.postID._id}/${comment._id}`);
    e.stopPropagation();
  }

  const CommentHeader = ({ user, title, community, posted }) => {
    return (
      <CommentHeaderContainer>
        <CommentHeaderInnerContainer>
          <CommentHeaderContent>
            <span className="icon">
              <FaRegCommentAlt />
            </span>
            <CommentHeaderInfo>
              <UserLink to={`/user/${user}`}>{user.substring(3)}</UserLink>
              {` commented on `}
              {comment && comment.postID && comment.postID._id && (
                <PostTitleLink to={`/post-preview/${comment.postID._id}`}>
                  {title}
                </PostTitleLink>
              )}
              <Dot>.</Dot>
              <CommentHeaderRoot>
                <CommunityLink
                  to={`/subreddit/${community}`}
                >{`r/${community.substring(3)}`}</CommunityLink>
                <Dot>.</Dot>
                {`Posted by `}
                <PostedLink>{`u/${posted}`}</PostedLink>
              </CommentHeaderRoot>
            </CommentHeaderInfo>
          </CommentHeaderContent>
        </CommentHeaderInnerContainer>
      </CommentHeaderContainer>
    );
  };

  const CommentBodyInfo = ({ commented, commentContent }) => {
    return (
      <CommentBodyInfoContainer overview={overview ? 1 : 0}>
        <CommentBodyInfoInnerContainer>
          <CommentedContainer>
            <CommentedLink to={`/user/${commented}`}>
              {commented.substring(3)}
            </CommentedLink>
            <Point>1 point</Point>
            <Dot>.</Dot>
            <DaysLink to="#">
              {comment && comment.createdAt && (
                <Moment fromNow>{comment.createdAt}</Moment>
              )}
            </DaysLink>
          </CommentedContainer>
          <div>
            <CommentContainer>
              <CommentInnerContainer>
                <p>
                  {comment.textJSON && isJsonString(comment.textJSON) && (
                    <RichTextPostBody post={comment} />
                  )}
                  {comment.textJSON &&
                    !isJsonString(comment.textJSON) &&
                    comment.textJSON}
                </p>
              </CommentInnerContainer>
            </CommentContainer>
            <div>
              <ReplyShareContainer>
                <ReplyShareButton>Reply</ReplyShareButton>
                <ReplyShareButton>Share</ReplyShareButton>
                <ThreeDotsButton>
                  <span className="icon">
                    <BiDotsHorizontalRounded />
                  </span>
                </ThreeDotsButton>
              </ReplyShareContainer>
            </div>
          </div>
        </CommentBodyInfoInnerContainer>
      </CommentBodyInfoContainer>
    );
  };

  const CommentBody = ({ commented, commentContent }) => {
    return (
      <CommentBodyContainer>
        <CommentBodyInnerContainer>
          <CommentBodyContent>
            <DashedLine></DashedLine>
            <CommentBodyInfo
              commented={commented}
              commentContent={commentContent}
            />
          </CommentBodyContent>
        </CommentBodyInnerContainer>
      </CommentBodyContainer>
    );
  };

  return (
    <div onClick={handleClick}>
      <div>
        <CommentHeader
          user={author}
          title={title}
          community={communityName}
          posted={poster}
        />

        <CommentBody commented={author} />
      </div>
    </div>
  );
};

export default UserComment;
