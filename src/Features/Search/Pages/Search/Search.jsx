import CommentsPage from "Features/Search/Layouts/CommentsPage/CommentsPage";
import CommunitiesPage from "Features/Search/Layouts/CommunitiesPage/CommunitiesPage";
import PeoplePage from "Features/Search/Layouts/PeoplePage/PeoplePage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import React from "react";
// import Form from "react-bootstrap/Form";
import Links from "../../Components/MainHeader/MainHeader";
import Posts from "../../Layouts/PostsPage/Posts";
import { Container } from "./Search.styled";
import { useState } from "react";
import useFetch from "Hooks/useFetch";
import axios from "API/axios";
/**
 * Component that contains the Search Page and the Main Links component and routes for the four pages Posts page, Comments page, Community page and People page.
 *
 * @Component
 * @returns {React.Component}
 */
const Search = () => {
  // /**
  //  * Function take the SortItem And Handle it
  //  * @param {String} SortItem
  //  */
  // function OnSort(SortItem) {
  //   console.log(SortItem);
  // }
  const [ActiveLink, setActiveLink] = useState("posts");

  // Fetch Posts
  let [PostList, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/posts",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  // Fetch Posts

  // fetch Communities
  let [CommunityList, errorCommunity, loadingCommunity, reloadCommunity] =
    useFetch({
      axiosInstance: axios,
      method: "GET",
      url: "http://localhost:8000/communityList",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
        },
      },
    });
  // fetch Communities

  // fetch Comments
  let [CommentLists, errorComment, loadingComment, reloadComment] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/CommentList",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  // fetch Comments

  // fetch People
  let [PeopleList, errorPeople, loadingPeople, reloadPeople] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/PeopleList",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  // fetch People

  // fetch people follow
  let [PeopleFollow, errorSub, loadingSub, reloadSub] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/PeopleFollow",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  // fetch people follow

  // fetch communities subscribe

  let [
    CommunitiesSub2,
    errorSubCommunities,
    loadingSubCommunities,
    reloadSubCommunities,
  ] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/CommunitiesSub2",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });

  // fetch communities subscribe

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
                  PeopleList && (
                    <Posts
                      PostList={PostList}
                      CommunityList={CommunityList}
                      PeopleList={PeopleList}
                      PeopleFollow={PeopleFollow}
                      CommunitiesSub2={CommunitiesSub2}
                    />
                  )
                }
              />
              <Route
                path="comments"
                element={
                  CommentLists && <CommentsPage CommentLists={CommentLists} />
                }
              />
              <Route
                path="communities"
                element={
                  CommunitiesSub2 &&
                  CommunityList && (
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
                  PeopleList && (
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
