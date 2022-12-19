import { useEffect, useState } from "react";
import SentMessageItem from "../../Components/SentMessageItem/SentMessageItem";
import { EmbeddedPage, Empty, EmptyMessage, PageContainer } from "./SentMessages.styled";
const messagesData = [
    {
      author: "Mohamed",
      title: "Greeting",
      time: "2022-11-29T",
      text: "Hello Hello",
      read: false,
      admin: false,
      id: 1,
    },
    {
      author: "Ahmed",
      title: "Mod",
      time: "2022-11-29T",
      text: "You are Mod",
      read: false,
      admin: false,
      id: 2,
    },
    {
      author: "Jacob",
      title: "Broken",
      time: "2022-11-29T",
      text: "It Is Broken Now",
      read: false,
      admin: true,
      id: 3,
    },
    {
      author: "Joanne",
      title: "Greeting",
      time: "2022-11-29T",
      text: "Henlo",
      read: false,
      admin: false,
      id: 4,
    },
    {
      author: "Arabella",
      title: "Hmmmm...",
      time: "2022-11-29T",
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
const SentMessages = ({sent})=>{
  console.log(`Done:`);
  console.log(sent);
const [eachMessage, setEachMessage] = useState(messagesData);

let Message = (
  <Empty>
    <EmptyMessage>
      there doesn't seem to be anything here
    </EmptyMessage>
  </Empty>
);

useEffect(()=>{
  if(sent&& sent.messages &&sent.messages.length!==0) {
    setEachMessage(sent.messages);
  }
}, [sent]);

if(eachMessage && eachMessage.length!==0){
  Message = eachMessage.map((item) => {
    return(
      <SentMessageItem
        key = {item._id.toString()}
        id = {item._id}
        author = {item.fromID.substring(3)}
        subject = {item.subject}
        time = {item.createdAt}
        msg = {item.text}
        admin = {item.admin}
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

export default SentMessages;