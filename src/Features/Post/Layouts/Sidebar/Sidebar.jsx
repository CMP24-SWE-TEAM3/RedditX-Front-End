// Import styled components
import { Container, Footer, CommunityCardContainer } from "./Sidebar.styled";

// Import components
import PostGuidelines from "Features/Post/Components/PostGuidelines/PostGuidelines";
import { RulesWidget, CommunityCard } from "Features/Subreddit";

// Import react router dom components
import { Link } from "react-router-dom";

/**
 * Sidebar component (The sidebar in the create post page)
 *
 * @returns {React.Component} Sidebar component (The sidebar in the create post page)
 */
const Sidebar = () => {
  return (
    <Container>
      <CommunityCardContainer>
        <CommunityCard />
      </CommunityCardContainer>
      <RulesWidget />
      <PostGuidelines />
      <Footer>
        Please be mindful of reddit's <Link to="/">content policy</Link> and
        practice good <Link to="/"> reddiquette</Link>.
      </Footer>
    </Container>
  );
};

export default Sidebar;
