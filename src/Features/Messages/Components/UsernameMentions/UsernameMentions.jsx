import { useState } from "react";
import {
  PageContainer,
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
  EmbeddedPage,
  TimeTag,
  MessagesWithBtns,
  Visted,
  AreYouSure,
  BtnWarning,
  ArrowsDiv,
  ArrowUp,
  ArrowDown,
  MessageWithAu,
} from "./UsernameMentions.styled";
import ReportModal from "../ReportModal/ReportModal";
const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    time: new Date(2022, 11, 30),
    msg: "Hello Hello",
    upvote: "neutral",
    admin: true,
    read: false,
    id: 1,
    block: false,
  },
  {
    aurthor: "Ahmed",
    title: "Mod",
    time: new Date(2022, 11, 29),
    msg: "You are Mod",
    upvote: "neutral",
    admin: false,
    read: false,
    id: 2,
    block: false,
  },
];
function UserMentions() {
  const [eachMessage, setEachMessage] = useState(messagesData);

  function markUnread(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id ? { ...prevState, read: false } : prevState;
      });
    });
  }

  function readed(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id ? { ...prevState, read: true } : prevState;
      });
    });
  }

  function toggleDeleteWarning(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, delete: !prevState.delete }
          : prevState;
      });
    });
  }
  function toggleBlockWarning(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, block: !prevState.block }
          : prevState;
      });
    });
  }

  function downVote(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, upvote: "down" }
          : prevState;
      });
    });
  }
  function upVote(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id ? { ...prevState, upvote: "up" } : prevState;
      });
    });
  }

  const Message = eachMessage.map((item) => {
    return (
      <OddItems className={item.id % 2 === 0 ? "even" : ""} key={item.id}>
        <MessageDetails
          onClick={() => {
            readed(item.id);
          }}
        >
          <Subject>
            <SubjectText>username mention: {item.title}</SubjectText>
          </Subject>
          <ArrowsDiv>
            <ArrowUp
              onClick={() => {
                upVote(item.id);
              }}
              className={item.upvote === "up" ? "active" : ""}
            />
            <ArrowDown
              onClick={() => {
                downVote(item.id);
              }}
              className={item.upvote === "down" ? "active" : ""}
            />
          </ArrowsDiv>
          <MessageWithAu>
            <Tagline>
              <Author className={item.admin ? "admin" : ""}>
                {item.aurthor}
              </Author>
              <TimeTag className={item.admin ? "active" : ""}>
                <time dateTime="20/10/2022">{item.time.toDateString()}</time>
              </TimeTag>
            </Tagline>
            <MessagesWithBtns>
              <Visted className={item.read ? "" : "read-before"}>
                <Msg>{item.msg}</Msg>
                <ListBtns>
                  <Btns>
                    <BtnsLinks>Context</BtnsLinks>
                  </Btns>
                  <Btns>
                    <BtnsLinks>Full Comments</BtnsLinks>
                  </Btns>

                  {!item.admin && (
                    <Btns>
                      <BtnsLinks>
                        <ReportModal />
                      </BtnsLinks>
                    </Btns>
                  )}
                  {!item.admin && (
                    <Btns>
                      <BtnsLinks
                        className={item.block ? "active" : ""}
                        onClick={() => {
                          toggleBlockWarning(item.id);
                        }}
                      >
                        Block User
                      </BtnsLinks>
                      <AreYouSure className={item.block ? "active" : ""}>
                        <BtnWarning> Are You Sure </BtnWarning>
                        <BtnsLinks>Yes</BtnsLinks>
                        <BtnWarning> / </BtnWarning>
                        <BtnsLinks
                          onClick={() => {
                            toggleBlockWarning(item.id);
                          }}
                        >
                          No
                        </BtnsLinks>
                      </AreYouSure>
                    </Btns>
                  )}
                  {item.read && (
                    <Btns>
                      <BtnsLinks
                        onClick={(e) => {
                          e.stopPropagation();
                          markUnread(item.id);
                        }}
                      >
                        Mark Unread
                      </BtnsLinks>
                    </Btns>
                  )}
                  <Btns>
                    <BtnsLinks>Replay</BtnsLinks>
                  </Btns>
                </ListBtns>
              </Visted>
            </MessagesWithBtns>
          </MessageWithAu>
        </MessageDetails>
      </OddItems>
    );
  });

  return (
    <EmbeddedPage>
      <PageContainer>{Message}</PageContainer>
    </EmbeddedPage>
  );
}

export default UserMentions;
