import { useEffect, useState } from "react";
import PostReplayItem from "../../Components/PostReply/PostReplyItem";
import { PageContainer, EmbeddedPage, Empty, EmptyMessage } from "./PostReply.styled";

const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    time: "2022-11-29T",
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
    time: "2022-11-29T",
    msg: "You are Mod",
    upvote: "neutral",
    admin: false,
    read: false,
    id: 2,
    block: false,
  },
];

/**
 * Component that contains the Post Replies Panel
 *
 * @Component
 * @returns {React.Component}
 */
function PostReplay({replies}) {
  const [eachMessage, setEachMessage] = useState(messagesData);
  let Message = (
    <Empty>
      <EmptyMessage>
        there doesn't seem to be anything here
      </EmptyMessage>
    </Empty>
  );
  
  useEffect(()=>{
    if(replies&& replies.messages &&replies.messages.length!==0) {
      setEachMessage(replies.messages);
    }
  }, [replies]);

  if(eachMessage && eachMessage.length!==0){
    Message = eachMessage.map((item) => {
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
    });
  }

  return (
    <EmbeddedPage>
      <PageContainer>{Message}</PageContainer>
    </EmbeddedPage>
  );
}

export default PostReplay;
