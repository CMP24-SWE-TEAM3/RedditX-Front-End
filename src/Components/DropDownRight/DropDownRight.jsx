// imports
import { BsXDiamond } from "react-icons/bs";
import { CiCircleQuestion, CiLogin, CiSettings } from "react-icons/ci";
import { DropdownButtonIconStyled, Container } from "./DropDownRight.styled";
import { Accordion, NavDropdown } from "react-bootstrap";
import { BiCoinStack } from "react-icons/bi";
import SwitchButton from "Components/SwitchButton/SwitchButton";
import { SiCircle } from "react-icons/si";
import { RiMarkPenLine } from "react-icons/ri";
import { CgDanger } from "react-icons/cg";
import { VscListOrdered } from "react-icons/vsc";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GiSixEyes } from "react-icons/gi";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useNavigate } from "react-router-dom";
/**
 * Component that  shows all stuff and options to user.
 *
 * @returns {React.Component}
 */
const DropDownRightButton = ({ toggleMode }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const LoginHandler = () => {
    auth.logout();
    navigate("/login");
  };
  return (
    <Container
      id={"right-drop-down"}
      autoClose="outside"
      title={<DropdownButtonIconStyled />}
    >
      <NavDropdown.Item as={"title"} disabled={"disabled"}>
        <i className={"ico"}>
          <CgProfile />
        </i>
        <span className={"stuff"}>My Stuff</span>
      </NavDropdown.Item>
      <div className={"first-sec"}>
        <NavDropdown.Item>
          <span>Online Status</span>
          <span className={"switch-but"}>
            {" "}
            <SwitchButton />
          </span>
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
      <NavDropdown.Divider />

      <NavDropdown.Item as={"title"} disabled={"disabled"}>
        <i className={"ico"}>
          <GiSixEyes />
        </i>
        <span className={"stuff"}>View Options</span>
      </NavDropdown.Item>
      <div className={"first-sec"}>
        <NavDropdown.Item>
          <span>Mod Mode</span>
          <span className={"switch-but"}>
            {" "}
            <SwitchButton />
          </span>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <span>Dark Mode</span>
          <span className={"switch-but"}>
            {" "}
            <SwitchButton id={"dark-mode-button"} toggle={toggleMode} />
          </span>
        </NavDropdown.Item>
      </div>
      <NavDropdown.Divider />
      <NavDropdown.Item>
        <span className={"ico"}>
          <MdDoNotDisturbAlt />
        </span>
        <span>Create Community</span>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <span className={"ico"}>
          <HiOutlineSpeakerphone />
        </span>
        <span>Advertise on Reddit</span>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <span className={"ico"}>
          <BiCoinStack />
        </span>
        <span>Coins</span>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <span className={"ico"}>
          <SiCircle />
        </span>
        <span>Talk</span>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <span className={"ico"}>
          <BsXDiamond />
        </span>
        <span>Premium</span>
      </NavDropdown.Item>

      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className={"ico"}>
              <AiOutlineClockCircle />
            </span>
            <span> Recent Communities</span>
          </Accordion.Header>

          <Accordion.Body>
            <NavDropdown.Item>Announcements</NavDropdown.Item>
            <NavDropdown.Item>Steam on Reddit</NavDropdown.Item>
            <hr className={"border-dark my-3"} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className={"ico"}>
              <RiMarkPenLine />
            </span>
            <span>Explore</span>
          </Accordion.Header>
          <Accordion.Body>
            <Accordion defaultActiveKey="1">
              <Accordion.Header>Gaming</Accordion.Header>
              <Accordion.Body className={"child"}>
                <NavDropdown.Item>MineCraft</NavDropdown.Item>
                <NavDropdown.Item>Pokimane</NavDropdown.Item>
                <hr className={"border-dark my-3"} />
              </Accordion.Body>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Header>Sports</Accordion.Header>
              <Accordion.Body className={"child"}>
                <NavDropdown.Item>NBA</NavDropdown.Item>
                <NavDropdown.Item>NFL</NavDropdown.Item>
                <NavDropdown.Item>Item 4B</NavDropdown.Item>
                <hr className={"border-dark my-3"} />
              </Accordion.Body>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Header>Television</Accordion.Header>
              <Accordion.Body className={"child"}>
                <NavDropdown.Item>Wife Swap</NavDropdown.Item>
                <NavDropdown.Item>Sister Wives</NavDropdown.Item>
                <hr className={"border-dark my-3"} />
              </Accordion.Body>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Header>Celebrity</Accordion.Header>
              <Accordion.Body className={"child"}>
                <NavDropdown.Item>Doja Cat</NavDropdown.Item>
                <NavDropdown.Item>Anya Taylor-Joy</NavDropdown.Item>
                <hr className={"border-dark my-3"} />
              </Accordion.Body>
            </Accordion>
            <hr className={"border-dark my-3"} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <span className={"ico"}>
              <CiSettings />
            </span>
            <span> Settings</span>
          </Accordion.Header>
          <Accordion.Body>
            <NavDropdown.Item onClick={toggleMode}>Dark Mode</NavDropdown.Item>
            <hr className={"border-dark my-3"} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <NavDropdown.Item>
        <span className={"ico"}>
          <HiOutlineSpeakerphone />
        </span>
        <span>Advertise on Reddit</span>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <span className={"ico"}>
          <CiCircleQuestion />
        </span>
        <span>Help Center</span>
      </NavDropdown.Item>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <span className={"ico"}>
              <CgDanger />
            </span>
            <span>More</span>
          </Accordion.Header>
          <Accordion.Body>
            <NavDropdown.Item>Dark Mode</NavDropdown.Item>
            <NavDropdown.Item>Reddit IOS</NavDropdown.Item>
            <NavDropdown.Item>Reddit Android</NavDropdown.Item>
            <NavDropdown.Item>Rereddit</NavDropdown.Item>
            <hr className={"border-dark my-3"} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <span className={"ico"}>
              <VscListOrdered />
            </span>
            <span>Terms & Policies</span>
          </Accordion.Header>
          <Accordion.Body>
            <NavDropdown.Item>Use Agreement</NavDropdown.Item>
            <NavDropdown.Item>Privacy Policy</NavDropdown.Item>
            <NavDropdown.Item>Content Policy</NavDropdown.Item>
            <NavDropdown.Item>Moderator Code of Conduct</NavDropdown.Item>
            <hr className={"border-dark my-3"} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <NavDropdown.Item onClick={LoginHandler}>
        <span className={"ico"}>
          <CiLogin />
        </span>
        {!auth.isLoggedIn() && <span>Sign Up or Log In</span>}
        {auth.isLoggedIn() && <span>Log out</span>}
      </NavDropdown.Item>
      <NavDropdown.Item className={"footer"} disabled={"disabled"}>
        © 2022 Reddit, Inc. All rights reserved
      </NavDropdown.Item>
    </Container>
  );
};

export default DropDownRightButton;
