import CommentsPage from "Features/Search/Layouts/CommentsPage/CommentsPage";
import CommunitiesPage from "Features/Search/Layouts/CommunitiesPage/CommunitiesPage";
import PeoplePage from "Features/Search/Layouts/PeoplePage/PeoplePage";
import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
// import Form from "react-bootstrap/Form";
import Links from "../../Components/MainHeader/MainHeader";
import Posts from "../../Layouts/PostsPage/Posts";
import { Container } from "./Search.styled";

const Search = () => {
  return (
    <Container>
      <div className="outer-container">
        <div className="content-container">
          <div className="inner-container">
            <Links />
            <Routes>
              <Route path="/post" element={<Posts />} />
              <Route path="/comments" element={<CommentsPage />} />
              <Route path="/communities" element={<CommunitiesPage />} />
              <Route path="/people" element={<PeoplePage />} />
              <Route path="/" element={<Navigate to={"/post"} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Search;
