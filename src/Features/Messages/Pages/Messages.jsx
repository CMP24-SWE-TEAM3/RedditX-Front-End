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
  const [sentMessages, errorSentMessages, loadingSentMessages, fetchSentMessages] = useFetchFunction();

  useEffect(()=>{
    fetchUsernameMentions(fetchMentions, auth);
    fetchPostReplies(fetchReplies, auth);
    fetchMessages(fetchMessagesData, auth);
    fetchAllMessages(fetchMessagesAll);
    fetchSentMessages(fetchSentMessages, auth);
  }, []);

  const unread =[]
  // console.log(`All is: `);
  // console.log(messagesAll);
  const mapping = messagesAll.map((item) => {
    if(item.read===false) {
      unread.push(item);
      return true;
    }
    else {
      return false;
    }
  });


  return (
    <>
      <MessagesHeader />
      <Routes>
        {!loadingMessagesAll &&
        <Route
          path="/"
          element={
              <MessageItem messages={messagesAll}/>
          }
        />
        }
        
        <Route path="/inbox" >
          <Route path="/inbox" element={<MessageItem data={messagesAll}/> } />
          {!loadingMessagesAll &&
          <Route path="/inbox/all" element={<MessageItem data={messagesAll}/> }/>}
          {!loadingMessages &&
          <Route path="/inbox/messages" element={<MessageBannel data={messages}/> }/>}
          {!loadingMentions && 
          <Route path="/inbox/mentions"element={ <UserMentions mentions={mentions}/> } />}
          {!loadingMessagesAll &&
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
        {!loadingSentMessages && 
        <Route path="/sent" element={ <SentMessages sent={sentMessages} />  } /> }
        

        {/* <Footer /> */}
      </Routes>
    </>
  );
}

export default Messages;