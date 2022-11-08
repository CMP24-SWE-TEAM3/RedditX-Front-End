import CommentsPage from "Features/Search/Layouts/CommentsPage/CommentsPage";
import CommunitiesPage from "Features/Search/Layouts/CommunitiesPage/CommunitiesPage";
import PeoplePage from "Features/Search/Layouts/PeoplePage/PeoplePage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import React from "react";
// import Form from "react-bootstrap/Form";
import Links from "../../Components/MainHeader/MainHeader";
import Posts from "../../Layouts/PostsPage/Posts";
import { Container } from "./Search.styled";
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
  return (
    <Container>
      <div className="outer-container">
        <div className="content-container">
          <div className="inner-container">
            <Links />
            <Outlet />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Search;
