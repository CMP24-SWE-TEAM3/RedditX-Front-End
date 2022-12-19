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
/**
 * Component that contains the message item of Message Panel
 *
 * @Component
 * @param {Function} changeMessage - Function that changes the contents of the current message
 * @param {string} aurthor - Message Sender
 * @param {string} title - Message Title
 * @param {Date} time - Time the message was sent
 * @param {string} msg - The Message Text
 * @param {boolean} admin - Whether the message was sent by an admin
 * @param {boolean} read - Whether the message was read or not
 * @param {boolean} deleted - Whether the message was deleted or not
 * @param {boolean} block - Whether the message was sent by a blocked user
 * @param {number} id - Id of the message
 * @returns {React.Component}
 */
const MessageBannelItem = ({
  changeMessage,
  aurthor,
  title,
  time,
  msg,
  admin,
  read,
  id,
  deleted,
  block,
}) => {
  const auth = useAuth();
  const [unreadMessageRes, errorUnreadMessage, loadingUnreadMessage, fetchDataUnread ] = useFetchFunction();
  const [deleteMessageRes, errorDeleteMessage, loadingDeleteMessage, fetchData ] = useFetchFunction();
  const [composeRes, errorCompose, loadingCompose, fetchDataSend] = useFetchFunction();
  const [localRead, setLocalRead] = useState(read);
  const [expanded, setExpanded] = useState(true);
  const [deletePrompt, setDeletePrompt] = useState(false);
  const [replyPrompt, setReplyPrompt] = useState(false);
  const [err, setErr] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
  });
  
  useEffect(()=>{
    let dataObject = {

    }
  },[localRead]);
  

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

  function Delete(id) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, delete: !prevState.delete }
          : prevState;
      });
    });

    let dataObject = {
      msgID: `t4_${id}`
    };
    deleteMessage(fetchData, dataObject);
  }

  function toggleBlockWarning(id) {
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
    setFormData({message:""});
    setReplyPrompt(false);
    setErr(false);
  };

  function handleUnread(){
    setLocalRead(false);
    let dataObject = {
      msgID: `t4_${id}`
    };
    unreadMessages(fetchDataUnread, dataObject, auth);
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
            <FrameText>{title}</FrameText>
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
                  className={deleted ? "active" : ""}
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
                        Delete(id);
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
                    className={block ? "active" : ""}
                    onClick={() => {
                      toggleBlockWarning(id);
                    }}
                  >
                    Block User
                  </BtnsLinks>
                  <AreYouSure className={block ? "active" : ""}>
                    <BtnWarning> Are You Sure </BtnWarning>
                    <BtnsLinks>Yes</BtnsLinks>
                    <BtnWarning> / </BtnWarning>
                    <BtnsLinks
                      onClick={() => {
                        toggleBlockWarning(id);
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
        <ReplyDiv className={replyPrompt?"active": ""}>
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
