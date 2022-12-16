import {
  Container,
  InnerContainer,
  NavItem,
  DotsDropdown,
} from "./UserNav.styled";
import { BsThreeDots } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { useIsMe } from "Features/User/Contexts/IsMeProvider";

const UserNav = () => {
  const location = useLocation();
  const url = location.pathname;
  const urlArr = url.split("/");
  const active = urlArr[3];

  const { isMe } = useIsMe();

  const DropNav = () => {
    return (
      <DotsDropdown>
        <Dropdown.Toggle>
          <span>
            <BsThreeDots />
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={NavLink} to="" end className="overview">
            OVERVIEW
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="submitted" className="posts">
            posts
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="comments" className="comments">
            comments
          </Dropdown.Item>
          {isMe && (
            <>
              <Dropdown.Item as={NavLink} to="history" className="history">
                history
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="saved" className="saved">
                saved
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="hidden" className="hidden">
                hidden
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="upvoted" className="up-vote">
                upvoted
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="downvoted" className="down-vote">
                downvoted
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </DotsDropdown>
    );
  };

  return (
    <Container>
      <InnerContainer where={active}>
        <NavItem to="" end className="overview">
          OVERVIEW
        </NavItem>
        <NavItem to="submitted" className="posts">
          posts
        </NavItem>
        <NavItem to="comments" className="comments">
          comments
        </NavItem>
        {isMe && (
          <>
            <NavItem to="history" className="history">
              history
            </NavItem>
            <NavItem to="saved" className="saved">
              saved
            </NavItem>
            <NavItem to="hidden" className="hidden">
              hidden
            </NavItem>
            <NavItem to="upvoted" className="up-vote">
              upvoted
            </NavItem>
            <NavItem to="downvoted" className="down-vote">
              downvoted
            </NavItem>
          </>
        )}
        <DropNav />
      </InnerContainer>
    </Container>
  );
};

export default UserNav;
