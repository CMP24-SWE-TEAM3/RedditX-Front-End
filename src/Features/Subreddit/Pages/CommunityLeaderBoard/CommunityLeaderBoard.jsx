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
import useFetchFunction from "Hooks/useFetchFunction";
import { DataContext } from "../../Services/DataContext";
import data from "../../Services/data.json";
import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
/**
 * Component that contains the whole community leaderboard page
 *
 * @Component
 * @returns {React.Component}
 */
function CommunityLeaderBoard() {
  const {categoryType} = useParams();
  
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

  const [category, setCategory] = useState(data);
  const providedData = { category, setCategory };
  return (
    <LeaderBoardContainer>
      <LeaderBoardPage>
        <Header />
        <MainPadding>
        <DataContext.Provider value={providedData}>
          <Categories />
          <DropDown>
            <CategoryDropDown />
          </DropDown>
        </DataContext.Provider>
        <Container com={communitiesList} subscribed={CommunitiesSub} />
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
              <Container com={communitiesList} subscribed={CommunitiesSub} />
              <RightSection />
            </>
            } 
          />
        </Routes>
        </MainPadding>
      </LeaderBoardPage>
    </LeaderBoardContainer>
  );
}

export default CommunityLeaderBoard;
