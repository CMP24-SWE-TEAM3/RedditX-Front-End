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
  Error,
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
import composeMessage from "../../Services/ComposeMessage";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import blockUser from "../../Services/BlockUser";
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
 * @param {Function} reRender - Used to signal a re-render message to parent component
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
  reRender,
}) => {
  const auth = useAuth();
  const [composeRes, errorCompose, loadingCompose, fetchDataSend] = useFetchFunction();
  const [unreadMessageRes, errorUnreadMessage, loadingUnreadMessage, fetchDataUnread ] = useFetchFunction();
  const [blockRes, errorBlock, loadingBlock, fetchDataBlock ] = useFetchFunction();
  const [voteMessageRes, errorVoteMessage, loadingVoteMessage, fetchDataVote ] = useFetchFunction();
  const [localRead, setLocalRead] = useState(!read);
  const [blockPrompt, setBlockPrompt] = useState(false);
  const [replyPrompt, setReplyPrompt] = useState(false);
  const [err, setErr] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
  });

  //For Text Area
  function handleChange(event) {
    const { message } = event.target;
    setErr(false);  //To Remove the Error Message once we start writing
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }


  function toggleBlockWarning() {
    setBlockPrompt((prev)=>!prev);
  }

  function handleBlock(){
    let dataObject = {
      userID: `t2_${aurthor}`,
      action: true
    };

    blockUser(fetchDataBlock, dataObject, auth);
    setBlockPrompt(false);
  }
  
  function toggleReplyOn() {
    setReplyPrompt(true);
  }

  function toggleReplyOff(event) {
    setReplyPrompt(false);
    setErr(false);
    event.preventDefault();
  }

  const handleSubmit = (event) => {  //For Reply
    event.preventDefault();
    event.target.reset();
    
    
    if(formData.message==="") {
      setErr(true);
    }
    else {
    let dataObject = {
      fromID: auth.getUserName(),
      toID: `t2_${aurthor}`,
      subject: `Reply to ${aurthor}'s Message`,
      text: formData.message
    };
      console.log(dataObject);
      setReplyPrompt(false);
      composeMessage(fetchDataSend, dataObject, auth);
    }
    reRender((prev)=>!prev);
    setFormData({message:""});
    setErr(false);
  };

  function handleUnread(){
    setLocalRead(false);
    let dataObject = {
      msgID: `${id}`
    };
    // unreadMessages(fetchDataUnread, dataObject, auth);
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
    voteMessage(fetchDataVote, dataObject, auth); 
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
    voteMessage(fetchDataVote, dataObject, auth); 
  }

  return (
    <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
      <MessageDetails
        onClick={() => {
          setLocalRead(true);
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
            <Visted className={localRead ? "" : "read-before"}>
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
                      className={blockPrompt ? "active" : ""}
                      onClick={() => {
                        toggleBlockWarning();
                      }}
                    >
                      Block User
                    </BtnsLinks>
                    <AreYouSure className={blockPrompt ? "active" : ""}>
                      <BtnWarning> Are You Sure </BtnWarning>
                      <BtnsLinks
                        onClick={handleBlock}> Yes</BtnsLinks>
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
                {localRead && (
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
      <form onSubmit={handleSubmit}>      
        <ReplyDiv className={replyPrompt? "active": ""}>
          <TextAreaDiv>
            <MesssageDiv>
              <TextAreaElement 
              type="text"
              onChange={handleChange}
              value={formData.message}
              name="message"
              />
              <Error className={err? "active" : ""}>
                    we need something here
              </Error>
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
      </form>
    </OddItems>
  );
};
export default UsernameMentionItem;
