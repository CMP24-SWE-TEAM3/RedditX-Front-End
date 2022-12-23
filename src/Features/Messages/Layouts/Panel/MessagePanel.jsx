import { useEffect, useState } from "react";
import {
  PageContainer,
  EmbeddedPage,
  Empty,
  EmptyMessage,
} from "./MessagePanel.styled";
import MessageBannelItem from "../../Components/MessagesPanel/MessagePanelItem";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import moderatorCheck from "../../Services/ModeratorCheck";
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
 * @param {object} data - Array that has messages
 * @param {Function} Rerender - Used to signal a re-render message to parent component
 * @returns {React.Component}
 */
function MessageBannel({data, Rerender}) {
  console.log(data);
  let Message = (
  <Empty>
    <EmptyMessage>
      there doesn't seem to be anything here
    </EmptyMessage>
  </Empty>
  );
  const auth = useAuth();
  const [moderatorRes, errorModerator, loadingModerator, fetchDataModerator] = useFetchFunction();
  const [canBeAdmin, setAdmin] = useState(false);

  const [eachMessage, setEachMessage] = useState();

  useEffect(()=>{
    console.log(data);
    if(data && data.messages && data.messages.length!==0) {
      setEachMessage(data.messages);
    }
  }, [data]);

  useEffect(()=>{
    moderatorCheck(fetchDataModerator, auth);
    if(moderatorRes&& moderatorRes.communities&&moderatorRes.communities.length!==0) {
      setAdmin(true);
    }
  },[]);

  if(eachMessage && eachMessage.length!==0) {
    Message = eachMessage.map((item) => {
      if(!item.isDeleted) {
      return (
        <MessageBannelItem
          changeMessage={setEachMessage}
          reRender={Rerender}
          aurthor={item.fromID.substring(3)}
          title={item.subject}
          time={item.createdAt}
          msg={item.text}
          admin={(item.fromID===auth.getUserName())}        //Not Done
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
