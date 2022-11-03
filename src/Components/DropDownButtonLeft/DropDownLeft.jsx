import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ico from 'Assets/redditico.png'
import {DropDownLeftStyled,OffcanvasBody} from "./DropDownLeft.styled";
import {BsArrowUpRightCircle, BsBarChartFill, BsStar} from 'react-icons/bs';
import {HiOutlineVideoCamera, HiOutlinePlus} from 'react-icons/hi';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {AiFillHome} from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
    <a style={{color: "black", textDecoration: 'none', margin: '5px'}} href="" ref={ref} onClick={(e) => {
        e.preventDefault();
        onClick(e)
    }}>{children}
    </a>
));
//&#x25bc;
//&#709;
export {CustomToggle};

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
export {CustomMenu};
/**
 * Component that has all your accessibility and profile in drop-down list.
 *
 * @param {}
 * @returns {React.Component}
 */

const DropDownLeft = ({Name}) => {
    return (
        <>
            <DropDownLeftStyled>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <div><span><AiFillHome/></span>
                        <span><h6>{Name}</h6></span><SideBar/>
                    </div>
                </Dropdown.Toggle>
                <DropDownMenu/>
            </DropDownLeftStyled>
        </>
    );
};
export default DropDownLeft;

const SideBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Toggle
            </Button>

            <OffcanvasBody show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Body>
                    <DropDownLeft showDropDown={true}/>
                </Offcanvas.Body>
            </OffcanvasBody>
        </>
    );
}

export {SideBar};


const DropDownMenu = () => {
    return (
        <>
            { /* TODO: Add icons for dropdown buttons*/}
            <Dropdown.Menu as={CustomMenu}>
                <div className={'feed'}>Your Communities</div>
                <Dropdown.Item eventKey="17"><span><HiOutlinePlus/></span> Create Community </Dropdown.Item>
                <div className={'community'}>
                    <Dropdown.Item eventKey="18"><img src={ico}/><span className={'word'}>r/funny</span><span
                        className={'right-span'}><BsStar/></span></Dropdown.Item>
                </div>

                <div className={'feed'}>FEEDS</div>
                <Dropdown.Item eventKey="1"><span><AiFillHome/></span>Home</Dropdown.Item>
                <Dropdown.Item eventKey="2"><span><BsArrowUpRightCircle/></span>Popular</Dropdown.Item>
                <Dropdown.Item eventKey="3"><span><BsBarChartFill/></span> All</Dropdown.Item>
                <Dropdown.Item eventKey="4"><span><HiOutlineVideoCamera/></span>Reddit Live</Dropdown.Item>
                <Dropdown.Divider/>
                <div className={'feed'}>OTHERS</div>
                <Dropdown.Item eventKey="5"><span/>User Settings</Dropdown.Item>
                <Dropdown.Item eventKey="6"><span/>Messages</Dropdown.Item>
                <Dropdown.Item eventKey="7"><span><HiOutlinePlus/></span>Create Post</Dropdown.Item>
                <Dropdown.Item eventKey="8"><span/>Top Communities</Dropdown.Item>
                <Dropdown.Item eventKey="9"><span/>Top Communities</Dropdown.Item>
                <Dropdown.Item eventKey="10"><span><IoMdNotificationsOutline/></span>Notifications</Dropdown.Item>
                <Dropdown.Item eventKey="11"><span/>Community Hubs</Dropdown.Item>
                <Dropdown.Item eventKey="12"><span/>Coins</Dropdown.Item>
                <Dropdown.Item eventKey="13"><span/>Premium</Dropdown.Item>
                <Dropdown.Item eventKey="14"><span/>Avatar</Dropdown.Item>
                <Dropdown.Item eventKey="15"><span/>Talk</Dropdown.Item>
                <Dropdown.Item eventKey="16"><span/>Predictions</Dropdown.Item>
            </Dropdown.Menu>
        </>
    );

};
export {DropDownMenu};