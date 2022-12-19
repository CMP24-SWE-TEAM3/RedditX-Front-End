import { useEffect, useState } from "react";
import {
  PageContainer,
  EmbeddedPage,
  Empty,
  EmptyMessage,
} from "./MessagePanel.styled";
import MessageBannelItem from "../../Components/MessagesPanel/MessagePanelItem";
const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    time: "2022, 11, 30",
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
    time: "2022, 11, 2",
    msg: "You are Mod",
    expanded: true,
    admin: false,
    read: false,
    id: 2,
    delete: false,
    block: false,
  },
  {
    aurthor: "Mahmoud",
    title: "Mod",
    time: "2022, 11, 2",
    msg: "You are Mod",
    expanded: true,
    admin: true,
    read: false,
    id: 3,
    delete: false,
    block: false,
  },
];

/**
 * Component that contains the Messages Panel
 *
 * @Component
 * @returns {React.Component}
 */
function MessageBannel({data}) {
  console.log(data);
  let Message = (
  <Empty>
    <EmptyMessage>
      there doesn't seem to be anything here
    </EmptyMessage>
  </Empty>
  );

  const [eachMessage, setEachMessage] = useState();

  useEffect(()=>{
    console.log(data);
    if(data && data.messages && data.messages.length!==0) {
      setEachMessage(data.messages);
    }
  }, [data]);

  if(eachMessage && eachMessage.length!==0) {
    Message = eachMessage.map((item) => {
      if(!item.delete) {
      return (
        <MessageBannelItem
          changeMessage={setEachMessage}
          aurthor={item.fromID.substring(3)}
          title={item.subject}
          time={item.createdAt}
          msg={item.text}
          admin={item.admin}        //Not Done
          read={item.unread_status}
          id={item._id}
          deleted={item.isDeleted}
          block={item.block}        //Ignore Anyway
          key={item._id}
        />
      );
      }
    });
  }
  
  return (
    <EmbeddedPage>
      <PageContainer>{Message}</PageContainer>
    </EmbeddedPage>
  );
}

export default MessageBannel;
