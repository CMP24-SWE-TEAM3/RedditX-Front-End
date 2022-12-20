// Import icons
import { FcReddit } from "react-icons/fc";

// Import react router dom
import { useParams } from "react-router-dom";

// Import styled components
import { Container, StyledLink } from "./LayoutHeader.styled";
const LayoutHeader = () => {
  const { subredditId, moderatorId } = useParams();
  return (
    <Container>
      <FcReddit size={25} />
      <StyledLink to={`/subreddit/t5_${subredditId}`}>R/{subredditId}</StyledLink>
      <span>/ {moderatorId}</span>
    </Container>
  );
};

export default LayoutHeader;
