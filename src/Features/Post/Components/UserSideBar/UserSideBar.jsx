import UserSideCard from "../UserSideCard/UserSideCard";
import { Container, InnerContainer } from "./UserSideBar.styled";

const UserSideBar = ({userId}) => {
  return (
    <Container>
      <InnerContainer>
        <UserSideCard userId={userId} />
      </InnerContainer>
    </Container>
  );
};

export default UserSideBar;
