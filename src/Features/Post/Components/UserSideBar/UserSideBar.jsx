import UserSideCard from "../UserSideCard/UserSideCard";
import { Container, InnerContainer } from "./UserSideBar.styled";

const UserSideBar = () => {
  return (
    <Container>
      <InnerContainer>
        <UserSideCard />
      </InnerContainer>
    </Container>
  );
};

export default UserSideBar;
