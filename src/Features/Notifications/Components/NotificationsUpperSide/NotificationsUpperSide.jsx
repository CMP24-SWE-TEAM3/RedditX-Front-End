import { Link } from "react-router-dom";
import {
  ContainerUpper,
  ContainerUpperHeader,
  ContainerUpperLI,
  ContainerUpperNav,
  ContainerUpperUL,
} from "./NotificationsUpperSide.styled";
import { RiHome8Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import markAllAsRead from "Features/Notifications/Services/MarkAllAsRead";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";

const NotificationsUpperSide = ({notifs}) => {
  const auth = useAuth();
  const [markReadRes, errorMarkRead, loadingMarkRead, fetchData] =
    useFetchFunction();

  function handleReadNotifications() {
    let mapping;
    if(notifs && notifs.length!==0) {
      mapping = notifs.map((item)=> {
        let dataObject = {
          notificationID: item._id,
        }
        markAllAsRead(fetchData, auth, dataObject);
      });
    }

  }
  return (
    <ContainerUpper>
      <ContainerUpperHeader>Notifications</ContainerUpperHeader>
      <ContainerUpperNav>
        <ContainerUpperUL>
          <div className="flex">
            <ContainerUpperLI>
              <Link className="Activity" to={"/notifications"}>
                Activity
              </Link>
            </ContainerUpperLI>
            <ContainerUpperLI>
              <Link className="another" to={"/message/"}>
                Messages
              </Link>
            </ContainerUpperLI>
          </div>
          <ContainerUpperLI>
            <Link
              onClick={handleReadNotifications}
              className="another"
              to={"/notifications"}
            >
              <span className="Icon">
                <RiHome8Line />
              </span>
              Mark as read
            </Link>
          </ContainerUpperLI>
        </ContainerUpperUL>
      </ContainerUpperNav>
    </ContainerUpper>
  );
};

export default NotificationsUpperSide;
