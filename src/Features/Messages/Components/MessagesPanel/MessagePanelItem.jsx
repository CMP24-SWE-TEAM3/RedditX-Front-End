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
  Frame,
  FrameText,
  ExpanCollap,
  MessagesWithBtns,
  ToggleExpan,
  Visted,
  AreYouSure,
  BtnWarning,
  Error
} from "./MessagePanelItem.styled";

import { 
  ReplyDiv,
  TextAreaDiv,
  MesssageDiv,
  TextAreaElement,
  ButtonsDiv,
  SaveButton,
} from "../PostReply/PostReplyItem.styled";

import ReportModal from "../ReportModal/ReportModal";
import markUnread from "../../Utils/MarkUnread";
import readed from "../../Utils/Read";
import compareDate from "../../Utils/ParseDate";
import { useEffect, useState } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import deleteMessage from "Features/Messages/Services/DeleteMessage";
import unreadMessages from "Features/Messages/Services/UnreadMessage";
import composeMessage from "../../Services/ComposeMessage";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import blockUser from "../../Services/BlockUser";
import moderatorCheck from "../../Services/ModeratorCheck";
/**
 * Component that contains the message item of Message Panel
 *
 * @Component
 * @param {Function} changeMessage - Function that changes the contents of the current message
 * @param {string} aurthor - Message Sender
 * @param {string} title - Message Title
 * @param {Date} time - Time the message was sent
 * @param {string} msg - The Message Text
 * @param {boolean} read - Whether the message was read or not
 * @param {boolean} deleted - Whether the message was deleted or not
 * @param {boolean} block - Whether the message was sent by a blocked user
 * @param {number} id - Id of the message
 * @param {boolean} admin - Whether the message was sent by an admin
 * @param {Function} reRender - Used to signal a re-render message to parent component
 * @returns {React.Component}
 */
const MessageBannelItem = ({
  changeMessage,
  aurthor,
  title,
  time,
  msg,
  read,
  id,
  deleted,
  block,
  admin,
  reRender,
}) => {
  const auth = useAuth();
  const [unreadMessageRes, errorUnreadMessage, loadingUnreadMessage, fetchDataUnread ] = useFetchFunction();
  const [deleteMessageRes, errorDeleteMessage, loadingDeleteMessage, fetchData ] = useFetchFunction();
  const [blockRes, errorBlock, loadingBlock, fetchDataBlock ] = useFetchFunction();
  const [composeRes, errorCompose, loadingCompose, fetchDataSend] = useFetchFunction();
  const [localRead, setLocalRead] = useState(!read);
  const [expanded, setExpanded] = useState(true);
  const [deletePrompt, setDeletePrompt] = useState(false);
  const [replyPrompt, setReplyPrompt] = useState(false);
  const [blockPrompt, setBlockPrompt] = useState(false);
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


  function collapseAll() {
    setExpanded(false);
  }

  function expandAll() {
    setExpanded(true);
  }


  function handleClick(id) {    //For Expansion
    setExpanded((prev)=>!prev);
  }

  
  function toggleDeleteWarning() {
    setDeletePrompt((prev)=>!prev);
  }

  function Delete() {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, isDeleted: !prevState.isDeleted }
          : prevState;
      });
    });

    let dataObject = {
      msgID: `${id}`
    };
    deleteMessage(fetchData, dataObject, auth);
    reRender((prev)=>!prev);
    setDeletePrompt(false);
  }

  function toggleBlockWarning() {
    setBlockPrompt((prev)=>!prev);
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
      composeMessage(fetchDataSend, dataObject, auth);
    }
    reRender((prev)=>!prev);
    setFormData({message:""});
    setReplyPrompt(false);
    setErr(false);
  };

  function handleUnread(){
    setLocalRead(false);
    let dataObject = {
      msgID: `${id}`
    };
    unreadMessages(fetchDataUnread, dataObject, auth);
  }

  function handleBlock(){
    let dataObject = {
      userID: `t2_${aurthor}`,
      action: true
    };

    blockUser(fetchDataBlock, dataObject, auth);
    setBlockPrompt(false);
  }

  return (
    <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
      <MessageDetails
        onClick={() => {
          setLocalRead(true);
        }}
      >
        <Subject>
          <Frame>
            <FrameText>{aurthor}</FrameText>
          </Frame>
          <SubjectText>{title}:</SubjectText>
          <br />
          <ExpanCollap
            onClick={expandAll}
          >
            expand all
          </ExpanCollap>
          <ExpanCollap
            onClick={collapseAll}
          >
            collapse all
          </ExpanCollap>
        </Subject>
        <Tagline>
          <ToggleExpan
            onClick={handleClick}
          >
            {expanded ? `[-]` : `[+]`}
          </ToggleExpan>
          from <Author className={admin ? "admin" : ""}>{aurthor}</Author>
          <TimeTag className={admin ? "active" : ""}>
            <time dateTime="20/10/2022">{compareDate(time).toDateString()}</time>
          </TimeTag>
        </Tagline>
        <MessagesWithBtns className={expanded ? "expanded" : "collapsed"}>
          <Visted className={localRead ? "" : "read-before"}>
            <Msg>{msg}</Msg>
            <ListBtns>
              <Btns>
                <BtnsLinks
                  className={deletePrompt ? "active" : ""}
                  onClick={() => {
                    toggleDeleteWarning();
                  }}
                >
                  Delete
                </BtnsLinks>
                <AreYouSure className={deletePrompt ? "active" : ""}>
                  <BtnWarning> Are You Sure </BtnWarning>
                  <BtnsLinks
                      onClick={() => {
                        Delete();
                      }}              
                  >Yes</BtnsLinks>
                  <BtnWarning> / </BtnWarning>
                  <BtnsLinks
                    onClick={() => {
                      toggleDeleteWarning();
                    }}
                  >
                    No
                  </BtnsLinks>
                </AreYouSure>
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
                    onClick={toggleBlockWarning}
                  >
                    Block User
                  </BtnsLinks>
                  <AreYouSure className={blockPrompt ? "active" : ""}>
                    <BtnWarning> Are You Sure </BtnWarning>
                    <BtnsLinks onClick={handleBlock}>Yes</BtnsLinks>
                    <BtnWarning> / </BtnWarning>
                    <BtnsLinks
                      onClick={toggleBlockWarning}
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
                >Reply</BtnsLinks>
              </Btns>
            </ListBtns>
          </Visted>
        </MessagesWithBtns>
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
export default MessageBannelItem;
