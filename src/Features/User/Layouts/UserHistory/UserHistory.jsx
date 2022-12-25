import { Container, HistoryContainer, StyledDiv } from "./UserHistory.styled";
import UserNoPosts from "Features/User/Components/UserNoPosts/UserNoPosts";

/**
 * last seen posts page
 * 
 * @returns {React.Component}
 */
const UserHistory = () => {
  return (
    <Container>
      <HistoryContainer>
        <UserNoPosts
          text={`hmm... looks like you haven't recently viewed anything yet`}
        />
      </HistoryContainer>
    </Container>
  );
};

export default UserHistory;
