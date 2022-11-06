// imports
import React, {useContext} from 'react';
import {BsCoin, BsXDiamond} from 'react-icons/bs';
import {CiCircleQuestion, CiLogin, CiSettings} from 'react-icons/ci';
import {DropdownButtonIconStyled, Container} from "./DropDownRight.styled";
import AuthContext from "Contexts/auth-context";
import {Accordion, NavDropdown} from "react-bootstrap";
import {BiCoinStack} from "react-icons/bi";
import SwitchButton from "Components/SwitchButton/SwitchButton";
import {SiCircle} from "react-icons/si";
import {RiMarkPenLine} from "react-icons/ri";
import {CgDanger} from "react-icons/cg";
import {VscListOrdered} from "react-icons/vsc";
import {AiOutlineClockCircle} from "react-icons/ai";
import {HiOutlineSpeakerphone} from "react-icons/hi";
import {CgProfile} from "react-icons/cg";
import {GiSixEyes} from "react-icons/gi";
import {MdDoNotDisturbAlt} from "react-icons/md";

/**
 * Component that  shows all stuff and options to user.
 *
 * @returns {React.Component}
 */
const DropDownRightButton = ({Mode}) => {
    const LoginHandler = () => {
        alert('Login or Sign up Page')
    }
    const ctx = useContext(AuthContext);
    return (
        <Container title={<DropdownButtonIconStyled/>} id="basic-nav-dropdown">
            <NavDropdown.Item as={'title'} disabled={'disabled'}>
                <i><CgProfile/></i>
                <span className={'stuff'}>My Stuff</span>
            </NavDropdown.Item>
            <div className={'first-sec'}>
                <NavDropdown.Item>
                    <span>Online Status</span>
                    <span className={'switch-but'}> <SwitchButton/></span>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <span>Profile</span>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <span>Style Avatar</span>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <span>User Settings</span>
                </NavDropdown.Item>
            </div>
            <NavDropdown.Divider/>

            <NavDropdown.Item as={'title'} disabled={'disabled'}>
                <i><GiSixEyes/></i>
                <span className={'stuff'}>View Options</span>
            </NavDropdown.Item>
            <div className={'first-sec'}>
                <NavDropdown.Item>
                    <span>Dark Mode</span>
                    <span className={'switch-but'}> <SwitchButton/></span>
                </NavDropdown.Item>
            </div>
            <NavDropdown.Divider/>
            <NavDropdown.Item>
                <span><MdDoNotDisturbAlt/></span>
                <span>Create Community</span>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <span><HiOutlineSpeakerphone/></span>
                <span>Advertise on Reddit</span>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <span><BiCoinStack/></span>
                <span>Coins</span>
            </NavDropdown.Item>
            <NavDropdown.Item><
                span><SiCircle/></span>
                <span>Talk</span>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <span><BsXDiamond/></span>
                <span>Premium</span>
            </NavDropdown.Item>


            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <span><AiOutlineClockCircle/></span><
                        span> Recent Communities</span>
                    </Accordion.Header>

                    <Accordion.Body>
                        <NavDropdown.Item>Announcements</NavDropdown.Item>
                        <NavDropdown.Item>Steam on Reddit</NavDropdown.Item>
                        <hr className={'border-dark my-3'}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><span><RiMarkPenLine/></span>
                        <span>Explore</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Gaming</Accordion.Header>
                                <Accordion.Body>
                                    <NavDropdown.Item>MineCraft</NavDropdown.Item>
                                    <NavDropdown.Item>Pokimane</NavDropdown.Item>
                                    <hr className={'border-dark my-3'}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Sports</Accordion.Header>
                                <Accordion.Body>
                                    <NavDropdown.Item>NBA</NavDropdown.Item>
                                    <NavDropdown.Item>NFL</NavDropdown.Item>
                                    <NavDropdown.Item>Item 4B</NavDropdown.Item>
                                    <hr className={'border-dark my-3'}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Television</Accordion.Header>
                                <Accordion.Body>
                                    <NavDropdown.Item>Wife Swap</NavDropdown.Item>
                                    <NavDropdown.Item>Sister Wives</NavDropdown.Item>
                                    <hr className={'border-dark my-3'}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Celebrity</Accordion.Header>
                                <Accordion.Body>
                                    <NavDropdown.Item>Doja Cat</NavDropdown.Item>
                                    <NavDropdown.Item>Anya Taylor-Joy</NavDropdown.Item>
                                    <hr className={'border-dark my-3'}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <hr className={'border-dark my-3'}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="7">
                    <Accordion.Header>
                        <span><CiSettings/></span>
                        <span> Settings</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <NavDropdown.Item onClick={Mode}>Dark Mode</NavDropdown.Item>
                        <hr className={'border-dark my-3'}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <NavDropdown.Item>
                <span><HiOutlineSpeakerphone/></span>
                <span>Advertise on Reddit</span>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <span><CiCircleQuestion/></span><span>
                Help Center</span></NavDropdown.Item>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="8">
                    <Accordion.Header>
                        <span><CgDanger/></span>
                        <span>More</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <NavDropdown.Item>Dark Mode</NavDropdown.Item>
                        <NavDropdown.Item>Reddit IOS</NavDropdown.Item>
                        <NavDropdown.Item>Reddit Android</NavDropdown.Item>
                        <NavDropdown.Item>Rereddit</NavDropdown.Item>
                        <hr className={'border-dark my-3'}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="9">
                    <Accordion.Header>
                        <span><VscListOrdered/></span>
                        <span>Terms & Policies</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <NavDropdown.Item>Use Agreement</NavDropdown.Item>
                        <NavDropdown.Item>Privacy Policy</NavDropdown.Item>
                        <NavDropdown.Item>Content Policy</NavDropdown.Item>
                        <NavDropdown.Item>Moderator Code of Conduct</NavDropdown.Item>
                        <hr className={'border-dark my-3'}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <NavDropdown.Item onClick={LoginHandler}>
                <span><CiLogin/></span>
                <span>Sign Up or Log In</span>
            </NavDropdown.Item>
            <NavDropdown.Item className={'footer'} disabled={'disabled'}>
                © 2022 Reddit, Inc. All rights
                reserved
            </NavDropdown.Item>
        </Container>
    );
};

export default DropDownRightButton;


//switch buttons
//
