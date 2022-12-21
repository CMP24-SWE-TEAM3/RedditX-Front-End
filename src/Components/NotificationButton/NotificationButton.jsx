// imports
import { IoMdNotificationsOutline } from "react-icons/io";
import { GlobalButtonStyled } from "Components/GlobalButton/GlobalButton.styled";
import React, { useState, useRef, useEffect } from "react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import ParseDateFromNow from "Features/Notifications/Utils/ParseDateFromNow";
import { BASE_URL } from "API/axios";
import {
  Container,
  Content,
  Child,
  SubChild,
  DotBtn,
  PopContainer,
  Word,
  InfoChild,
  RightSide,
  Message,
  Symbol,
  ContentSymbol,
  Time,
  Dot,
  ImageContainer,
  Info,
  SpanContainer,
  Footer,
  AlarmIcon,
  NotyIconStyle,
} from "./NotificationButton.styled";
import { BsThreeDots, BsClipboardCheck } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import pushNotifications from "Services/pushNotifications";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useNavigate } from "react-router-dom";
import {
  onForegroundMessage,
  requestPermission,
} from "PushNotification/messaging_init_in_sw";

/**
 * Component that displays notifications about changes in the state of the application
 *
 * @returns {React.Component}
 */
const NotificationButton = () => {
  /**
   * state of the notification button is changed  when the user clicks on the notification button
   */
  const [show, setShow] = useState(false);

  /**
   * state to track if mouse clicks outside notification's button or not
   */
  const [target, setTarget] = useState(null);

  // push notification
  const [showAlert, setShowAlert] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    onForegroundMessage()
      .then((payload) => {
        console.log("Received foreground message: ", payload);
        setShowAlert(true);
        const {
          notification: { title, body },
        } = payload;
        setNotification(JSON.stringify([...notification, { title, body }]));
      })
      .catch((err) =>
        console.log(
          "An error occured while retrieving foreground message. ",
          err
        )
      );
  }, [notification]);

  // ref the event listener
  const ref = useRef(null);
  const wrapperRef = useRef(null);
  // authorization user
  const auth = useAuth();

  /**
   * Function that is called when the state of the application changes (when clicks outside of notification's buttons)
   * @param ref
   */
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      //Close toast if clicked on outside of element
      const handleClickOutside = (event) => {
        const box = document.getElementById("notification-box");
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          box !== event.target &&
          !box.contains(event.target)
        ) {
          setShow(false);
        }
      };

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  /**
   * Function hand clicks  on the button notification
   * @param event
   */
  const handleClick = (event) => {
    setTarget(event.target);
    setShowAlert(false);
    setShow(!show);
  };

  useOutsideAlerter(wrapperRef);

  // Fetch notifications
  // Call useFetchFunction hook to handle states: loading, error, data
  // Loading: Boolean to tell if the request has been sent, or it's still loading
  // Error: Contains error message when the request is failed
  // Data: the response data
  const [notificationList, error, isLoading, fetchData] = useFetchFunction();
  useEffect(() => {
    pushNotifications(fetchData, auth);
  }, []);

  const navigate = useNavigate();
  return (
    <Container ref={ref}>
      <OverlayTrigger
        key={"bottom"}
        placement={"bottom"}
        delay={250}
        overlay={<Tooltip id={`tooltip-bottom`}>Notification</Tooltip>}
      >
        <GlobalButtonStyled
          data-testid="notificationButtonId"
          id="notification-box"
          onClick={handleClick}
        >
          <NotyIconStyle>
            {showAlert && <AlarmIcon>1</AlarmIcon>}
            <IoMdNotificationsOutline size={22} />
          </NotyIconStyle>
        </GlobalButtonStyled>
      </OverlayTrigger>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        ref={wrapperRef}
      >
        <Popover id="popover-contained">
          <Popover.Header>
            <Word>Notifications</Word>
            <RightSide>
              <Message onClick={() => navigate("/message")}>
                <Link>Messages </Link>
              </Message>
              <DotBtn>
                <Symbol>
                  <BsClipboardCheck />
                </Symbol>
              </DotBtn>
              <Link className={"setting"}>
                <Symbol>
                  <FiSettings />
                </Symbol>
              </Link>
            </RightSide>
          </Popover.Header>
          <Popover.Body data-testid={"notificationListId"}>
            <PopContainer />
            <Content>
              {notificationList &&
                notificationList.length !== 0 &&
                notificationList.notifications.map((comment, index) => {
                  return (
                    <ContentSymbol key={index}>
                      <Link to={`/user/${comment.sourceThing}`}>
                        <ImageContainer>
                          <img
                            crossOrigin="anonynmous"
                            src={`${BASE_URL}/users/files/${comment.userIcon}`}
                            alt=""
                          />
                        </ImageContainer>
                        <SpanContainer>
                          <Child>
                            <SubChild>
                              <Info key={comment._id}>Now {comment.title}</Info>
                              <Dot>.</Dot>
                              <Time>
                                {ParseDateFromNow(
                                  comment.createdAt
                                ).toDateString()}
                              </Time>
                            </SubChild>
                            <DotBtn>
                              <DotBtn>
                                <BsThreeDots />
                              </DotBtn>
                            </DotBtn>
                          </Child>
                          <InfoChild>{comment.text}</InfoChild>
                        </SpanContainer>
                      </Link>
                    </ContentSymbol>
                  );
                })}
            </Content>
          </Popover.Body>

          <Footer onClick={() => navigate("/notifications")}>
            <Link>See All</Link>
          </Footer>
        </Popover>
      </Overlay>
    </Container>
  );
};

export default NotificationButton;
