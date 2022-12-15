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
import { useState } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import deleteMessage from "Features/Messages/Services/DeleteMessage";
import unreadMessages from "Features/Messages/Services/UnreadMessage";
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
 * @param {boolean} expanded - Whether the message is expanded or not
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
  expanded,
  admin,
  read,
  id,
  deleted,
  block,
}) => {
  const [unreadMessageRes, errorUnreadMessage, loadingUnreadMessage, fetchDataUnread ] = useFetchFunction();
  const [deleteMessageRes, errorDeleteMessage, loadingDeleteMessage, fetchData ] = useFetchFunction();
  const [deletePrompt, setDeletePrompt] = useState(false);
  const [replyPrompt, setReplyPrompt] = useState(false);
  function collapseAll(name) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.aurthor === name
          ? { ...prevState, expanded: false }
          : prevState;
      });
    });
  }

  function expandAll(name) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.aurthor === name
          ? { ...prevState, expanded: true }
          : prevState;
      });
    });
  }


  function handleClick(id) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, expanded: !prevState.expanded }
          : prevState;
      });
    });
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
          <Frame>
            <FrameText>{title}</FrameText>
          </Frame>
          <SubjectText>{title}:</SubjectText>
          <br />
          <ExpanCollap
            onClick={() => {
              expandAll(aurthor);
            }}
          >
            expand all
          </ExpanCollap>
          <ExpanCollap
            onClick={() => {
              collapseAll(aurthor);
            }}
          >
            collapse all
          </ExpanCollap>
        </Subject>
        <Tagline>
          <ToggleExpan
            onClick={() => {
              handleClick(id);
            }}
          >
            {expanded ? `[-]` : `[+]`}
          </ToggleExpan>
          from <Author className={admin ? "admin" : ""}>{aurthor}</Author>
          <TimeTag className={admin ? "active" : ""}>
            <time dateTime="20/10/2022">{compareDate(time).toDateString()}</time>
          </TimeTag>
        </Tagline>
        <MessagesWithBtns className={expanded ? "expanded" : "collapsed"}>
          <Visted className={read ? "" : "read-before"}>
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
        </MessagesWithBtns>
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
export default MessageBannelItem;
