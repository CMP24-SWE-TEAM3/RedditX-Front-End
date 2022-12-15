import {
  OddItems,
  ListBtns,
  Btns,
  BtnsLinks,
  Subject,
  SubjectText,
  Msg,
  Tagline,
  Author,
  MessageDetails,
  TimeTag,
  MessagesWithBtns,
  Visted,
  AreYouSure,
  BtnWarning,
  ArrowsDiv,
  ArrowUp,
  ArrowDown,
  MessageWithAu,
} from "./UsernameMentionsItem.styled";

import { 
  ReplyDiv,
  TextAreaDiv,
  MesssageDiv,
  TextAreaElement,
  ButtonsDiv,
  SaveButton,
} from "../PostReply/PostReplyItem.styled";
import ReportModal from "../ReportModal/ReportModal";
import upVote from "../../Utils/Upvote";
import downVote from "../../Utils/Downvote";
import markUnread from "../../Utils/MarkUnread";
import readed from "../../Utils/Read";
import compareDate from "../../Utils/ParseDate";
import unreadMessages from "Features/Messages/Services/UnreadMessage";
import { useState } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import voteMessage from "../../Services/VoteMessages";
/**
 * Component that contains the Username Mention item
 *
 * @Component
 * @param {Function} changeMessage - Function that changes the contents of the current message
 * @param {string} aurthor - Message Sender
 * @param {string} title - Message Title
 * @param {Date} time - Time the message was sent
 * @param {string} msg - The Message Text
 * @param {boolean} admin - Whether the message was sent by an admin
 * @param {boolean} read - Whether the message was read or not
 * @param {string} upvote - Indicates Upvote status of the comment
 * @param {boolean} block - Whether the message was sent by a blocked user
 * @param {number} id - Id of the message
 * @returns {React.Component}
 */
const UsernameMentionItem = ({
  changeMessage,
  aurthor,
  title,
  time,
  msg,
  upvote,
  admin,
  read,
  id,
  block,
}) => {
  const [unreadMessageRes, errorUnreadMessage, loadingUnreadMessage, fetchDataUnread ] = useFetchFunction();
  const [voteMessageRes, errorVoteMessage, loadingVoteMessage, fetchDataVote ] = useFetchFunction();
  const [blockPrompt, setBlockPrompt] = useState(false);
  const [replyPrompt, setReplyPrompt] = useState(false);

  function toggleBlockWarning() {
    setBlockPrompt((prev)=>!prev);
  }

  function Block(id) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, block: !prevState.block }
          : prevState;
      });
    });

    
  }
  
  function toggleReplyOn() {
    setReplyPrompt(true);
  }

  function toggleReplyOff() {
    setReplyPrompt(false);
  }

  function handleUnread(){
    let dataObject = {
      msgID: `t4_${id}`
    };
    unreadMessages(fetchDataUnread, dataObject);
  }

  function handleUpvote(){
    let dataObject;
    if((upvote === "down" || upvote ==="neutral")) {
      dataObject = {
        id: `t3_${id}`,
        dir: 1
      }
    }
    else if (upvote==="up") {
      dataObject = {
        id: `t3_${id}`,
        dir: 0
      }
    }
    voteMessage(fetchDataVote, dataObject); 
  }

  function handleDownote(){
    let dataObject;
    if((upvote === "up" || upvote ==="neutral")) {
      dataObject = {
        id: `t3_${id}`,
        dir: -1
      }
    }
    else if (upvote==="down") {
      dataObject = {
        id: `t3_${id}`,
        dir: 2
      }
    }
    voteMessage(fetchDataVote, dataObject); 
  }

  return (
    <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
      <MessageDetails
        onClick={() => {
          readed(id, changeMessage);
        }}
      >
        <Subject>
          <SubjectText>username mention: {title}</SubjectText>
        </Subject>
        <ArrowsDiv>
          <ArrowUp
            onClick={() => {
              upVote(id, changeMessage, upvote);
              handleUpvote();
            }}
            className={upvote === "up" ? "active" : ""}
          />
          <ArrowDown
            onClick={() => {
              downVote(id, changeMessage, upvote);
              handleDownote();
            }}
            className={upvote === "down" ? "active" : ""}
          />
        </ArrowsDiv>
        <MessageWithAu>
          <Tagline>
            <Author className={admin ? "admin" : ""}>{aurthor}</Author>
            <TimeTag className={admin ? "active" : ""}>
              <time dateTime="20/10/2022">{compareDate(time).toDateString()}</time>
            </TimeTag>
          </Tagline>
          <MessagesWithBtns>
            <Visted className={read ? "" : "read-before"}>
              <Msg>{msg}</Msg>
              <ListBtns>
                <Btns>
                  <BtnsLinks>Context</BtnsLinks>
                </Btns>
                <Btns>
                  <BtnsLinks>Full Comments</BtnsLinks>
                </Btns>

                {!admin && (
                  <Btns>
                    <BtnsLinks>
                      <ReportModal />
                    </BtnsLinks>
                  </Btns>
                )}
                {!admin && (
                  <Btns>
                    <BtnsLinks
                      className={block ? "active" : ""}
                      onClick={() => {
                        toggleBlockWarning();
                      }}
                    >
                      Block User
                    </BtnsLinks>
                    <AreYouSure className={blockPrompt ? "active" : ""}>
                      <BtnWarning> Are You Sure </BtnWarning>
                      <BtnsLinks
                        onClick={()=>{
                          Block(id);
                        }}
                      >
                        Yes</BtnsLinks>
                      <BtnWarning> / </BtnWarning>
                      <BtnsLinks
                        onClick={() => {
                          toggleBlockWarning();
                        }}
                      >
                        No
                      </BtnsLinks>
                    </AreYouSure>
                  </Btns>
                )}
                {read && (
                  <Btns>
                    <BtnsLinks
                      onClick={(e) => {
                        e.stopPropagation();
                        markUnread(id, changeMessage);
                        handleUnread();
                      }}
                    >
                      Mark Unread
                    </BtnsLinks>
                  </Btns>
                )}
                <Btns>
                  <BtnsLinks
                    onClick={toggleReplyOn}
                  >
                    Reply</BtnsLinks>
                </Btns>
              </ListBtns>
            </Visted>
          </MessagesWithBtns>
        </MessageWithAu>
      </MessageDetails>
      <ReplyDiv className={replyPrompt?"active": ""}>
        <TextAreaDiv>
          <MesssageDiv>
            <TextAreaElement />
          </MesssageDiv>
          <ButtonsDiv>
            <SaveButton>Save</SaveButton>
            <SaveButton
              onClick={toggleReplyOff}
            >
              Cancel</SaveButton>
          </ButtonsDiv>
        </TextAreaDiv>
      </ReplyDiv>
    </OddItems>
  );
};
export default UsernameMentionItem;
