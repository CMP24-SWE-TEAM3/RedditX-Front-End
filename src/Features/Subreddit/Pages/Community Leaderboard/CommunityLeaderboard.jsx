import Container from "../../Layouts/Communities Container/CommunitiesContainer";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import { MainPadding } from "../../Layouts/Communities Container/CommunitiesContainer.styled";
import RightSection from "../../Components/Right Section/RightSection";
import {LeaderBoardContainer, LeaderBoardPage} from "./CommunityLeaderboard.styled"


/**
 * Component that contains the whole community leaderboard page
 *
 * @Component
 * @returns {React.Component}
 */
function LeaderBoard() {
  return (
    <LeaderBoardContainer>
      <LeaderBoardPage>
        <Header />
        <MainPadding>
          <Categories />
          <Container />
          <RightSection />
        </MainPadding>
      </LeaderBoardPage>
    </LeaderBoardContainer>
  );
}

export default LeaderBoard;
