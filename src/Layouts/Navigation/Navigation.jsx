// import components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NotificationButton from "Components/NotificationButton/NotificationButton";
import Moderator from "Components/ModeratorButton/ModeratorButton"
import ChatButton from "Components/ChatButton/ChatButton";
import PopularButton from "Components/PopularButton/PopularButton";
import SearchBar from "Components/SearchBar/SearchBar";
import DropDownRightButton from "Components/DropDownRight/DropDownRight";
import CreatePostButton from "Components/CreatePostButton/CreatePostButton";
import AdvertiseButton from "Components/AdvertiseButton/AdvertiseButton";
import DropDownLeft from "Components/DropDownButtonLeft/DropDownLeft";
import Badge from "Components/BadgeButton/Badge";
import CoinButton from "Components/CoinButton/CoinButton";
import {StyledSeperator} from 'Layouts/Navbar/Navbar.styled';
import {ContainerNav, NavBarContent, Span} from './Navigation.styled';

const Navigation = ({toggleMode, theme}) => {
    return (
        <NavBarContent expand="lg">
            <ContainerNav>
                <Navbar.Brand>
                    <Badge theme={theme}/>
                </Navbar.Brand>
                <Navbar.Brand className={'drop-caret'}>
                    <DropDownLeft/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link><SearchBar/></Nav.Link>
                        <Nav.Link> <PopularButton/><Span>Popular</Span> </Nav.Link>
                        <Nav.Link> <CoinButton/><Span>Coin</Span> </Nav.Link>
                        <Nav.Link> <StyledSeperator/></Nav.Link>
                        <Nav.Link> <Moderator/><Span>Moderator</Span> </Nav.Link>
                        <Nav.Link> <ChatButton/><Span>Chat</Span></Nav.Link>
                        <Nav.Link> <NotificationButton/><Span>Notification</Span> </Nav.Link>
                        <Nav.Link> <CreatePostButton/><Span>Create Post</Span> </Nav.Link>
                        <Nav.Link> <AdvertiseButton/><Span>Advertise</Span> </Nav.Link>
                        <Nav.Link className={'nav-dropdown'}> <DropDownRightButton toggleMode={toggleMode}/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </ContainerNav>
        </NavBarContent>
    );
}

export default Navigation;