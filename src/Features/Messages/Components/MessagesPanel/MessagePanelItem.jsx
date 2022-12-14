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
import ReportModal from "../ReportModal/ReportModal";
import markUnread from "../../Utils/MarkUnread";
import readed from "../../Utils/Read";
import compareDate from "../../Utils/ParseDate";

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

  function toggleDeleteWarning(id) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, delete: !prevState.delete }
          : prevState;
      });
    });
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

  return (
    <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
      <MessageDetails
        onClick={() => {
          readed(id, changeMessage, read);
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
                    toggleDeleteWarning(id);
                  }}
                >
                  Delete
                </BtnsLinks>
                <AreYouSure className={deleted ? "active" : ""}>
                  <BtnWarning> Are You Sure </BtnWarning>
                  <BtnsLinks>Yes</BtnsLinks>
                  <BtnWarning> / </BtnWarning>
                  <BtnsLinks
                    onClick={() => {
                      toggleDeleteWarning(id);
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
                      markUnread(id, changeMessage, read);
                    }}
                  >
                    Mark Unread
                  </BtnsLinks>
                </Btns>
              )}
              <Btns>
                <BtnsLinks>Reply</BtnsLinks>
              </Btns>
            </ListBtns>
          </Visted>
        </MessagesWithBtns>
      </MessageDetails>
    </OddItems>
  );
};
export default MessageBannelItem;
