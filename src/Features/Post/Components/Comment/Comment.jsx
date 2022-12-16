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
import { useState } from "react";
import CommentDraftEditor from "../CommentDarftEditor/CommentDarftEditor";
const Comment = ({ comment }) => {
  const initialVotes = 0;
  const [expanded, setExpanded] = useState(true);
  const [votes, setVotes] = useState(0);
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);
  const [openReply, setOpenReply] = useState(false);
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
  return (
    <Container>
      <Left>
        {!expanded && (
          <ExpandIcon size={15} onClick={() => setExpanded(true)} />
        )}
        <Image
          src={
            "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815"
          }
          alt="user image"
        />

        {expanded && <VerticalLine onClick={() => setExpanded(false)} />}
      </Left>
      <Right>
        <Username>{comment.authorId}</Username>
        <Time> . just now</Time>
        {expanded && (
          <>
            <Body>{comment.textHTML}</Body>
            {comment.replies &&
              comment.replies.map((comment) => <Comment comment={comment} />)}
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
                <CommentDraftEditor />
              </Left>
            )}
          </>
        )}
      </Right>
    </Container>
  );
};

export default Comment;
