import { Container, HiddenContainer } from "./UserHidden.styled";
import UserNoPosts from "Features/User/Components/UserNoPosts/UserNoPosts";

const UserHidden = () => {
  return (
    <Container>
      <HiddenContainer>
        <UserNoPosts
          text={`hmm... looks like you haven't saved anything yet`}
        />
      </HiddenContainer>
    </Container>
  );
};

export default UserHidden;
