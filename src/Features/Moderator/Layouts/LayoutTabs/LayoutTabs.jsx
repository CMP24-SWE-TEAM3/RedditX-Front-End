// Import bootstrap components
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import ModeratorsPage from "../ModeratorsPage/ModeratorsPage";

// Import icons
import {
  MdOutlineLibraryBooks,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
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
  BackButton,
} from "./LayoutTabs.styled";
import { useState } from "react";
import Rules from "../Rules/Rules";
import FlairPage from "Features/Moderator/Pages/FlairPage/FlairPage";
import ApprovedPage from "../ApprovedPage/ApprovedPage";
import MutedPage from "../MutedPage/MutedPage";
import BannedPage from "../BannedPage/BannedPage";


import RulesTab from "Features/Moderator/Components/RuleTab/RuleTab";

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
  TrafficStates: "traffic-states",
  Community: "Community",
  PostsAndComments: "PostsAndComments",
};
function LayoutTabs({setModalShowInviteModerator, setModalShowApproveUser, setModalShowMuteUser, setModalShowBaneUser}) {
  const [isCommunitySettings, setIsCommunitySettings] = useState(false);
  const { subredditId, moderatorId } = useParams();
  const getPath = (path) => {
    return `/subreddit/${subredditId}/moderator/${path}`;
  };
  return (
    <TabContainer fluid={true}>
      <StyledRow>
        <TabsCol sm="3">
          {isCommunitySettings && (
            <Nav variant="pills" className="flex-column">
              <BackButton
                to={getPath(paths.ModQueue)}
                onClick={() => setIsCommunitySettings(false)}
              >
                <MdKeyboardArrowLeft size={30} />
                <span> Back to mod tools </span>
              </BackButton>
              <Nav.Item>
                <StyledNavLink
                  to={getPath(paths.Community)}
                  selected={moderatorId === paths.Community}
                >
                  Community
                </StyledNavLink>
              </Nav.Item>
              <Nav.Item>
                <StyledNavLink
                  to={getPath(paths.PostsAndComments)}
                  selected={moderatorId === paths.PostsAndComments}
                >
                  Posts and Comments
                </StyledNavLink>
              </Nav.Item>
            </Nav>
          )}
          {!isCommunitySettings && (
            <Nav variant="pills" className="flex-column">
              <CategoryTitle first={true}>
                <MdOutlineLibraryBooks size={22} />
                <span> Queues </span>
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
                  to={getPath(paths.Community)}
                  onClick={() => setIsCommunitySettings(true)}
                >
                  Community settings
                  <MdKeyboardArrowRight size={22} />
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
          )}
        </TabsCol>
        <ContentCol>
          <Tab.Content>
            {moderatorId === paths.ModQueue && <div>Mod-queue</div>}
            {moderatorId === paths.Spam && <div>Spam</div>}
            {moderatorId === paths.Edited && <div>Edited</div>}
            {moderatorId === paths.Unmoderated && <div>Unmoderated</div>}
            {moderatorId === paths.Rules && <Rules />}
            {moderatorId === paths.PostFlair && <FlairPage />}
            {moderatorId === paths.Banned && <div><BannedPage setModalShowBaneUser={setModalShowBaneUser}/></div>}
            {moderatorId === paths.Muted && <div><MutedPage setModalShowMuteUser={setModalShowMuteUser}/></div>}
            {moderatorId === paths.Approved && <div><ApprovedPage setModalShowApproveUser={setModalShowApproveUser}/></div>}
            {moderatorId === paths.Moderators && <ModeratorsPage setModalShowInviteModerator={setModalShowInviteModerator}/>}
            {moderatorId === paths.TrafficStates && <div>TrafficStates</div>}
            {moderatorId === paths.Community && <div>Community</div>}
            {moderatorId === paths.PostsAndComments && (
              <div>PostsAndComments</div>
            )}
          </Tab.Content>
        </ContentCol>
      </StyledRow>
    </TabContainer>
  );
}

export default LayoutTabs;
