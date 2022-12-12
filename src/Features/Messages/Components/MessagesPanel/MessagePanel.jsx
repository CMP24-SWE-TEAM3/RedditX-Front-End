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
  Frame,
  FrameText,
  ExpanCollap,
  MessagesWithBtns,
  ToggleExpan,
  Visted,
  AreYouSure,
  BtnWarning,
} from "./MessagePanel.styled";
import ReportModal from "../ReportModal/ReportModal";
const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    time: new Date(2022, 11, 30),
    msg: "Hello Hello",
    expanded: true,
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
    expanded: true,
    admin: false,
    read: false,
    id: 2,
    delete: false,
    block: false,
  },
];
function MessageItem() {
  const [eachMessage, setEachMessage] = useState(messagesData);

  function collapseAll(name) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.aurthor === name
          ? { ...prevState, expanded: false }
          : prevState;
      });
    });
  }

  function expandAll(name) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.aurthor === name
          ? { ...prevState, expanded: true }
          : prevState;
      });
    });
  }

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

  function handleClick(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, expanded: !prevState.expanded }
          : prevState;
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
            <Frame>
              <FrameText>{item.title}</FrameText>
            </Frame>
            <SubjectText>{item.title}:</SubjectText>
            <br />
            <ExpanCollap
              onClick={() => {
                expandAll(item.aurthor);
              }}
            >
              expand all
            </ExpanCollap>
            <ExpanCollap
              onClick={() => {
                collapseAll(item.aurthor);
              }}
            >
              collapse all
            </ExpanCollap>
          </Subject>
          <Tagline>
            <ToggleExpan
              onClick={() => {
                handleClick(item.id);
              }}
            >
              {item.expanded ? `[-]` : `[+]`}
            </ToggleExpan>
            from{" "}
            <Author className={item.admin ? "admin" : ""}>
              {item.aurthor}
            </Author>
            <TimeTag className={item.admin ? "active" : ""}>
              <time dateTime="20/10/2022">{item.time.toDateString()}</time>
            </TimeTag>
          </Tagline>
          <MessagesWithBtns
            className={item.expanded ? "expanded" : "collapsed"}
          >
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
          </MessagesWithBtns>
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
