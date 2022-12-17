import {
  Container,
  VerticalLine,
  Image,
  Username,
  Left,
  Right,
  Time,
  Body,
  Controls,
  ExpandIcon,
  VotesCount,
  Reply,
  UpvoteIcon,
  DownvoteIcon,
} from "./Comment.styled";

// Import icons
import { FaRegCommentAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

// Import hooks
import { useEffect, useState } from "react";
import CommentDraftEditor from "../CommentDarftEditor/CommentDarftEditor";
import getCommunityInfo from "Features/Post/Services/getCommunityInfo";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import submitReply from "Features/Post/Services/submitReply";
import isJsonString from "Features/Post/Utils/isJsonString";
import RichTextPostBody from "../RichTextPostBody/RichTextPostBody";
import getUser from "Features/Post/Services/getUser";
import { BASE_URL } from "API/axios";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";

const Comment = ({ comment }) => {
  const initialVotes = comment.votesCount;
  const [files, setFiles] = useState([]);
  const [text, setText] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const [expanded, setExpanded] = useState(true);
  const [votes, setVotes] = useState(comment.votesCount);
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);
  const [openReply, setOpenReply] = useState(false);
  const auth = useAuth();
  const [
    repliesList,
    errorRepliesList,
    isLoadingRepliesList,
    dataFetchRepliesList,
  ] = useFetchFunction();
  const [reply, errorReply, isLoadingReply, dataSendReply] = useFetchFunction();
  const [
    commentorData,
    errorCommentorData,
    isLoadingCommentorData,
    dataSendUserData,
  ] = useFetchFunction();
  const upVote = () => {
    if (upVoted) {
      setVotes(initialVotes);
      setUpVoted(false);
      return;
    }

    setVotes(initialVotes + 1);
    setUpVoted(true);
    setDownVoted(false);
  };
  const downVote = () => {
    if (downVoted) {
      setVotes(initialVotes);
      setDownVoted(false);
      return;
    }

    setVotes(initialVotes - 1);
    setDownVoted(true);
    setUpVoted(false);
  };
  const handleSubmitReply = () => {
    submitReply(
      dataSendReply,
      {
        commentID: comment._id,
        textHTML: htmlText,
        textJSON: text,
      },
      auth
    );
  };
  useEffect(() => {
    if (comment && comment.replies) {
      getCommunityInfo(
        dataFetchRepliesList,
        comment.replies.map((comment) => "t1_" + comment).toString(),
        auth
      );
    }
    if (comment && comment.authorId) {
      getUser(dataSendUserData, comment.authorId, auth);
    }
  }, []);
  const navigate = useNavigate();
  console.log("comment.createdAt", comment.createdAt);
  return (
    <Container>
      <Left>
        {!expanded && (
          <ExpandIcon size={15} onClick={() => setExpanded(true)} />
        )}
        <Image
          crossOrigin="anonymous"
          src={
            commentorData && commentorData.about && commentorData.about.user
              ? `${BASE_URL}/users/files/${commentorData.about.user.avatar}`
              : "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815"
          }
          alt="user image"
        />

        {expanded && <VerticalLine onClick={() => setExpanded(false)} />}
      </Left>
      <Right>
        <Username
          onClick={(e) => {
            navigate(`/user/${comment.authorId}/`);
          }}
        >
          {comment.authorId.substring(3)}
        </Username>
        <Time>
          . <Moment fromNow>{comment.createdAt}</Moment>
        </Time>
        {expanded && (
          <>
            {!isJsonString(comment.textJSON) && <Body>{comment.textJSON}</Body>}
            {isJsonString(comment.textJSON) && (
              <RichTextPostBody post={comment} />
            )}
            {!isLoadingRepliesList &&
              repliesList.things &&
              repliesList.things.map((reply) => <Comment comment={reply} />)}
            <Controls>
              <UpvoteIcon clicked={upVoted} onClick={upVote} size={25} />
              <VotesCount> {votes} </VotesCount>
              <DownvoteIcon clicked={downVoted} onClick={downVote} size={25} />
              <Reply onClick={() => setOpenReply(!openReply)}>
                <FaRegCommentAlt size={20} />
                <span>Reply</span>
              </Reply>
              <BsThreeDots size={20} />
            </Controls>
            {openReply && (
              <Left>
                <VerticalLine />
                <CommentDraftEditor
                  files={files}
                  setFiles={setFiles}
                  text={text}
                  setText={setText}
                  setTextHTML={setHtmlText}
                  submitComment={handleSubmitReply}
                />
              </Left>
            )}
          </>
        )}
      </Right>
    </Container>
  );
};

export default Comment;
