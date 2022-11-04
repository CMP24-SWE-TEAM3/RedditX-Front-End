// imports
import React, {useContext} from 'react';
import {BsCoin} from 'react-icons/bs';
import {CiCircleQuestion, CiSettings} from 'react-icons/ci';
import {DropdownButtonIconStyled, Container} from "./DropDownRight.styled";
import AuthContext from "Contexts/auth-context";
import {Accordion, NavDropdown} from "react-bootstrap";
import {BiCoinStack} from "react-icons/bi";
import SwitchButton from "Components/SwitchButton/SwitchButton";

/**
 * Component that  shows all stuff and options to user.
 *
 * @returns {React.Component}
 */
const DropDownRightButton = (props) => {
    const LoginHandler = () => {
        alert('Login or Sign up Page')
    }
    const ctx = useContext(AuthContext);
    return (
        <Container title={<i><DropdownButtonIconStyled/></i>} id="basic-nav-dropdown">
            <NavDropdown.Item> <span><BiCoinStack/></span>Coins
            </NavDropdown.Item>
            <NavDropdown.Item><span><CiSettings/> Talk</span></NavDropdown.Item>
            <NavDropdown.Item><span><CiSettings/> Premium</span></NavDropdown.Item>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><span><CiSettings/> Recent Communities</span></Accordion.Header>
                    <Accordion.Body>
                        <NavDropdown.Item>Announcements</NavDropdown.Item>
                        <NavDropdown.Item>Steam on Reddit</NavDropdown.Item>
                        <hr className={'border-dark my-3'}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><span><CiSettings/> Explore</span></Accordion.Header>
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
                    <Accordion.Header><span><CiSettings/> Settings</span></Accordion.Header>
                    <Accordion.Body>
                        <NavDropdown.Item onClick={props.toggleMode}>Dark Mode</NavDropdown.Item>
                        <hr className={'border-dark my-3'}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <NavDropdown.Item><span><CiSettings/> Advertise on Reddit</span></NavDropdown.Item>
            <NavDropdown.Item><span><CiCircleQuestion/></span>Help Center</NavDropdown.Item>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="8">
                    <Accordion.Header><span><BiCoinStack/></span>More</Accordion.Header>
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
                    <Accordion.Header><span><BiCoinStack/></span>Terms & Policies</Accordion.Header>
                    <Accordion.Body>
                        <NavDropdown.Item>Use Agreement</NavDropdown.Item>
                        <NavDropdown.Item>Privacy Policy</NavDropdown.Item>
                        <NavDropdown.Item>Content Policy</NavDropdown.Item>
                        <NavDropdown.Item>Moderator Code of Conduct</NavDropdown.Item>
                        <hr className={'border-dark my-3'}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="9">
                    <Accordion.Header><span><BiCoinStack/></span>Terms & Policies</Accordion.Header>
                    <Accordion.Body>
                        <NavDropdown.Item>Use Agreement</NavDropdown.Item>
                        <NavDropdown.Item>Privacy Policy</NavDropdown.Item>
                        <NavDropdown.Item>Content Policy</NavDropdown.Item>
                        <NavDropdown.Item>Moderator Code of Conduct</NavDropdown.Item>
                        <hr className={'border-dark my-3'}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <NavDropdown.Item onClick={LoginHandler}>Sign Up or Log In</NavDropdown.Item>
        </Container>
    );
};

export default DropDownRightButton;


//switch buttons
//<span> <SwitchButton bool={true}/></span>