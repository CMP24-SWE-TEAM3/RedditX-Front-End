import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ico from 'Assets/redditico.png'
import { DropDownLeftStyled, IconStyled} from "./DropDownLeft.styled";
import {BsArrowUpRightCircle, BsBarChartFill, BsStar} from 'react-icons/bs';
import {HiOutlineVideoCamera, HiOutlinePlus} from 'react-icons/hi';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {AiFillHome} from 'react-icons/ai';

const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
    <a style={{color: "black", textDecoration: 'none', margin: '5px'}} href="" ref={ref} onClick={(e) => {
        e.preventDefault();
        onClick(e)
    }}>{children}
    </a>
));
//&#x25bc;
//&#709;

const CustomMenu = React.forwardRef(
    ({children, style, className, 'aria-labelledby': labeledBy}, ref) => {
        const [value, setValue] = useState('');
        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}>
                <Form.Control
                    autoFocus
                    placeholder="Filter"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) => !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

const DropDownLeft = (props) => {
    return (
            <DropDownLeftStyled>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <div><span><AiFillHome/></span>
                        <span><h6>{props.Name}</h6></span>
                    </div>
                </Dropdown.Toggle>


                <Dropdown.Menu as={CustomMenu}>
                    <div className={'feed'}>Your Communities</div>
                    <Dropdown.Item eventKey="17"><span><HiOutlinePlus/></span> Create Community </Dropdown.Item>
                    <div className={'community'}>
                        <Dropdown.Item eventKey="18"><img src={ico}></img><span className={'word'}>r/funny</span><span
                            className={'right-span'}><BsStar/></span></Dropdown.Item>
                    </div>

                    <div className={'feed'}>FEEDS</div>
                    <Dropdown.Item eventKey="1"><span><AiFillHome/></span>Home</Dropdown.Item>
                    <Dropdown.Item eventKey="2"><span><BsArrowUpRightCircle/></span>Popular</Dropdown.Item>
                    <Dropdown.Item eventKey="3"><span><BsBarChartFill/></span> All</Dropdown.Item>
                    <Dropdown.Item eventKey="4"><span><HiOutlineVideoCamera/></span>Reddit Live</Dropdown.Item>
                    <Dropdown.Divider/>
                    <div className={'feed'}>OTHERS</div>
                    <Dropdown.Item eventKey="5"><span></span>User Settings</Dropdown.Item>
                    <Dropdown.Item eventKey="6"><span></span>Messages</Dropdown.Item>
                    <Dropdown.Item eventKey="7"><span><HiOutlinePlus/></span>Create Post</Dropdown.Item>
                    <Dropdown.Item eventKey="8"><span></span>Top Communities</Dropdown.Item>
                    <Dropdown.Item eventKey="9"><span></span>Top Communities</Dropdown.Item>
                    <Dropdown.Item eventKey="10"><span><IoMdNotificationsOutline/></span>Notifications</Dropdown.Item>
                    <Dropdown.Item eventKey="11"><span></span>Community Hubs</Dropdown.Item>
                    <Dropdown.Item eventKey="12"><span></span>Coins</Dropdown.Item>
                    <Dropdown.Item eventKey="13"><span></span>Premium</Dropdown.Item>
                    <Dropdown.Item eventKey="14"><span></span>Avatar</Dropdown.Item>
                    <Dropdown.Item eventKey="15"><span></span>Talk</Dropdown.Item>
                    <Dropdown.Item eventKey="16"><span></span>Predictions</Dropdown.Item>
                </Dropdown.Menu>
            </DropDownLeftStyled>
    );
};
export default DropDownLeft;