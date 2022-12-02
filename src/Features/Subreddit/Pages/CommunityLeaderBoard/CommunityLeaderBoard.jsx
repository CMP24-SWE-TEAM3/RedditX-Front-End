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
import useFetchFunction from "Hooks/useFetchFunction";
import fetchSubbedCommunities from "Features/Subreddit/Services/fetchSubbedCommunities";
import { DataContext } from "../../Services/DataContext";
import data from "../../Services/data.json";
import { useEffect, useState } from "react";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { Route, Routes, useParams } from "react-router-dom";
/**
 * Component that contains the whole community leaderboard page
 *
 * @Component
 * @returns {React.Component}
 */
const CommunityLeaderBoard = () => {
  const [CommunitiesSub, errorSubCommunities, loadingSubCommunities, fetchSubCommunities ] = useFetchFunction();

  const {categoryType} = useParams();
  const auth = useAuth();
  
  useEffect(() => {
    fetchSubbedCommunities(fetchSubCommunities, auth);
  }, []); // Only re-run the effect if count changes



  const [category, setCategory] = useState(data);
  const providedData = { category, setCategory };
  return (
    <LeaderBoardContainer>
      {!loadingSubCommunities &&
        <LeaderBoardPage>
        <Header />
        <MainPadding>
        <DataContext.Provider value={providedData}>
          <Categories />
          <DropDown>
            <CategoryDropDown />
          </DropDown>
        </DataContext.Provider>
        <Container  subscribed={CommunitiesSub} />
        <RightSection />
        <Routes>

          <Route
           path="/category/:categoryType"
           element={
            <>
              <DataContext.Provider value={providedData}>
                <Categories />
                <DropDown>
                  <CategoryDropDown />
                </DropDown>
              </DataContext.Provider>
              <Container  subscribed={CommunitiesSub} />
              <RightSection />
            </>
            } 
          />
        </Routes>
        </MainPadding>
      </LeaderBoardPage>
      }
    </LeaderBoardContainer>
  );
}

export default CommunityLeaderBoard;
