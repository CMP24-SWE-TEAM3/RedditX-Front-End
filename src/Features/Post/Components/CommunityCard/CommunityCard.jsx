// Import components
import CommunityDate from "../CommunityDate/CommunityDate";
import CommunityOptions from "../CommunityOptions/CommunityOptions";
import OnlineMembers from "../OnlineMembers/OnlineMembers";
import UserFlairPreview from "../UserFlairPreview/UserFlairPreview";

// Import contexts
import { useSubmitDestination } from "Features/Post/Contexts/submitDestination";

// Import styled components
import {
  Container,
  Content,
  Separator,
  BackgroundImage,
} from "./CommunityCard.styled";

import egyptImg from "Features/Post/Assets/Images/Backgorund-post.png";
import { BASE_URL } from "API/axios";
/**
 *
 * @returns {React.Component} CreatePost component
 */
const CommunityCard = ({ communityInfo }) => {
  // Context for selected submit destination
  const { submitDestination, setSubmitDestination } = useSubmitDestination();

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
        <UserFlairPreview flairList={communityInfo.flairList} />
        <CommunityOptions />
      </Content>
    </Container>
  );
};

export default CommunityCard;
