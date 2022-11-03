import React, {useContext} from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import {BsCoin} from 'react-icons/bs';
import {CiSettings} from 'react-icons/ci';
import {DropdownButtonIconStyled, Container} from "./DropDownRight.styled";
import AuthContext from "Contexts/auth-context";
import {Accordion, NavDropdown} from "react-bootstrap";

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
            <NavDropdown.Item> <span><BsCoin/></span>Coins</NavDropdown.Item>
            <NavDropdown.Item>Talk</NavDropdown.Item>
            <NavDropdown.Item>Premium</NavDropdown.Item>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Recent Communities</Accordion.Header>
                    <Accordion.Body>
                        <NavDropdown.Item>Announcements</NavDropdown.Item>
                        <NavDropdown.Item>Steam on Reddit</NavDropdown.Item>
                        <hr className={'border-dark my-3'}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Explore</Accordion.Header>
                    <Accordion.Body>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Gaming</Accordion.Header>
                                <Accordion.Body>
                                    <NavDropdown.Item>MineCraft</NavDropdown.Item>
                                    <NavDropdown.Item>Pokimane</NavDropdown.Item>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Sports</Accordion.Header>
                                <Accordion.Body>
                                    <NavDropdown.Item>NBA</NavDropdown.Item>
                                    <NavDropdown.Item>NFL</NavDropdown.Item>
                                    <NavDropdown.Item>Item 4B</NavDropdown.Item>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Television</Accordion.Header>
                                <Accordion.Body>
                                    <NavDropdown.Item>Wife Swap</NavDropdown.Item>
                                    <NavDropdown.Item>Sister Wives</NavDropdown.Item>
                                    <hr className={'border-dark my-3'}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Celebrity</Accordion.Header>
                                <Accordion.Body>
                                    <NavDropdown.Item>Doja Cat</NavDropdown.Item>
                                    <NavDropdown.Item>Anya Taylor-Joy</NavDropdown.Item>
                                    <hr className={'border-dark my-3'}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Business,Economics</Accordion.Header>
                                <Accordion.Body>
                                    <NavDropdown.Item>GameStop</NavDropdown.Item>
                                    <NavDropdown.Item>Moderna</NavDropdown.Item>
                                    <hr className={'border-dark my-3'}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <hr className={'border-dark my-3'}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{<span><CiSettings/> Settings</span>}</Accordion.Header>
                    <Accordion.Body>
                        <NavDropdown.Item onClick={props.toggleMode}>Dark Mode</NavDropdown.Item>
                        <hr className={'border-dark my-3'}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <NavDropdown.Item>Advertise on Reddit</NavDropdown.Item>
            <NavDropdown.Item>Help Center</NavDropdown.Item>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>More</Accordion.Header>
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
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Terms & Policies</Accordion.Header>
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
// switch buttons
//  <Form.Check
//         type="switch"
//         id="custom-switch"
//         label="Check this switch"
//       />

