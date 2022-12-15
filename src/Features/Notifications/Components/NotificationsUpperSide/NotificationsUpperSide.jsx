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

const NotificationsUpperSide = () => {
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
              <Link className="another" to={"/notifications"}>
                Messages
              </Link>
            </ContainerUpperLI>
          </div>
          <ContainerUpperLI>
            <Link className="another" to={"/notifications"}>
              <span className="Icon">
                <RiHome8Line />
              </span>
              Mark as read
            </Link>
          </ContainerUpperLI>
          {/* <ContainerUpperLI>
            <Link className="another" to={"/notifications"}>
              <span className="Icon">
                <FiSettings />
              </span>
              Settings
            </Link>
          </ContainerUpperLI> */}
        </ContainerUpperUL>
      </ContainerUpperNav>
    </ContainerUpper>
  );
};

export default NotificationsUpperSide;
