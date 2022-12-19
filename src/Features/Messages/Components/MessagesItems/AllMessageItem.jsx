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
  AreYouSure,
  BtnWarning,
  Visted,
} from "./MessageItem.styled";

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
import { useState } from "react";
import deleteMessage from "Features/Messages/Services/DeleteMessage";
import useFetchFunction from "Hooks/useFetchFunction";
import unreadMessages from "Features/Messages/Services/UnreadMessage";

/**
 * Component that contains the ordinary message item
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
const NormalMessageAll = ({
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
  
  const [deleteMessageRes, errorDeleteMessage, loadingDeleteMessage, fetchData ] = useFetchFunction();
  const [unreadMessageRes, errorUnreadMessage, loadingUnreadMessage, fetchDataUnread ] = useFetchFunction();
  const [deletePrompt, setDeletePrompt] = useState(false);
  const [blockPrompt, setBlockPrompt] = useState(false);
  const [replyPrompt, setReplyPrompt] = useState(false);

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

  return (
    <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
      <MessageDetails
        onClick={() => {
          readed(id, changeMessage);
        }}
      >
        <Subject>
          <SubjectText>{title}:</SubjectText>
        </Subject>
        <Tagline>
          from <Author data-testid= {"author-element"} className={admin ? "admin" : ""}>{aurthor}</Author>
          <TimeTag className={admin ? "active" : ""}>
            <time dateTime="20/10/2022">{compareDate(time).toDateString()}</time>
          </TimeTag>
        </Tagline>
        <Visted data-testid = {"read-test"} className={read ? "" : "read-before"}>
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
                  onClick={()=>{
                    Delete(id);
                  }}
                >
                  Yes</BtnsLinks>
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
                  onClick={() => {
                    toggleBlockWarning();
                  }}
                >
                  Block User
                </BtnsLinks>
                <AreYouSure className={blockPrompt ? "active" : ""}>
                  <BtnWarning> Are You Sure </BtnWarning>
                  <BtnsLinks
                    onClick={()=> {
                      Block(id)
                    }}
                  >Yes</BtnsLinks>
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
              >Reply</BtnsLinks>
            </Btns>
          </ListBtns>
        </Visted>
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

export default NormalMessageAll;
