import { useState } from "react";
import { PageContainer, EmbeddedPage } from "./AllMessage.styled";
import NormalMessageAll from "../../Components/MessagesItems/AllMessageItem";
import PostReplayItem from "../../Components/PostReply/PostReplyItem";
import UsernameMentionItem from "../../Components/UsernameMentions/UsernameMentionsItem";

const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    type: "usernameMention",
    time: "new Date(2022, 11, 30)",
    msg: "Hello Hello",
    upvote: "neutral",
    admin: true,
    read: false,
    id: 1,
    delete: false,
    block: false,
  },
  {
    aurthor: "Ahmed",
    title: "Mod",
    type: "usernameMention",
    time: "new Date(2022, 11, 29)",
    msg: "You are Mod",
    upvote: "neutral",
    admin: false,
    read: false,
    id: 2,
    delete: false,
    block: false,
  },
  {
    aurthor: "Mohamed",
    title: "Greeting",
    type: "postReplay",
    time: "new Date(2022, 11, 30)",
    msg: "Hello Hello",
    upvote: "neutral",
    admin: true,
    read: false,
    id: 3,
    delete: false,
    block: false,
  },
  {
    aurthor: "Ahmed",
    title: "Mod",
    type: "normal",
    time: "new Date(2022, 11, 29)",
    msg: "You are Mod",
    admin: false,
    read: false,
    id: 4,
    delete: false,
    block: false,
  },
];

function AllMessagesTypes() {
  const [eachMessage, setEachMessage] = useState(messagesData);
  const Message = eachMessage.map((item) => {
    switch (item.type) {
      case "usernameMention":
        return (
          <UsernameMentionItem
            changeMessage={setEachMessage}
            aurthor={item.aurthor}
            title={item.title}
            time={item.time}
            msg={item.msg}
            upvote={item.upvote}
            admin={item.admin}
            read={item.read}
            id={item.id}
            block={item.block}
            key={item.id}
          />
        );
        break;
      case "postReplay":
        return (
          <PostReplayItem
            changeMessage={setEachMessage}
            aurthor={item.aurthor}
            title={item.title}
            time={item.time}
            msg={item.msg}
            upvote={item.upvote}
            admin={item.admin}
            read={item.read}
            id={item.id}
            block={item.block}
            key={item.id}
          />
        );
        break;
      default:
        return (
          <NormalMessageAll
            changeMessage={setEachMessage}
            aurthor={item.aurthor}
            title={item.title}
            time={item.time}
            msg={item.msg}
            admin={item.admin}
            read={item.read}
            id={item.id}
            deleted={item.delete}
            block={item.block}
            key={item.id}
          />
        );
    }
  });

  return (
    <EmbeddedPage>
      <PageContainer>{Message}</PageContainer>
    </EmbeddedPage>
  );
}

export default AllMessagesTypes;
