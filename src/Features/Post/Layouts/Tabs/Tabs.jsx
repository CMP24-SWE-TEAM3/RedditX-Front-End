// Import hooks
import { useState } from "react";

// Import bootstrap components
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
  StyledTabs,
  Column,
  NavContainer,
} from "./Tabs.styled.js";

// Import layouts
import LinkTab from "Features/Post/Layouts/LinkTab/LinkTab";
import ImagesAndVideosTab from "Features/Post/Layouts/ImagesAndVideosTab/ImagesAndVideosTab";
import DraftEditorTab from "../DraftEditorTab/DraftEditorTab.jsx";

/**
 * The tabs in the main section in create post page
 * @param {Function} submitPost - Function to submit the post
 * @returns {React.Component} Tabs component (The tabs in the create post page)
 */
const Tabs = ({ submitPost }) => {
  // State to store the selected tab
  const [selected, setSelected] = useState("post");

  return (
    <StyledTabs>
      <Tab.Container defaultActiveKey="Post">
        <Row className="w-100 m-0">
          <Column sm={12}>
            <NavContainer
              variant="tabs"
              className="flex-row flex-nowrap justify-content-center text-center"
            >
              <NavItem
                id="post-tab"
                data-testid="post-tab-btn"
                className="flex-fill"
                onClick={() => setSelected("Post")}
              >
                <NavLink eventKey="Post" selected={selected === "Post"}>
                  <ImFileText size={25} /> <span> Post </span>
                </NavLink>
              </NavItem>
              <NavItem
                className="flex-fill"
                id="image-tab"
                data-testid="image-tab-btn"
                onClick={() => setSelected("Images & Video")}
              >
                <NavLink
                  eventKey="Images & Video"
                  selected={selected === "Images & Video"}
                >
                  <CgImage size={30} /> <span> Images & Video </span>
                </NavLink>
              </NavItem>
              <NavItem
                id="link-tab"
                className="flex-fill"
                data-testid="link-tab-btn"
                onClick={() => setSelected("Link")}
              >
                <NavLink eventKey="Link" selected={selected === "Link"}>
                  <BsLink45Deg size={30} />
                  <span> Link </span>
                </NavLink>
              </NavItem>
            </NavContainer>
          </Column>
          <Column sm={12}>
            <Tab.Content>
              <Tab.Pane data-testid="post-tab" eventKey="Post">
                <DraftEditorTab submitPost={submitPost} />
              </Tab.Pane>
              <Tab.Pane data-testid="image-tab" eventKey="Images & Video">
                <ImagesAndVideosTab submitPost={submitPost} />
              </Tab.Pane>
              <Tab.Pane data-testid="link-tab" eventKey="Link">
                <LinkTab submitPost={submitPost} />
              </Tab.Pane>
            </Tab.Content>
          </Column>
        </Row>
      </Tab.Container>
    </StyledTabs>
  );
};

export default Tabs;
