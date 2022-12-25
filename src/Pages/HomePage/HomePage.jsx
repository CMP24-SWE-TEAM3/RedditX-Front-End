// imports
import React, { useEffect } from "react";
import {
  Container,
  MainContainer,
  AppContainer,
  AppHeader,
  ContentPost,
  Main,
  Sidebar,
  CreateCommunity,
  RecentPostsContainer,
  ChildFooter,
  ScrollBtn,
} from "./HomePage.styled";
import CreatePost from "Layouts/CreatePost/CreatePost";
import CommunityCard from "Layouts/CommunityCard/CommunityCard";
import PopularPosts from "Layouts/PopularPosts/PopularPosts";
import CreatePostSideBar from "Layouts/CreatePostSideBar/CreatePostSideBar";
import Footer from "Layouts/Footer/Footer";
import ScrollButton from "Components/ScrollButton/ScrollButton";
import RecentPosts from "Layouts/RecentPosts/RecentPosts";
import useDocumentTitle from "Hooks/useDocumentTitle";
import { Routes, Route } from "react-router-dom";
import ShowPosts from "Layouts/ShowPosts/ShowPosts";
import { Button } from "react-bootstrap";

/**
 * Component that displays a list of layouts such as  posts , navigation , and sidebar.
 *
 * @returns {React.Component} returns an instance of HomePage with a list of layouts created
 */

const HomePage = () => {
  useDocumentTitle("Reddit: Dive into anything");
  return (
    <AppContainer>
      <AppHeader>
        <MainContainer data-testid="home-page-id">
          <Main />
          <Container>
            <ContentPost>
              <CreatePost />
              <PopularPosts />
              <Routes>
                <Route path="" element={<ShowPosts type="random" />} />
                <Route path="best" element={<ShowPosts type="best" />} />
                <Route path="hot" element={<ShowPosts type="hot" />} />
                <Route path="new" element={<ShowPosts type="new" />} />
                <Route path="top" element={<ShowPosts type="top" />} />
              </Routes>
            </ContentPost>
            <aside>
              <Sidebar>
                <CommunityCard />

                <CreateCommunity>
                  <CreatePostSideBar />
                </CreateCommunity>
                <RecentPostsContainer>
                  <div>{/* <RecentPosts /> */}</div>
                </RecentPostsContainer>
                <footer>
                  <ChildFooter>
                    <Footer />
                  </ChildFooter>
                  <ScrollBtn>
                    <ScrollButton />
                  </ScrollBtn>
                </footer>
              </Sidebar>
            </aside>
          </Container>
        </MainContainer>
      </AppHeader>
    </AppContainer>
  );
};

export default HomePage;
