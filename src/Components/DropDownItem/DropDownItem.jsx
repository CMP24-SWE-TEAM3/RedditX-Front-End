import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import {HiOutlinePlus, HiOutlineVideoCamera} from "react-icons/hi";
import ico from "Assets/images/redditico.png";
import {BsArrowUpRightCircle, BsBarChartFill, BsStar} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import {DropdownContainer} from "./DropDownItem.styled";
import CustomMenu from "Utils/CustomMenu/CustomMenu";
import db from "Data/db.json"

const DropDownItem = () => {
    return (
        <DropdownContainer as={CustomMenu}>
            <Dropdown.ItemText as={"title"}>your communities</Dropdown.ItemText>
            {db.Communities.map(community => {
                return (
                    <Dropdown.Item key={community.id} eventKey={community.id}> {community.name} </Dropdown.Item>
                )
            })}
            <Dropdown.ItemText as={'title'}>FEEDS</Dropdown.ItemText>
            {db.Feeds.map(feed => {
                return (
                    <Dropdown.Item key={feed.id} eventKey={feed.id}> {feed.name}</Dropdown.Item>
                )
            })}

            <Dropdown.ItemText as={'title'}>OTHERS</Dropdown.ItemText>
            {db.OTHERS.map(other => {
                return (
                    <Dropdown.Item key={other.id} eventKey={other.id}> {other.name} </Dropdown.Item>
                )
            })}
        </DropdownContainer>
    );
};
export default DropDownItem;

