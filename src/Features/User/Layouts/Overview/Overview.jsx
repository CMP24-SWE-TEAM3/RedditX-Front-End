import CategoryBar from "Features/User/Components/CategoryBar/CategoryBar";
import UserComment from "Features/User/Components/UserComment/UserComment";
import { Container, PostContainer } from "./Overview.styled";

const Overview = () => {
  return (
    <Container>
      <CategoryBar />
      <PostContainer>
        <UserComment />
      </PostContainer>
    </Container>
  );
};

export default Overview;
