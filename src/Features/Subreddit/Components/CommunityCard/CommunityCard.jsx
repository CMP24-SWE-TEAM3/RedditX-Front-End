// import { ReactComponent as CakeIcon } from "Features/Subreddit/Assets/piece-of-cake-2-svgrepo-com.svg";
import AboutCommunity from "../AboutCommunity/AboutCommunity";
import CommunityDate from "../CommunityDate/CommunityDate";
import CommunityOptions from "../CommunityOptions/CommunityOptions";
import CommunityTopics from "../CommunityTopics/CommunityTopics";
import OnlineMembers from "../OnlineMembers/OnlineMembers";
import UserFlairPreview from "../UserFlairPreview/UserFlairPreview";
import { Container, Content, Separator } from "./CommunityCard.styled";
import { useIsModerator } from "Features/Subreddit/Contexts/IsModeratorProvider";
// import { useIsMuted } from "Features/Subreddit/Contexts/IsMutedProvider";
import { useIsBanned } from "Features/Subreddit/Contexts/IsBannedProvider";


/**
 * Community Card 
 * 
 * @returns {React.Component} 
 */
const CommunityCard = () => {

  const {isMod} = useIsModerator();
  // const {isMuted} = useIsMuted();
  const {isBanned} = useIsBanned();


  return (
    <Container>
      <AboutCommunity />
      <Content>
        <CommunityDate />
        <Separator />
        <OnlineMembers />
        {isMod && <CommunityTopics />}
        {!isBanned && <Separator />}
        <UserFlairPreview />
        <CommunityOptions />
      </Content>
    </Container>
  );
};

export default CommunityCard;
