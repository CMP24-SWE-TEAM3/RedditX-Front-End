import NotificationItem from "../NotificationItem/NotificationItem";
import {
  ContainerContent,
  ContainerContentInner,
  ContainerContentOuter,
  ContainerWalid,
  NotificationList,
  TextMain,
} from "./NotificationContent.styled";
import useFetchFunction from "Hooks/useFetchFunction";

import { useEffect } from "react";
import pushNotifications from "Services/pushNotifications";
import { useAuth } from "Features/Authentication/Contexts/Authentication";

const Notifications = [
  {
    title: "Reply",
    text: "Someone Replied to you",
    id: 1,
    createdAt: "2022,11,29",
  },
  {
    title: "Mention",
    text: "Someone Mentioned you",
    id: 2,
    createdAt: "2022,11,28",
  },
  {
    title: "Like",
    text: "Someone Upvoted your Thing",
    id: 3,
    createdAt: "2022,11,30",
  },
];



const NotificationContent = ({notificationRes}) => {
  let notifs = [];
  console.log(notificationRes.notifications);
  if (notificationRes && notificationRes.length!==0) {
  notifs = notificationRes.notifications.map((item)=>{
    let src;
    let fileSrc;
    if(item.sourceThing.substring(0,2)==="t2") {
      src = item.userIcon;
      fileSrc = "users";
    }
    else {
      src=item.communityIcon;
      fileSrc = "subreddits";
    }
    return(
      <li key={item._id.toString()}>
        <NotificationItem
          id = {item._id}  //For Routing
          header={item.title}
          content={item.text}
          date = {item.createdAt}
          img = {src}
          fileSrc = {fileSrc}   //Used to Request Images, also for routing (to a user or a community)
        />
      </li>
    );
  });
}


  return (
    <ContainerContent>
      <ContainerWalid>
        <ContainerContentOuter>
          <ContainerContentInner>
            <TextMain>Earlier</TextMain>
            {notificationRes && 
            <NotificationList>{notifs}</NotificationList>}
          </ContainerContentInner>
        </ContainerContentOuter>
      </ContainerWalid>
    </ContainerContent>
  );
};

export default NotificationContent;
