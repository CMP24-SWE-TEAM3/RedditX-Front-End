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
  ButtonsContainer,
  SubmitButton,
  CancelButton,
  DraftEditorContainerOuter,
} from "./Comment.styled";
import { DraftEditorContainer } from "Features/Post/Components/DraftEditor/DraftEditor.styled";

// Import icons
import { FaRegCommentAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
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
import { handleUp, handleDown } from "Features/Post/Utils/upAndDownVoting";
import { giveVote, makeFollow } from "Features/Post/Services/postActions";
import submitSpam from "Features/Post/Services/submitSpam";
import submitSave from "Features/Post/Services/submitSave";
import DraftEditor from "../DraftEditor/DraftEditor";
import { Spinner } from "react-bootstrap";
import submitEditPost from "Features/Post/Services/submitEditPost";
const Comment = ({ comment, postID }) => {
  const auth = useAuth();

  const initialVotes = comment.votesCount;
  const [files, setFiles] = useState([]);
  const [text, setText] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const [expanded, setExpanded] = useState(true);
  const [editPostText, setEditPostText] = useState("");
  const [editPostHtmlText, setEditPostHtmlText] = useState("");
  const [editComment, setEditComment] = useState(false);
  const [votes, setVotes] = useState(comment.votesCount);
  const [upVoted, setUpVoted] = useState(
    auth.isLoggedIn()
      ? comment.voters.findIndex(
          (voter) => voter.userID === auth.getUserName() && voter.voteType === 1
        ) !== -1
      : false
  );
  const [downVoted, setDownVoted] = useState(
    auth.isLoggedIn()
      ? comment.voters.findIndex(
          (voter) =>
            voter.userID === auth.getUserName() && voter.voteType === -1
        ) !== -1
      : false
  );
  const [openReply, setOpenReply] = useState(false);
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
  const [voteData, errorVoteData, isLoadingVoteData, dataSendVoteData] =
    useFetchFunction();
  const [saveData, errorSaveData, isLoadingSaveData, dataSendSaveData] =
    useFetchFunction();
  const [spamData, errorSpamData, isLoadingSpamData, dataSendSpamData] =
    useFetchFunction();
  const [editData, errorEditData, isLoadingEditData, dataSendEditData] =
    useFetchFunction();
  const upVote = () => {
    if (upVoted) {
      setVotes(initialVotes);
      setUpVoted(false);
      giveVote(
        dataSendVoteData,
        {
          id: "t1_" + comment._id,
          dir: 0,
        },
        auth.getToken()
      );
      return;
    }

    setVotes(initialVotes + 1);
    setUpVoted(true);
    setDownVoted(false);
    giveVote(
      dataSendVoteData,
      {
        id: "t1_" + comment._id,
        dir: 1,
      },
      auth.getToken()
    );
  };
  const downVote = () => {
    if (downVoted) {
      setVotes(initialVotes);
      setDownVoted(false);
      giveVote(
        dataSendVoteData,
        {
          id: "t1_" + comment._id,
          dir: 2,
        },
        auth.getToken()
      );
      return;
    }

    setVotes(initialVotes - 1);
    setDownVoted(true);
    setUpVoted(false);
    giveVote(
      dataSendVoteData,
      {
        id: "t1_" + comment._id,
        dir: -1,
      },
      auth.getToken()
    );
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
    if (!isLoadingReply && reply && reply._id) {
      navigate(`/post-preview/${postID}`);
    }
  }, [reply]);

  useEffect(() => {
    if (comment && comment.replies) {
      getCommunityInfo(
        dataFetchRepliesList,
        comment.replies.map((comment) => "t1_" + comment).toString(),
        auth
      );
    }
    if (comment && comment.authorId._id) {
      getUser(dataSendUserData, comment.authorId._id, auth);
    }
  }, []);
  const handleSave = () => {
    if (!auth.isLoggedIn()) return;
    submitSave(
      dataSendSaveData,
      {
        linkID: "t1_" + comment._id,
      },
      auth
    );
  };
  const handleReport = () => {
    if (!auth.isLoggedIn()) return;
    submitSpam(
      dataSendSpamData,
      {
        linkID: "t1_" + comment._id,
        spamText: "I found that this content is showing violence",
        spamType: "violent content",
      },
      auth
    );
  };

  const editCommentHandler = () => {
    console.log("edit");
    submitEditPost(
      dataSendEditData,
      {
        linkID: "t3_" + comment._id,
        textHTML: editPostHtmlText,
        textJSON: editPostText,
      },
      auth
    );
  };
  console.log(comment);
  const navigate = useNavigate();
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
            navigate(`/user/${comment.authorId._id}/`);
          }}
        >
          {comment.authorId._id.substring(3)}
        </Username>
        <Time>
          . <Moment fromNow>{comment.createdAt}</Moment>
        </Time>
        {expanded && (
          <>
            {!editComment && !isJsonString(comment.textJSON) && (
              <Body>{comment.textJSON}</Body>
            )}
            {!editComment && isJsonString(comment.textJSON) && (
              <RichTextPostBody post={comment} />
            )}
            {editComment && (
              <DraftEditorContainerOuter>
                <DraftEditorContainer>
                  <DraftEditor
                    text={editPostText}
                    setText={setEditPostText}
                    setTextHTML={setEditPostHtmlText}
                    load={comment.textJSON}
                  />
                </DraftEditorContainer>

                <ButtonsContainer>
                  <CancelButton onClick={() => setEditComment(false)}>
                    Cancel
                  </CancelButton>
                  <SubmitButton onClick={editCommentHandler}>
                    {!isLoadingEditData && "Save"}
                    {isLoadingEditData && (
                      <Spinner animation="border" variant="light" />
                    )}
                  </SubmitButton>
                </ButtonsContainer>
              </DraftEditorContainerOuter>
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
              <Reply onClick={handleReport}>
                <span>Report</span>
              </Reply>
              <Reply onClick={handleSave}>
                <span>Save</span>
              </Reply>
              <Reply onClick={() => setEditComment(true)}>
                <FiEdit2 />
                <span>Edit</span>
              </Reply>
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
