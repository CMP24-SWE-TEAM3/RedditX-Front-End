import CommunityCard from "../CommunityCard/CommunityCard";
import FlairWidget from "../FlairWidget/FlairWidget";
import ModeratorWidget from "../ModeratorWidget/ModeratorWidget";
import RulesWidget from "../RulesWidget/RulesWidget";
import { Container, InnerContainer } from "./SubRedditSideBar.styled";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";

/**
 * sidebar of subreddit
 *
 * @returns {React.Component}
 */
const SubRedditSideBar = () => {
  const { community } = useSubReddit();

  return (
    <Container>
      <InnerContainer>
        <CommunityCard />
        {community &&
          community.communityRules &&
          community.communityRules.length !== 0 && <RulesWidget />}
        {community && community.flairList && community.flairList.length !== 0 && (
          <FlairWidget />
        )}
        <ModeratorWidget />
      </InnerContainer>
    </Container>
  );
};

export default SubRedditSideBar;
