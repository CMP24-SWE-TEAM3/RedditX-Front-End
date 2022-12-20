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
  MessageWithAu,
  ReplyDiv,
  TextAreaDiv,
  MesssageDiv,
  TextAreaElement,
  ButtonsDiv,
  SaveButton,
  Error,
} from "./PostReplyItem.styled";
import { ArrowUp, ArrowDown } from "../UsernameMentions/UsernameMentionsItem.styled";
import ReportModal from "../ReportModal/ReportModal";
import upVote from "../../Utils/Upvote";
import downVote from "../../Utils/Downvote";
import markUnread from "../../Utils/MarkUnread";
import readed from "../../Utils/Read";
import compareDate from "../../Utils/ParseDate";
import unreadMessages from "Features/Messages/Services/UnreadMessage";
import { useState } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import blockUser from "../../Services/BlockUser";
import composeMessage from "../../Services/ComposeMessage";
/**
 * Component that contains the Post Reply item
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
const PostReplayItem = ({
  changeMessage,
  aurthor,
  title,
  time,
  msg,
  upvote,
  admin,
  read,
  id,
  reRender,
  block,
}) => {
  const auth = useAuth();
  const [blockRes, errorBlock, loadingBlock, fetchDataBlock ] = useFetchFunction();
  const [unreadMessageRes, errorUnreadMessage, loadingUnreadMessage, fetchDataUnread ] = useFetchFunction();
  const [composeRes, errorCompose, loadingCompose, fetchDataSend] = useFetchFunction();
  const [localRead, setLocalread] = useState(!read);
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

  function handleUnread(){
    setLocalread(false);
    let dataObject = {
      msgID: `${id}`
    };
    // unreadMessages(fetchDataUnread, dataObject, auth);
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

  return (
    <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
      <MessageDetails
        onClick={() => {
          setLocalread(true);
        }}
      >
        <Subject>
          <SubjectText>post replies: {title}</SubjectText>
        </Subject>
        <ArrowsDiv>
          <ArrowUp
            onClick={() => {
              upVote(id, changeMessage, upvote);
            }}
            className={upvote === "up" ? "active" : ""}
          />
          <ArrowDown
            onClick={() => {
              downVote(id, changeMessage, upvote);
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
                        onClick={handleBlock}>Yes</BtnsLinks>
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
                    onClick = {toggleReplyOn}
                  >Reply</BtnsLinks>
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
export default PostReplayItem;
