// imports
import {IoMdNotificationsOutline} from 'react-icons/io';
import {GlobalButtonStyled} from "Components/GlobalButton/GlobalButton.styled";
import React, {useState, useRef, useEffect} from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import {Container} from "./NotificationButton.styled";
import {BsThreeDots, BsClipboardCheck} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import link from 'Assets/Images/link.png';
import db from 'Data/db.json';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/**
 * Component that displays notifications about changes in the state of the application
 *
 * @returns {React.Component}
 */
const NotificationButton = () => {
    // state change
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);

    // ref the event listener
    const ref = useRef(null);
    const wrapperRef = useRef(null);

    /**
     * Function that is called when the state of the application changes (when clicks outside of notification's buttons)
     * @param ref
     */
    const useOutsideAlerter = (ref) => {
        useEffect(() => {

            //Close toast if clicked on outside of element
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShow(false);
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    /**
     * Function hand clicks  on the button notification
     * @param event
     */
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    useOutsideAlerter(wrapperRef);

    return (
        <Container ref={ref}>
            <OverlayTrigger
                key={'bottom'}
                placement={'bottom'}
                overlay={
                    <Tooltip id={`tooltip-bottom`}>Notification</Tooltip>}>
                <GlobalButtonStyled onClick={handleClick}>
                    <IoMdNotificationsOutline/>
                </GlobalButtonStyled>
            </OverlayTrigger>
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                ref={wrapperRef}>
                <Popover id="popover-contained">
                    <Popover.Header>
                        <span className={'word'}>
                            Notifications
                        </span>
                        <span className={'right-side'}>
                            <span className={'message'}>
                                <a href={'https://www.reddit.com/message/messages'}>Messages </a>
                            </span>

                            <button className={'but'}>
                                <i><BsClipboardCheck/></i>
                            </button>
                            <a className={'setting'} href={"https://www.reddit.com/settings/notifications"}>
                                <i>
                                <FiSettings/>
                                </i>
                            </a>
                        </span>
                    </Popover.Header>
                    <Popover.Body>
                        <div className={'pop'}/>
                        <div className={'content'}>
                            {db.comments.map(comment => {
                                return (
                                    <i className={'content-i'}>
                                        <a className={'content-a'}
                                           href={'https://www.reddit.com/r/Eln2aa4yn/comments/yi1rd4/ccccc/'}>
                                    <span className={'a-span'}>
                                     <img src={link} alt={'community-name'}/>
                                    </span>
                                            <span className={'span-info'}>
                                        <span className={'child'}>
                                            <span className={'sub-child'}>
                                            <span className={'info'} key={comment.id}>
                                                Now in {comment.name}
                                            </span>
                                            <span className={'dot'}>.</span>
                                            <span className={'time'}>{comment.time}h</span>
                                            </span>
                                            <button className={'dot'}>
                                                <i><BsThreeDots/></i>
                                            </button>
                                        </span>
                                        <span className={'info-child'}>{comment.message}</span>
                                    </span>
                                        </a>

                                    </i>)
                            })}

                        </div>
                    </Popover.Body>

                    <footer>
                        <a href={'https://www.reddit.com/notifications'}>See All</a>
                    </footer>
                </Popover>
            </Overlay>
        </Container>
    );
}

export default NotificationButton;
