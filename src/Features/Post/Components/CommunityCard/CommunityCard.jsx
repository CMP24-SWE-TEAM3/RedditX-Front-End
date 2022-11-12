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
  CommunityBanner,
} from "./CommunityCard.styled";

/**
 *
 * @returns {React.Component} CreatePost component
 */
const CommunityCard = () => {
  // Context for selected submit destination
  const { submitDestination, setSubmitDestination } = useSubmitDestination();

  console.log(submitDestination);
  return (
    <Container>
      <CommunityBanner />
      <Content>
        <CommunityDate />
        <Separator />
        <OnlineMembers />
        <Separator />
        <UserFlairPreview />
        <CommunityOptions />
      </Content>
    </Container>
  );
};

export default CommunityCard;
