import NotificationItem from "../NotificationItem/NotificationItem";
import {
  ContainerContent,
  ContainerContentInner,
  ContainerContentOuter,
  ContainerWalid,
  NotificationList,
  TextMain,
} from "./NotificationContent.styled";

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
  const notifs = Notifications.map((item)=>{
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
