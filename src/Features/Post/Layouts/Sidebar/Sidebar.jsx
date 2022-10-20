// Import styled components
import { Container, Footer } from "./Sidebar.styled";

// Import components
import PostGuidelines from "Features/Post/Components/PostGuidelines/PostGuidelines";

// Import react router dom components
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Container>
      <PostGuidelines />
      <Footer>
        Please be mindful of reddit's <Link to="/">content policy</Link> and
        practice good <Link to="/"> reddiquette</Link>.
      </Footer>
    </Container>
  );
};

export default Sidebar;
