import { Container, HiddenContainer, StyledDiv } from "./UserHidden.styled";
import UserNoPosts from "Features/User/Components/UserNoPosts/UserNoPosts";

/**
 * hidden posts page
 *
 * @returns {React.Component}
 */
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
