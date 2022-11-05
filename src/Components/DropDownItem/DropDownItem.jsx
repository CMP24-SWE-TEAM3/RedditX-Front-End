import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import {HiOutlinePlus, HiOutlineVideoCamera} from "react-icons/hi";
import ico from "Assets/redditico.png";
import {BsArrowUpRightCircle, BsBarChartFill, BsStar} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {DropdownContainer} from "./DropDownItem.styled";
import CustomMenu from "Utils/CustomMenu/CustomMenu";

const DropDownItem = () => {
    return (
        <DropdownContainer as={CustomMenu}>
            <Dropdown.ItemText as={"title"}>your communities</Dropdown.ItemText>

            <Dropdown.Item eventKey="1">Create Community</Dropdown.Item>
            <Dropdown.Item eventKey="2">r/announcements</Dropdown.Item>
            <Dropdown.Item eventKey="3">r/funny</Dropdown.Item>


            <Dropdown.ItemText as={'title'}>FEEDS</Dropdown.ItemText>

            <Dropdown.Item eventKey="4">Home</Dropdown.Item>
            <Dropdown.Item eventKey="5">Popular</Dropdown.Item>
            <Dropdown.Item eventKey="6"> All</Dropdown.Item>
            <Dropdown.Item eventKey="7" as={"image"}>Reddit Live</Dropdown.Item>



            <Dropdown.ItemText as={'title'}>OTHERS</Dropdown.ItemText>
            <Dropdown.Item eventKey="8">User Settings</Dropdown.Item>
            <Dropdown.Item eventKey="9">Messages</Dropdown.Item>
            <Dropdown.Item eventKey="10">Create Post</Dropdown.Item>
            <Dropdown.Item eventKey="11">Top Communities</Dropdown.Item>
            <Dropdown.Item eventKey="12">Top Communities</Dropdown.Item>
            <Dropdown.Item eventKey="13">Notifications</Dropdown.Item>
            <Dropdown.Item eventKey="14">Community Hubs</Dropdown.Item>
            <Dropdown.Item eventKey="15">Coins</Dropdown.Item>
            <Dropdown.Item eventKey="16">Premium</Dropdown.Item>
            <Dropdown.Item eventKey="17">Avatar</Dropdown.Item>
            <Dropdown.Item eventKey="18">Talk</Dropdown.Item>
            <Dropdown.Item eventKey="19">Predictions</Dropdown.Item>

        </DropdownContainer>
    );
};

export default DropDownItem;

