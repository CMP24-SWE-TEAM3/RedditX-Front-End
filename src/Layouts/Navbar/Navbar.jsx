// import React, {useContext} from 'react';
import Badge from "Components/BadgeButton/Badge";
import SearchBar from "Components/SearchBar/SearchBar";
import {StyledHeader, StyledSeperator} from "./Navbar.styled";
import PopularButton from "Components/PopularButton/PopularButton"
import CoinButton from "Components/CoinButton/CoinButton";
import ModeratorButton from "Components/ModeratorButton/ModeratorButton";
import CreatePostButton from "Components/CreatePostButton/CreatePostButton"
import ChatButton from "Components/ChatButton/Chat";
import NotificationButton from "Components/NotificationButton/NotificationButton";
import AdvertiseButton from "Components/AdvertiseButton/AdvertiseButton";
import DropDownRightButton from "Components/DropDownRight/DropDownRight";
import DropDownLeft from "Components/DropDownButtonLeft/DropDown";
import SignUp from "Components/SignUp/SignUp";
import LoginButton from "Components/LoginButton/LoginButton";
import React, {useContext} from "react";
import AuthContext from "Contexts/auth-context";

const Navbar = (props) => {
    const ButtonHandler = () => {
        alert('Hello Reddit!');
    }
    const ctx = useContext(AuthContext);
    return (
        <StyledHeader>
            <div className='search'>
                <Badge/>
                <SearchBar/>
            </div>
            {ctx.isLoggedIn &&
                (<>
                    <DropDownLeft Name={"Home"}/>

                    <PopularButton onshow={ButtonHandler}/>
                    <CoinButton onshow={ButtonHandler}/>
                    <StyledSeperator/>
                    <ModeratorButton onshow={ButtonHandler}/>
                    <ChatButton onshow={ButtonHandler}/>
                    <NotificationButton onshow={ButtonHandler}/>
                    <CreatePostButton onshow={ButtonHandler}/>
                    <AdvertiseButton/></>)
            }
            {!ctx.isLoggedIn && <div className={'logged-out'}>
                <SignUp/>
                <LoginButton/>
            </div>}


            {/*<DropFunc Name={"Profile"}/>*/}
            <DropDownRightButton/>
        </StyledHeader>
    );
};

export default Navbar;
