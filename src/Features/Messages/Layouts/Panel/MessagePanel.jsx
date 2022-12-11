import { useState } from "react";
import {
  PageContainer,
  EmbeddedPage,
} from "./MessagePanel.styled";
import MessageBannelItem from "../../Components/MessagesPanel/MessagePanelItem";
const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    time: "new Date(2022, 11, 30)",
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
    time: "new Date(2022, 11, 29)",
    msg: "You are Mod",
    expanded: true,
    admin: false,
    read: false,
    id: 2,
    delete: false,
    block: false,
  },
];
function MessageBannel() {
  const [eachMessage, setEachMessage] = useState(messagesData);

  const Message = eachMessage.map((item) => {
    return (
      <MessageBannelItem
        changeMessage={setEachMessage}
        aurthor={item.aurthor}
        title={item.title}
        time={item.time}
        msg={item.msg}
        expanded={item.expanded}
        admin={item.admin}
        read={item.read}
        id={item.id}
        deleted={item.delete}
        block={item.block}
        key={item.id}
      />
    );
  });

  return (
    <EmbeddedPage>
      <PageContainer>{Message}</PageContainer>
    </EmbeddedPage>
  );
}

export default MessageBannel;
