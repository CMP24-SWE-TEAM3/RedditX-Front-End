import NotificationContent from "Features/User/Components/NotificationContent/NotificationContent";
import NotificationsUpperSide from "Features/User/Components/NotificationsUpperSide/NotificationsUpperSide";
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
