import NotificationContent from "Features/Notifications/Components/NotificationContent/NotificationContent";
import NotificationsUpperSide from "Features/Notifications/Components/NotificationsUpperSide/NotificationsUpperSide";
import {
  ContainerNotifications,
  ContainerNotificationsInner,
} from "./Notifications.styled";

const Notifications = () => {
  return (
    <ContainerNotifications>
      <ContainerNotificationsInner>
        <NotificationsUpperSide />
        <NotificationContent />
      </ContainerNotificationsInner>
    </ContainerNotifications>
  );
};

export default Notifications;
