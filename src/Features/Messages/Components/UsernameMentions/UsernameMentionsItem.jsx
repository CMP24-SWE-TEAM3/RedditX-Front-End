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
import ReportModal from "../ReportModal/ReportModal";
import upVote from "../../Utils/Upvote";
import downVote from "../../Utils/Downvote";
import markUnread from "../../Utils/MarkUnread";
import readed from "../../Utils/Read";


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
          <SubjectText>username mention: {title}</SubjectText>
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
              <time dateTime="20/10/2022">{time.to}</time>
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
        </MessageWithAu>
      </MessageDetails>
    </OddItems>
  );
};
export default UsernameMentionItem;
