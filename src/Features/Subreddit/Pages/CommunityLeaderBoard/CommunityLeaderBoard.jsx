import Container from "../../Layouts/Communities Container/CommunitiesContainer";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import { MainPadding } from "../../Layouts/Communities Container/CommunitiesContainer.styled";
import RightSection from "../../Components/Right Section/RightSection";
import CategoryDropDown from "../../Components/CategoryDropDown/CategoryDropDown";
import {
  LeaderBoardContainer,
  LeaderBoardPage,
  DropDown,
} from "./CommunityLeaderBoard.styled";


/**
 * Component that contains the whole community leaderboard page
 *
 * @Component
 * @returns {React.Component}
 */
function CommunityLeaderBoard() {
  return (
    <LeaderBoardContainer>
      <LeaderBoardPage>
        <Header />
        <MainPadding>
          <Categories />
          <DropDown>
            <CategoryDropDown />
          </DropDown>
          <Container />
          <RightSection />
        </MainPadding>
      </LeaderBoardPage>
    </LeaderBoardContainer>
  );
}

export default CommunityLeaderBoard;
