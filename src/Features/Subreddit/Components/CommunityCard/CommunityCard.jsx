// import { ReactComponent as CakeIcon } from "Features/Subreddit/Assets/piece-of-cake-2-svgrepo-com.svg";
import AboutCommunity from "../AboutCommunity/AboutCommunity";
import CommunityDate from "../CommunityDate/CommunityDate";
import CommunityOptions from "../CommunityOptions/CommunityOptions";
import CommunityTopics from "../CommunityTopics/CommunityTopics";
import OnlineMember from "../OnlineMembers/OnlineMembers";
import UserFlairPreview from "../UserFlairPreview/UserFlairPreview";
import { Container, Content, Separator } from "./CommunityCard.styled";

const CommunityCard = () => {
  return (
    <Container>
      <AboutCommunity />
      <Content>
        <CommunityDate />
        <Separator />
        <OnlineMember />
        {true && <CommunityTopics />}
        <Separator />
        <UserFlairPreview />
        <CommunityOptions />
      </Content>
    </Container>
  );
};

export default CommunityCard;
