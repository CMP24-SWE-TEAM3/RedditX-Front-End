import CommunityCard from "../CommunityCard/CommunityCard";
import ModeratorWidget from "../ModeratorWidget/ModeratorWidget";
import RulesWidget from "../RulesWidget/RulesWidget";
import { Container, InnerContainer } from "./SubRedditSideBar.styled";
const SubRedditSideBar = () => {
  return (
    <Container>
      <InnerContainer>
        <CommunityCard />
        {true && <RulesWidget />}
        <ModeratorWidget />
      </InnerContainer>
    </Container>
  );
};

export default SubRedditSideBar;
