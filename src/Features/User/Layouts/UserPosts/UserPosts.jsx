import CategoryBar from "Features/User/Components/CategoryBar/CategoryBar";
import { Container, PostContainer } from "./UserPosts.styled";

const UserPosts = () => {
  return (
    <Container>
      <CategoryBar />
      <PostContainer></PostContainer>
    </Container>
  );
};

export default UserPosts;