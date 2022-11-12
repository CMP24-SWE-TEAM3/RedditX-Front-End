import Container from "../../Layouts/Communities Container/CommunitiesContainer";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import { MainPadding } from "../../Layouts/Communities Container/CommunitiesContainer.styled";
import RightSection from "../../Layouts/Right Section/RightSection";
import CategoryDropDown from "../../Components/CategoryDropDown/CategoryDropDown";
import {
  LeaderBoardContainer,
  LeaderBoardPage,
  DropDown,
} from "./CommunityLeaderBoard.styled";
import axios from "API/axios";
import useFetch from "Hooks/useFetch";

/**
 * Component that contains the whole community leaderboard page
 *
 * @Component
 * @returns {React.Component}
 */
function CommunityLeaderBoard() {
  let [communitiesList, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/communities--Leaderboard",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });

  let [
    CommunitiesSub,
    errorSubCommunities,
    loadingSubCommunities,
    reloadSubCommunities,
  ] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/Subscribed--Leaderboard",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });

  const useEffect = () => {};

  return (
    <LeaderBoardContainer>
      <LeaderBoardPage>
        <Header />
        <MainPadding>
          <Categories />
          <DropDown>
            <CategoryDropDown />
          </DropDown>
          <Container com={communitiesList} subscribed={CommunitiesSub} />
          <RightSection />
        </MainPadding>
      </LeaderBoardPage>
    </LeaderBoardContainer>
  );
}

export default CommunityLeaderBoard;
