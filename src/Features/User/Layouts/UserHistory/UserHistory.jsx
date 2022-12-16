import { Container, HistoryContainer } from "./UserHistory.styled";
import UserNoPosts from "Features/User/Components/UserNoPosts/UserNoPosts";

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
