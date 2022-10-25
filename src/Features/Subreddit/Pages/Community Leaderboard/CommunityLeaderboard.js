import "../Community Leaderboard/CommunityLeaderboard.css";
import Container from "../../Layouts/Communities Container/CommunitiesContainer";
import Header from "../../Components/Header/Header";
import { MainPadding } from "../../Layouts/Communities Container/CommunitiesContainerStyle";

function LeaderBoard() {
  return (
    <div className="LeaderBoard">
      <div className="page">
        <Header />
        <MainPadding>
          <Container />
        </MainPadding>
      </div>
    </div>
  );
}

export default LeaderBoard;
