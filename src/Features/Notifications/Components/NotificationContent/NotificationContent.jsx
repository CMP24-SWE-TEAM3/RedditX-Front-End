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



const NotificationContent = () => {
  const [notificationRes, errorNotification, notificationLoading, fetchFunction] = useFetchFunction();
  const auth = useAuth();

  useEffect(()=>{
    pushNotifications(fetchFunction, auth)
  },[])
  console.log(notificationRes);
  
  const notifs = notificationRes.map((item)=>{
    return(
      <li key={item.id.toString()}>
        <NotificationItem
          header={item.title}
          content={item.text}
          date = {item.createdAt}
        />
      </li>
    );

  });
  return (
    <ContainerContent>
      <ContainerWalid>
        <ContainerContentOuter>
          <ContainerContentInner>
            <TextMain>Earlier</TextMain>
            <NotificationList>{notifs}</NotificationList>
          </ContainerContentInner>
        </ContainerContentOuter>
      </ContainerWalid>
    </ContainerContent>
  );
};

export default NotificationContent;
