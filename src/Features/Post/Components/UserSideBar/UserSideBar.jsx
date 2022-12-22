import UserSideCard from "../UserSideCard/UserSideCard";
import { Container, InnerContainer } from "./UserSideBar.styled";

/**
 * The sidebar container for user's information in create post and post pages.
 *
 * @param {String} userId - id of the user
 * @returns {React.Component} UserSideBar component
 */
const UserSideBar = ({ userId }) => {
  return (
    <Container>
      <InnerContainer>
        <UserSideCard userId={userId} />
      </InnerContainer>
    </Container>
  );
};

export default UserSideBar;
