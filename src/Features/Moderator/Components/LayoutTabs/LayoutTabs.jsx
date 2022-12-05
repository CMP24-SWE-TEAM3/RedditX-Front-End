// Import bootstrap components
import { Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

// Import icons
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { IoMdPaper } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { ImStatsBars } from "react-icons/im";

// Import react router dom
import { useParams } from "react-router-dom";

// Import styled components
import {
  TabContainer,
  StyledNavLink,
  TabsCol,
  ContentCol,
  CategoryTitle,
  StyledRow,
} from "./LayoutTabs.styled";

const paths = {
  ModQueue: "mod-queue",
  Spam: "spam",
  Edited: "edited",
  Unmoderated: "unmoderated",
  Banned: "banned",
  Muted: "muted",
  Approved: "approved",
  Moderators: "moderators",
  PostFlair: "post-flair",
  Rules: "rules",
  CommunitySettings: "community-settings",
  TrafficStates: "traffic-states",
};
function LayoutTabs() {
  const { subredditId, moderatorId } = useParams();
  const getPath = (path) => {
    return `/subreddit/${subredditId}/moderator/${path}`;
  };
  return (
    <TabContainer fluid={true}>
      <StyledRow>
        <TabsCol sm="3">
          <Nav variant="pills" className="flex-column">
            <CategoryTitle first={true}>
              <MdOutlineLibraryBooks size={22} />
              <span> categoryTitle </span>
            </CategoryTitle>
            <Nav.Item>
              <StyledNavLink
                to={getPath(paths.ModQueue)}
                selected={moderatorId === paths.ModQueue}
              >
                Mod queue
              </StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <StyledNavLink
                to={getPath(paths.Spam)}
                selected={moderatorId === paths.Spam}
              >
                Spam
              </StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <StyledNavLink
                to={getPath(paths.Edited)}
                selected={moderatorId === paths.Edited}
              >
                Edited
              </StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <StyledNavLink
                to={getPath(paths.Unmoderated)}
                selected={moderatorId === paths.Unmoderated}
              >
                Unmoderated
              </StyledNavLink>
            </Nav.Item>

            <CategoryTitle>
              <AiOutlineUser size={22} />
              <span> User management</span>
            </CategoryTitle>
            <Nav.Item>
              <StyledNavLink
                to={getPath(paths.Banned)}
                selected={moderatorId === paths.Banned}
              >
                Banned
              </StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <StyledNavLink
                to={getPath(paths.Muted)}
                selected={moderatorId === paths.Muted}
              >
                Muted
              </StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <StyledNavLink
                to={getPath(paths.Approved)}
                selected={moderatorId === paths.Approved}
              >
                Approved
              </StyledNavLink>
            </Nav.Item>
            <Nav.Item>
              <StyledNavLink
                to={getPath(paths.Moderators)}
                selected={moderatorId === paths.Moderators}
              >
                Moderators
              </StyledNavLink>
            </Nav.Item>

            <CategoryTitle>
              <IoPricetagOutline size={22} />
              <span> Flairs & emojis </span>
            </CategoryTitle>
            <Nav.Item>
              <StyledNavLink
                to={getPath(paths.PostFlair)}
                selected={moderatorId === paths.PostFlair}
              >
                Post flair
              </StyledNavLink>
            </Nav.Item>

            <CategoryTitle>
              <IoMdPaper size={22} />
              <span> Rules and regulations </span>
            </CategoryTitle>
            <Nav.Item>
              <StyledNavLink
                to={getPath(paths.Rules)}
                selected={moderatorId === paths.Rules}
              >
                Rules
              </StyledNavLink>
            </Nav.Item>

            <CategoryTitle>
              <FiSettings size={22} />
              <span> Other </span>
            </CategoryTitle>
            <Nav.Item>
              <StyledNavLink
                to={getPath(paths.CommunitySettings)}
                selected={moderatorId === paths.CommunitySettings}
              >
                Community settings
              </StyledNavLink>
            </Nav.Item>

            <CategoryTitle>
              <ImStatsBars size={22} />
              <span> Community activity </span>
            </CategoryTitle>
            <Nav.Item>
              <StyledNavLink
                to={getPath(paths.TrafficStates)}
                selected={moderatorId === paths.TrafficStates}
              >
                Traffic states
              </StyledNavLink>
            </Nav.Item>
          </Nav>
        </TabsCol>
        <ContentCol>
          <Tab.Content>
            {moderatorId === paths.ModQueue && <div>Mod-queue</div>}
            {moderatorId === paths.Spam && <div>Spam-queue</div>}
            {moderatorId === paths.Edited && <div>Edited-queue</div>}
            {moderatorId === paths.Unmoderated && <div>Unmoderated-queue</div>}
            {moderatorId === paths.Banned && <div>Banned-queue</div>}
            {moderatorId === paths.Muted && <div>Muted-queue</div>}
            {moderatorId === paths.Approved && <div>Approved-queue</div>}
            {moderatorId === paths.Moderators && <div>Moderators-queue</div>}
            {moderatorId === paths.PostFlair && <div>PostFlair-queue</div>}
            {moderatorId === paths.Rules && <div>Rules-queue</div>}
            {moderatorId === paths.CommunitySettings && (
              <div>CommunitySettings-queue</div>
            )}
            {moderatorId === paths.TrafficStates && (
              <div>TrafficStates-queue</div>
            )}
          </Tab.Content>
        </ContentCol>
      </StyledRow>
    </TabContainer>
  );
}

export default LayoutTabs;
