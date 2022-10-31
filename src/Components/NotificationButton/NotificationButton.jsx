import {IoMdNotificationsOutline} from 'react-icons/io';
import {GlobalButtonStyled} from "Components/Global/GlobalButton.styled";
import React, {useState, useRef} from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import {Container} from "./NotificationButton.styled";
import {BsThreeDots, BsClipboardCheck} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import link from 'Assets/link.png';

/**
 * Component that displays notifications about changes in the state of the application
 * @returns {React.Component}
 * @constructor
 */
const NotificationButton = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <Container ref={ref}>
            <GlobalButtonStyled onClick={handleClick}>
                <IoMdNotificationsOutline/>
            </GlobalButtonStyled>

            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}>
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
                            <i>
                                <a className={'content-a'}
                                   href={'https://www.reddit.com/r/Eln2aa4yn/comments/yi1rd4/ccccc/'}>
                                    <span className={'a-span'}>
                                     <img src={link} alt={'community-name'}/>
                                    </span>
                                    <span className={'span-info'}>
                                        <span className={'child'}>
                                            <span className={'sub-child'}>
                                            <span className={'info'}>Now in Eln2aa4yn</span>
                                            <span className={'dot'}>.</span>
                                            <span className={'time'}>6h</span>
                                            </span>
                                            <button className={'dot'}>
                                                <i><BsThreeDots/></i>
                                            </button>
                                        </span>
                                        <span className={'info-child'}>new message</span>
                                    </span>
                                </a>

                            </i>
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
