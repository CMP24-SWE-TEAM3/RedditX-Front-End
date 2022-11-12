// Import styled components
import { Container, Footer, CommunityCardContainer } from "./Sidebar.styled";

// Import components
import PostGuidelines from "Features/Post/Components/PostGuidelines/PostGuidelines";

// Import react router dom components
import { Link } from "react-router-dom";
import RulesWidget from "Features/Post/Components/RulesWidget/RulesWidget";
import CommunityCard from "Features/Post/Components/CommunityCard/CommunityCard";
import { useSubmitDestination } from "Features/Post/Contexts/submitDestination";

/**
 * Sidebar component (The sidebar in the create post page)
 *
 * @returns {React.Component} Sidebar component (The sidebar in the create post page)
 */
const Sidebar = () => {
  const { submitDestination, setSubmitDestination } = useSubmitDestination();
  return (
    <Container>
      {submitDestination && (
        <>
          <CommunityCard />
          <RulesWidget />
        </>
      )}
      <PostGuidelines />

      <Footer>
        Please be mindful of reddit's <Link to="/">content policy</Link> and
        practice good <Link to="/"> reddiquette</Link>.
      </Footer>
    </Container>
  );
};

export default Sidebar;
