import CommunityCard from "../CommunityCard/CommunityCard";
import FlairWidget from "../FlairWidget/FlairWidget";
import ModeratorWidget from "../ModeratorWidget/ModeratorWidget";
import RulesWidget from "../RulesWidget/RulesWidget";
import { Container, InnerContainer } from "./SubRedditSideBar.styled";

/**
 * sidebar of subreddit
 * 
 * @returns {React.Component}
 */
const SubRedditSideBar = () => {
  return (
    <Container>
      <InnerContainer>
        <CommunityCard />
        {true && <RulesWidget />}
        <FlairWidget />
        <ModeratorWidget />
      </InnerContainer>
    </Container>
  );
};

export default SubRedditSideBar;
