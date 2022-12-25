import { useAuth } from "Features/Authentication/Contexts/Authentication";
import NotificationContent from "Features/Notifications/Components/NotificationContent/NotificationContent";
import NotificationsUpperSide from "Features/Notifications/Components/NotificationsUpperSide/NotificationsUpperSide";
import useFetchFunction from "Hooks/useFetchFunction";
import { useState } from "react";
import { useEffect } from "react";
import pushNotifications from "Services/pushNotifications";
import {
  ContainerNotifications,
  ContainerNotificationsInner,
} from "./Notifications.styled";

/**
 * Component that contains the whole Notification page
 *
 * @Component
 * @returns {React.Component}
 */
const Notifications = () => {
  const [notificationRes, errorNotification, notificationLoading, fetchFunction] = useFetchFunction();
  const auth = useAuth();
  const [reRender, setRerender] = useState(false);
  useEffect(()=>{
    pushNotifications(fetchFunction, auth);
  },[reRender]);
  
  let notifics =[];
  let mapping;
  if(notificationRes && notificationRes.notifications && notificationRes.notifications.length!==0) {
    mapping = notificationRes.notifications.map((item)=>{
      if(item.isRead===false) {
        notifics.push(item);
      }
    });
  }
  return (
    
    <ContainerNotifications>
      { !notificationLoading &&
      <ContainerNotificationsInner>
        <NotificationsUpperSide notifs={notifics}/>
        <NotificationContent notificationRes={notificationRes} Rerender = {setRerender}/>
      </ContainerNotificationsInner>
      }
    </ContainerNotifications>
  );
};

export default Notifications;
