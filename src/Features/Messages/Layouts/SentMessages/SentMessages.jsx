import { useState } from "react";
import SentMessageItem from "../../Components/SentMessageItem/SentMessageItem";
import { EmbeddedPage, PageContainer } from "./SentMessages.styled";
const messagesData = [
    {
      author: "Mohamed",
      title: "Greeting",
      time: "2022, 11, 29",
      text: "Hello Hello",
      read: false,
      admin: false,
      id: 1,
    },
    {
      author: "Ahmed",
      title: "Mod",
      time: "2022, 11, 29",
      text: "You are Mod",
      read: false,
      admin: false,
      id: 2,
    },
    {
      author: "Jacob",
      title: "Broken",
      time: "2022, 11, 29",
      text: "It Is Broken Now",
      read: false,
      admin: true,
      id: 3,
    },
    {
      author: "Joanne",
      title: "Greeting",
      time: "2022, 11, 29",
      text: "Henlo",
      read: false,
      admin: false,
      id: 4,
    },
    {
      author: "Arabella",
      title: "Hmmmm...",
      time: "2022, 11, 29",
      text: "Hi.",
      read: false,
      admin: true,
      id: 5,
    },
];

/**
 * Component that contains the Sent Messages Panel
 *
 * @Component
 * @returns {React.Component}
 */
const SentMessages = ()=>{
const [eachMessage, setEachMessage] = useState(messagesData);

const Message = eachMessage.map((item) => {
  return(
    <SentMessageItem
      key = {item.id.toString()}
      id = {item.id}
      author = {item.author}
      subject = {item.title}
      time = {item.time}
      msg = {item.text}
      admin = {item.admin}
    />
  )
});

return (
  <EmbeddedPage>
    <PageContainer className="try">{Message}</PageContainer>
  </EmbeddedPage>
);
}

export default SentMessages;