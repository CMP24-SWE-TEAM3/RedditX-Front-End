import { useAuth } from "Features/Authentication/Contexts/Authentication";
import NotificationContent from "Features/Notifications/Components/NotificationContent/NotificationContent";
import NotificationsUpperSide from "Features/Notifications/Components/NotificationsUpperSide/NotificationsUpperSide";
import useFetchFunction from "Hooks/useFetchFunction";
import { useEffect } from "react";
import pushNotifications from "Services/pushNotifications";
import {
  ContainerNotifications,
  ContainerNotificationsInner,
} from "./Notifications.styled";
const Notifications = () => {
  const [notificationRes, errorNotification, notificationLoading, fetchFunction] = useFetchFunction();
  const auth = useAuth();

  useEffect(()=>{
    pushNotifications(fetchFunction, auth);
  },[]);
  
  return (
    
    <ContainerNotifications>
      { !notificationLoading &&
      <ContainerNotificationsInner>
        <NotificationsUpperSide />
        <NotificationContent notificationRes={notificationRes}/>
      </ContainerNotificationsInner>
      }
    </ContainerNotifications>
  );
};

export default Notifications;
