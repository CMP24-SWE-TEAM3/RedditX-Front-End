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
  AreYouSure,
  BtnWarning,
  Visted,
} from "./MessageItem.styled";
import ReportModal from "../ReportModal/ReportModal";
import { useState } from "react";

const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    time: new Date(2022, 11, 30),
    msg: "Hello Hello",
    admin: true,
    read: false,
    id: 1,
    delete: false,
    block: false,
  },
  {
    aurthor: "Ahmed",
    title: "Mod",
    time: new Date(2022, 11, 29),
    msg: "You are Mod",
    admin: false,
    read: false,
    id: 2,
    delete: false,
    block: false,
  },
];

function MessageItem() {
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

  const Message = eachMessage.map((item) => {
    return (
      <OddItems className={item.id % 2 === 0 ? "even" : ""} key={item.id}>
        <MessageDetails
          onClick={() => {
            readed(item.id);
          }}
        >
          <Subject>
            <SubjectText>{item.title}:</SubjectText>
          </Subject>
          <Tagline>
            from{" "}
            <Author className={item.admin ? "admin" : ""}>
              {item.aurthor}
            </Author>
            <TimeTag className={item.admin ? "active" : ""}>
              <time dateTime="20/10/2022">{item.time.toDateString()} </time>
            </TimeTag>
          </Tagline>
          <Visted className={item.read ? "" : "read-before"}>
            <Msg>{item.msg}</Msg>
            <ListBtns>
              <Btns>
                <BtnsLinks>Permalink</BtnsLinks>
              </Btns>
              <Btns>
                <BtnsLinks
                  className={item.delete ? "active" : ""}
                  onClick={() => {
                    toggleDeleteWarning(item.id);
                  }}
                >
                  Delete
                </BtnsLinks>
                <AreYouSure className={item.delete ? "active" : ""}>
                  <BtnWarning> Are You Sure </BtnWarning>
                  <BtnsLinks>Yes</BtnsLinks>
                  <BtnWarning> / </BtnWarning>
                  <BtnsLinks
                    onClick={() => {
                      toggleDeleteWarning(item.id);
                    }}
                  >
                    No
                  </BtnsLinks>
                </AreYouSure>
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

export default MessageItem;
