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
} from "./CommunityCard.styled";

import { BASE_URL } from "API/axios";
/**
 *
 * @returns {React.Component} CreatePost component
 */
const CommunityCard = ({ communityInfo }) => {
  return (
    <Container>
      <BackgroundImage
        crossOrigin="anonymous"
        src={`${BASE_URL}/subreddits/files/${communityInfo.banner}`}
        as={`${communityInfo.banner ? "img" : "div"}`}
      />
      <Content>
        <CommunityDate communityInfo={communityInfo} />
        <Separator />
        <OnlineMembers online={5} members={communityInfo.membersCnt} />
        <Separator />
        <UserFlairPreview flairList={communityInfo.flairList} />
        <CommunityOptions />
      </Content>
    </Container>
  );
};

export default CommunityCard;
