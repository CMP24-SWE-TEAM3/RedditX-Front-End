import { useEffect, useState } from "react";
import SentMessageItem from "../../Components/SentMessageItem/SentMessageItem";
import { EmbeddedPage, Empty, EmptyMessage, PageContainer } from "./Unread.styled";
const messagesData = [
    {
      author: "Mohamed",
      title: "Greeting",
      time: "2022-11-30T",
      text: "Hello Hello",
      read: false,
      id: 1,
    },
    {
      author: "Ahmed",
      title: "Mod",
      time: "2022-11-29T",
      text: "You are Mod",
      read: false,
      id: 2,
    },
    {
      author: "Jacob",
      title: "Broken",
      time: "2022-11-29T",
      text: "It Is Broken Now",
      read: false,
      id: 3,
    },
    {
      author: "Joanne",
      title: "Greeting",
      time: "2022-11-29T",
      text: "Henlo",
      read: false,
      id: 4,
    },
    {
      author: "Arabella",
      title: "Hmmmm...",
      time: "2022-11-29T",
      text: "Hi.",
      read: false,
      id: 5,
    },
];

/**
 * Component that contains the Unread Messages Panel
 *
 * @Component
 * @param {object} Unreadmessages - An Array that contains unread messages
 * @returns {React.Component}
 */
const Unread = ({Unreadmessages})=>{
const [eachMessage, setEachMessage] = useState(messagesData);
let Message = (
  <Empty>
    <EmptyMessage>
      there doesn't seem to be anything here
    </EmptyMessage>
  </Empty>
);

useEffect(()=>{
  if(Unreadmessages&& Unreadmessages.messages &&Unreadmessages.messages.length!==0) {
    setEachMessage(Unreadmessages.messages);
  }
}, [Unreadmessages]);

if(Unreadmessages && Unreadmessages.length!==0){
  Message = Unreadmessages.map((item) => {
    return(
      <SentMessageItem
        key = {item._id}
        id = {item._id}
        author = {item.fromID}
        subject = {item.subject}
        time = {item.createdAt}
        msg = {item.text}
      />
    )
  });
}

return (
  <EmbeddedPage>
    <PageContainer>{Message}</PageContainer>
  </EmbeddedPage>
);

}

export default Unread;