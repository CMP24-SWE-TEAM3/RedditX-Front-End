// Import hooks
import { useState } from "react";

// Import bootstrap components
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

// Import icons
import { ImFileText } from "react-icons/im";
import { CgImage } from "react-icons/cg";
import { BsLink45Deg } from "react-icons/bs";

// Import styled components
import {
  NavLink,
  NavItem,
  Editor,
  Column,
  NavContainer,
} from "./PostDraftEditor.styled.js";

// Import layouts
import LinkTab from "../LinkTab/LinkTab.jsx";

const PostDraftEditor = () => {
  // State to store the selected tab
  const [selected, setSelected] = useState("post");

  console.log(selected);
  return (
    <Editor>
      <Tab.Container defaultActiveKey="Post">
        <Row className="w-100 m-0">
          <Column sm={12}>
            <NavContainer
              variant="tabs"
              className="flex-row flex-nowrap justify-content-center text-center"
            >
              <NavItem
                className="flex-fill"
                onClick={() => setSelected("Post")}
              >
                <NavLink eventKey="Post" selected={selected === "Post"}>
                  <ImFileText size={25} /> Post
                </NavLink>
              </NavItem>
              <NavItem
                className="flex-fill"
                onClick={() => setSelected("Images & Videos")}
              >
                <NavLink
                  eventKey="Images & Videos"
                  selected={selected === "Images & Videos"}
                >
                  <CgImage size={30} /> Images & Videos
                </NavLink>
              </NavItem>
              <NavItem
                className="flex-fill"
                onClick={() => setSelected("Link")}
              >
                <NavLink eventKey="Link" selected={selected === "Link"}>
                  <BsLink45Deg size={30} /> Link
                </NavLink>
              </NavItem>
            </NavContainer>
          </Column>
          <Column sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="Post">
                <h1>Tab 1</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="Images & Videos">
                <h1>Tab 2</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="Link">
                <LinkTab />
              </Tab.Pane>
            </Tab.Content>
          </Column>
        </Row>
      </Tab.Container>
    </Editor>
  );
};

export default PostDraftEditor;
