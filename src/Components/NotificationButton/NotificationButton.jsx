import React from 'react';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {GlobalButtonStyled} from "Components/GlobalButton/GlobalButton.styled";

const NotificationButton = (props) => {
    return (
        <GlobalButtonStyled onClick={props.onshow}>
            <IoMdNotificationsOutline/>
        </GlobalButtonStyled>
    );
};

export default NotificationButton;
