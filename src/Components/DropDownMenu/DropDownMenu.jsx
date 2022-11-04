import {DropdownContainer} from "./DropDownMenu.styled";
import Dropdown from "react-bootstrap/Dropdown";
import {HiOutlinePlus, HiOutlineVideoCamera} from "react-icons/hi";
import ico from "Assets/redditico.png";
import {BsArrowUpRightCircle, BsBarChartFill, BsStar} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import React from "react";
import CustomMenu from "Utils/CustomMenu/CustomMenu";

const DropDownMenu = () => {
    return (
        <DropdownContainer>

            { /* TODO: Add icons for dropdown buttons*/}
            <Dropdown.Menu as={CustomMenu}>
                <div className={'feed'}>Your Communities</div>
                <Dropdown.Item eventKey="17">
                    <span><HiOutlinePlus/></span>
                    Create Community
                </Dropdown.Item>

                <div className={'community'}>
                    <Dropdown.Item eventKey="18">
                        <img className={'ico'} src={ico}/>
                        <span className={'word'}>
                        r/funny</span>
                        <span className={'right-span'}><BsStar/></span></Dropdown.Item>
                </div>

                <div className={'feed'}>FEEDS</div>
                <Dropdown.Item eventKey="1">
                    <span><AiFillHome/></span>
                    Home
                </Dropdown.Item>

                <Dropdown.Item eventKey="2">
                    <span><BsArrowUpRightCircle/></span>
                    Popular
                </Dropdown.Item>

                <Dropdown.Item eventKey="3">
                    <span><BsBarChartFill/></span>
                    All
                </Dropdown.Item>

                <Dropdown.Item eventKey="4">
                    <span><HiOutlineVideoCamera/></span>
                    Reddit Live
                </Dropdown.Item>
                <Dropdown.Divider/>


                <div className={'feed'}>OTHERS</div>
                <Dropdown.Item eventKey="5"><span/>User Settings</Dropdown.Item>
                <Dropdown.Item eventKey="6"><span/>Messages</Dropdown.Item>
                <Dropdown.Item eventKey="7">
                    <span><HiOutlinePlus/></span>
                    Create Post
                </Dropdown.Item>

                <Dropdown.Item eventKey="8"><span/>Top Communities</Dropdown.Item>
                <Dropdown.Item eventKey="9"><span/>Top Communities</Dropdown.Item>
                <Dropdown.Item eventKey="10">
                    <span><IoMdNotificationsOutline/></span>
                    Notifications
                </Dropdown.Item>

                <Dropdown.Item eventKey="11"><span/>Community Hubs</Dropdown.Item>
                <Dropdown.Item eventKey="12"><span/>Coins</Dropdown.Item>
                <Dropdown.Item eventKey="13"><span/>Premium</Dropdown.Item>
                <Dropdown.Item eventKey="14"><span/>Avatar</Dropdown.Item>
                <Dropdown.Item eventKey="15"><span/>Talk</Dropdown.Item>
                <Dropdown.Item eventKey="16"><span/>Predictions</Dropdown.Item>
            </Dropdown.Menu>
        </DropdownContainer>
    );
};

export default DropDownMenu;
