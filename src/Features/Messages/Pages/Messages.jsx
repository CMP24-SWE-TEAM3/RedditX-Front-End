import MessagesHeader from "../Components/Header/MessagesHeader";
import MessageItem from "../Layouts/AllMessages/AllMessage";
import MessageBannel from "../Layouts/Panel/MessagePanel";
import UserMentions from "../Layouts/Mentions/UsernameMentions";
import SendAMessage from "../Components/SendMessage/SendMessage";
import SentMessages from "../Layouts/SentMessages/SentMessages";
import Unread from "../Layouts/Unread/Unread";
import Footer from "Layouts/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import PostReplay from "../Layouts/Posts/PostReply";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import { useEffect } from "react";
import fetchUsernameMentions from "Features/Messages/Services/fetchUsernameMentions";
import fetchPostReplies from "../Services/fetchPostReplies";
import fetchMessages from "../Services/fetchMessages";
import fetchAllMessages from "../Services/fetchallMessages";
import fetchSentMessage from "../Services/fetchSentMessage";
/**
 * Component that contains the Messages Page
 *
 * @Component
 * @returns {React.Component}
 */
function Messages() {
  const auth = useAuth();
  const [mentions, errorMentions, loadingMentions, fetchMentions ] = useFetchFunction();
  const [replies, errorReplies, loadingReplies, fetchReplies ] = useFetchFunction();
  const [messages, errorMessages, loadingMessages, fetchMessagesData ] = useFetchFunction();
  const [messagesAll, errorMessagesAll, loadingMessagesAll, fetchMessagesAll ] = useFetchFunction();

  useEffect(()=>{
    fetchMessages(fetchMessagesData, auth);
    // fetchUsernameMentions(fetchMentions, auth);
    // fetchPostReplies(fetchReplies, auth);
    // fetchAllMessages(fetchMessagesAll);
    
  }, []);

  let mapping;
  const unread = [];
  // console.log(`All is: `);
  if(messages && messages.messages && messages.messages.length!==0) {
    mapping = messages.messages.map((item) => {
      if(item.unread_status===true) {
        unread.push(item);
        return true;
      }
      else {
        return false;
      }
    });
  }
  


  return (
    <>
      <MessagesHeader />
      <Routes>
        {!loadingMessages &&
        <Route
          path="/"
          element={
              <MessageItem data={messages}/>
          }
        />
        }
        
        <Route path="/inbox" >
          <Route path="/inbox" element={<MessageItem data={messages}/> } />
          {!loadingMessages &&
          <Route path="/inbox/all" element={<MessageItem data={messages}/> }/>}
          {!loadingMessages &&
          <Route path="/inbox/messages" element={<MessageBannel data={messages}/> }/>}
          {!loadingMentions && 
          <Route path="/inbox/mentions"element={ <UserMentions mentions={mentions}/> } />}
          {!loadingMessages &&
          <Route path="/inbox/unread" element={ <Unread Unreadmessages={unread}/> }/>}
          {!loadingReplies &&
          <Route path="/inbox/selfreply" element={<PostReplay replies={replies}/> }/>}
        </Route>

        <Route
          path="/compose"
          element={
            <>
              <SendAMessage />
            </>
          }
        />
        <Route path="/sent" element={ <SentMessages/>  } />
        

        {/* <Footer /> */}
      </Routes>
    </>
  );
}

export default Messages;