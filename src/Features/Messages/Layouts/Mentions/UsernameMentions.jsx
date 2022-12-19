import { useEffect, useState } from "react";
import UsernameMentionItem from "../../Components/UsernameMentions/UsernameMentionsItem";
import { PageContainer, EmbeddedPage, Empty, EmptyMessage } from "./UsernameMentions.styled";
const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    time: "2022, 11, 29",
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
    time: "2022, 11, 29",
    msg: "You are Mod",
    upvote: "neutral",
    admin: false,
    read: false,
    id: 2,
    block: false,
  },
];

/**
 * Component that contains the Username Mention Panel
 *
 * @Component
 * @returns {React.Component}
 */
function UsernameMentions({mentions}) {
  console.log(mentions)
  let Message = (
    <Empty>
      <EmptyMessage>
        there doesn't seem to be anything here
      </EmptyMessage>
    </Empty>
  );
  const [eachMessage, setEachMessage] = useState(messagesData);

  useEffect(()=>{
    if(mentions&& mentions.messages &&mentions.messages.length!==0) {
      setEachMessage(mentions.messages);
    }
  }, [mentions]);

  if(eachMessage && eachMessage.length!==0) {
    Message = eachMessage.map((item) => {
      if(!item.isDeleted){
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
      ); }
    });
  }
  
  return ( 
    <EmbeddedPage>
      <PageContainer>{Message}</PageContainer>
    </EmbeddedPage>
   
  );
}

export default UsernameMentions;
