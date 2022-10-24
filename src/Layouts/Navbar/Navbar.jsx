import React from 'react';
import Badge from "Components/BadgeButton/Badge";
import SearchBar from "Components/SearchBar/SearchBar";
import {StyledHeader, StyledSeperator} from "./Navbar.styled";
import PopularButton from "Components/PopularButton/PopularButton"
import CoinButton from "Components/CoinButton/CoinButton";
import ModeratorButton from "Components/ModeratorButton/ModeratorButton";
import DropFunc from 'Components/DropDownButtonLeft/DropDown'
import CreatePostButton from "Components/CreatePostButton/CreatePostButton"
import ChatButton from "Components/ChatButton/Chat";
import NotificationButton from "Components/NotificationButton/NotificationButton";

const Navbar = (props) => {
    const ButtonHandler = () => {
        alert('Hello Reddit!');
        console.log('Hello Reddit!');

    }
    return (
        <StyledHeader>
            <Badge/>
            <DropFunc Name={"Home"}/>
            <SearchBar/>
            <PopularButton onshow={ButtonHandler}/>
            <CoinButton onshow={ButtonHandler}/>
            <StyledSeperator/>
            <ModeratorButton onshow={ButtonHandler}/>
            <ChatButton onshow={ButtonHandler}/>
            <CreatePostButton onshow={ButtonHandler}/>
            <NotificationButton onshow={ButtonHandler}/>
            <DropFunc Name={"Profile"}/>
        </StyledHeader>
    );
};

export default Navbar;
