import CommunityCard from "../CommunityCard/CommunityCard";
import { Container, InnerContainer } from "./SubRedditSideBar.styled";
const SubRedditSideBar = () => {
  return (
    <Container>
      <InnerContainer>
        <CommunityCard />
      </InnerContainer>
    </Container>
  );
};

export default SubRedditSideBar;
