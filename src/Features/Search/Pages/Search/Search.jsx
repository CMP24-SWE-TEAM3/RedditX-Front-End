import CommentsPage from "Features/Search/Layouts/CommentsPage/CommentsPage";
import CommunitiesPage from "Features/Search/Layouts/CommunitiesPage/CommunitiesPage";
import PeoplePage from "Features/Search/Layouts/PeoplePage/PeoplePage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import React from "react";
// import Form from "react-bootstrap/Form";
import Links from "../../Components/MainHeader/MainHeader";
import Posts from "../../Layouts/PostsPage/Posts";
import { Container } from "./Search.styled";
import { useState, useEffect } from "react";
import useFetch from "Hooks/useFetch";
import axios from "API/axios";
import useFetchFunction from "Hooks/useFetchFunction";
import fetchPosts from "Features/Search/Services/fetchPosts";
import fetchComments from "Features/Search/Services/fetchComments";
import fetchCommunities from "Features/Search/Services/fetchCommunities";
import fetchPeople from "Features/Search/Services/fetchPeople";
import fetchSubbcomm from "Features/Search/Services/fetchSubbcomm";
import fetchPeopleFollowed from "Features/Search/Services/fetchPeopleFollowed";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
/**
 * Component that contains the Search Page and the Main Links component and routes for the four pages Posts page, Comments page, Community page and People page.
 *
 * @Component
 * @returns {React.Component}
 */
const Search = () => {
  /**
   * Function take the SortItem And Handle it
   * @param {String} SortItem
   */
  function OnSort(SortItem) {
    console.log(SortItem);
  }
  const auth = useAuth();
  const [ActiveLink, setActiveLink] = useState("posts");
  // Fetch Posts
  const [PostList, error, loading, fetch] = useFetchFunction();
  // useEffect(() => {
  //   fetchPosts(fetch);
  // }, []); // Only re-run the effect if count changes
  // Fetch Posts

  // fetch Communities
  let [CommunityList, errorCommunity, loadingCommunity, fetchCommunity] =
    useFetchFunction();
  // console.log(CommunityList);
  // console.log(errorCommunity);
  // fetch Communities

  // fetch Comments
  let [CommentLists, errorComment, loadingComment, fetchComment] =
    useFetchFunction();
  // fetch Comments

  // fetch People
  let [PeopleList, errorPeople, loadingPeople, FB] = useFetchFunction();
  // fetch People

  // fetch people follow
  let [PeopleFollow, errorSub, loadingSub, fetchSub] = useFetchFunction();
  // fetch people follow

  // fetch communities subscribe

  let [
    CommunitiesSub2,
    errorSubCommunities,
    loadingSubCommunities,
    reloadSubCommunities,
  ] = useFetchFunction();
  // console.log(CommunitiesSub2);
  // console.log(errorSubCommunities);
  // fetch communities subscribe

  useEffect(() => {
    fetchPosts(fetch, auth);
    fetchComments(fetchComment, auth);
    fetchCommunities(fetchCommunity, auth);
    fetchPeople(FB, auth);
    fetchSubbcomm(reloadSubCommunities, auth);
    fetchPeopleFollowed(fetchSub);
  }, []); // Only re-run the effect if count changes
  return (
    <Container>
      <div className="outer-container">
        <div className="content-container">
          <div className="inner-container">
            <Links ActiveLink={ActiveLink} setActiveLink={setActiveLink} />
            <Routes>
              <Route
                path="posts"
                element={
                  PostList &&
                  PeopleFollow &&
                  CommunitiesSub2 &&
                  CommunityList &&
                  PeopleList &&
                  !loading &&
                  !loadingCommunity &&
                  !loadingSubCommunities &&
                  !loadingSub &&
                  !loadingPeople && (
                    <Posts
                      PostList={PostList}
                      CommunityList={CommunityList}
                      PeopleList={PeopleList}
                      PeopleFollow={PeopleFollow}
                      CommunitiesSub2={CommunitiesSub2}
                      OnSort={OnSort}
                    />
                  )
                }
              />
              <Route
                path="comments"
                element={
                  CommentLists &&
                  !loadingComment && (
                    <CommentsPage CommentLists={CommentLists} />
                  )
                }
              />
              <Route
                path="communities"
                element={
                  CommunitiesSub2 &&
                  CommunityList &&
                  !loadingCommunity &&
                  !loadingSubCommunities && (
                    <CommunitiesPage
                      CommunityList={CommunityList}
                      CommunitiesSub2={CommunitiesSub2}
                    />
                  )
                }
              />
              <Route
                path="people"
                element={
                  PeopleFollow &&
                  PeopleList &&
                  !loadingSub &&
                  !loadingPeople && (
                    <PeoplePage
                      PeopleList={PeopleList}
                      PeopleFollow={PeopleFollow}
                    />
                  )
                }
              />
              <Route
                path="/search"
                element={<Navigate to={"/search/posts"} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Search;
