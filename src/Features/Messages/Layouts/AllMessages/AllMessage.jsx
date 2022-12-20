import { useEffect, useState } from "react";
import { PageContainer, EmbeddedPage, Empty, EmptyMessage } from "./AllMessage.styled";
import NormalMessageAll from "../../Components/MessagesItems/AllMessageItem";
import PostReplayItem from "../../Components/PostReply/PostReplyItem";
import UsernameMentionItem from "../../Components/UsernameMentions/UsernameMentionsItem";

const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    type: "usernameMention",
    time: "2022-11-30T",
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
    time: "2022-11-29T",
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
    type: "postReply",
    time: "2022-11-30T",
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
    time: "2022-11-29T",
    msg: "You are Mod",
    admin: false,
    read: false,
    id: 4,
    delete: false,
    block: false,
  },
];

/**
 * Component that contains the All Messages Panel
 *
 * @Component
 * @returns {React.Component}
 */
function AllMessagesTypes({data}) {
  const [eachMessage, setEachMessage] = useState(data.messages);

  let Message = (
    <Empty>
      <EmptyMessage>
        there doesn't seem to be anything here
      </EmptyMessage>
    </Empty>
  );
  
  // useEffect(()=>{
  //   if(data&& data.messages &&data.messages.length!==0) {
  //     setEachMessage(data.messages);
  //   }
  // }, [data]);

  if(data&& data.messages &&data.messages.length!==0) {
    let type = 'message';
    Message = data.messages.map((item) => {
      switch (type) {
        case "usernameMention":
          if(!item.isDeleted) {
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
          );}
          break;
        case "postReply":
          if(!item.isDeleted) {
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
          );}
          break;
        default:
          if(!item.isDeleted) {
          return (
            <NormalMessageAll
              changeMessage={setEachMessage}
              aurthor={item.fromID.substring(3)}
              title={item.subject}
              time={item.createdAt}
              msg={item.text}
              admin={item.admin}
              read={item.unread_status}
              id={item._id}
              deleted={item.isDeleted}
              block={item.block}
              key={item._id}
            />
          );
          }
      }
    });
}

  return (
    <EmbeddedPage>
      <PageContainer>{Message}</PageContainer>
    </EmbeddedPage>
  );
}

export default AllMessagesTypes;
