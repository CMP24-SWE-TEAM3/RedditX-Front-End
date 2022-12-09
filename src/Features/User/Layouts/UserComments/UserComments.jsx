import CategoryBar from "Features/User/Components/CategoryBar/CategoryBar";
import { Container, CommentContainer } from "./UserComments.styled";
import UserComment from "Features/User/Components/UserComment/UserComment";

const UserComments = () => {
  return (
    <Container>
      <CategoryBar />
      <CommentContainer>
        <UserComment />
      </CommentContainer>
    </Container>
  );
};

export default UserComments;
