import { useEffect, useState } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import SentMessageItem from "../../Components/SentMessageItem/SentMessageItem";
import { EmbeddedPage, Empty, EmptyMessage, PageContainer } from "./SentMessages.styled";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import fetchSentMessage from "../../Services/fetchSentMessage";
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
const SentMessages = ()=>{
  const auth = useAuth();
  const [sent, errorSentMessages, loadingSentMessages, fetchSent] = useFetchFunction();

  useEffect(()=>{
    fetchSentMessage(fetchSent, auth);
  }, []);
  
  console.log(`Done:`);
  console.log(sent);

let Message = (
  <Empty>
    <EmptyMessage>
      there doesn't seem to be anything here
    </EmptyMessage>
  </Empty>
);

const [eachMessage, setEachMessage] = useState(messagesData);



// useEffect(()=>{
//   if(sent&& sent.messages &&sent.messages.length!==0) {
//     setEachMessage(sent.messages);
//   }
// }, [sent]);

if(sent&& sent.messages &&sent.messages.length!==0) {

  Message = sent.messages.map((item) => {
    if(!item.isDeleted) {
      return(
        <SentMessageItem
          key = {item._id}
          id = {item._id}
          author = {item.toID.substring(3)}
          subject = {item.subject}
          time = {item.createdAt}
          msg = {item.text}
          admin = {item.admin}
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

export default SentMessages;