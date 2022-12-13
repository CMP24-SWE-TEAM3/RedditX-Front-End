// Import components
import CommunityDate from "../CommunityDate/CommunityDate";
import CommunityOptions from "../CommunityOptions/CommunityOptions";
import OnlineMembers from "../OnlineMembers/OnlineMembers";
import UserFlairPreview from "../UserFlairPreview/UserFlairPreview";

// Import styled components
import {
  Container,
  Content,
  Separator,
  BackgroundImage,
  Button,
} from "./CommunityCardPost.styled";

import { BASE_URL } from "API/axios";
import { useState } from "react";
/**
 *
 * @returns {React.Component} CommunityCardPost component
 */
const CommunityCardPost = ({ communityInfo }) => {
  const [toggleStatus, setToggleStatus] = useState("Joined");

  const onMouseOver = (e) => {
    e.preventDefault();
    setToggleStatus("Leave");
  };
  const onMouseLeave = (e) => {
    e.preventDefault();
    setToggleStatus("Joined");
  };
  return (
    <Container>
      <BackgroundImage
        crossOrigin="anonymous"
        src={`${BASE_URL}/subreddits/files/${communityInfo.banner}`}
      />
      <Content>
        <CommunityDate communityInfo={communityInfo} />
        <Separator />
        <OnlineMembers online={5} members={communityInfo.membersCnt} />
        <Separator />
        <div>
          <Button but={"1"} onMouseOver={onMouseOver} onMouseOut={onMouseLeave}>
            {toggleStatus}
          </Button>
        </div>
        <CommunityOptions />
      </Content>
    </Container>
  );
};

export default CommunityCardPost;
