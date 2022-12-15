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
  } from "./SentMessageItem.styled";
import compareDate from "../../Utils/ParseDate";
/**
 * Component that contains the Sent Message item
 *
 * @Component
 * @param {string} author - Message Sender
 * @param {string} subject - Message Title
 * @param {Date} time - Time the message was sent
 * @param {string} msg - The Message Text
 * @param {boolean} admin - Whether the message was sent by an admin
 * @param {number} id - Id of the message
 * @returns {React.Component}
 */
const SentMessageItem = ({id, subject, author, msg, time, admin})=>{


    return (
        <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
          <MessageDetails
          >
            <Subject>
              <SubjectText>{subject}:</SubjectText>
            </Subject>
            <Tagline>
              to <Author className={admin ? "admin" : ""}>{author}</Author>
              <TimeTag>
                <time>sent {compareDate(time).toDateString()}</time>
              </TimeTag>
            </Tagline>
              <Msg>{msg}</Msg>
          </MessageDetails>
        </OddItems>
      );
}


export default SentMessageItem;

