// imports
import React, { useState } from "react";
import {
  Container,
  MainContainer,
  AppContainer,
  AppHeader,
} from "./HomePage.styled";
import CreatePost from "Layouts/CreatePost/CreatePost";
import TopCommunities from "Layouts/CommunityCard/CommunityCard";
import PopularPosts from "Layouts/PopularPosts/PopularPosts";
import CreatePostSideBar from "Layouts/CreatePostSideBar/CreatePostSideBar";
import Footer from "Layouts/Footer/Footer";
import ScrollButton from "Components/ScrollButton/ScrollButton";
import RecentPosts from "Layouts/RecentPosts/RecentPosts";
import PostShape from "Features/Post/Layouts/PostShape/PostShape";
import Post from "Features/Post/Pages/Post/Post";

/**
 * Component that displays a list of layouts such as  posts , navigation , and sidebar.
 *
 * @returns {React.Component} returns an instance of HomePage with a list of layouts created
 */
let recentPost = [
  {
    id: "1",
    description: "new news in CUFE",
    points: "10",
    comments: "4",
    hours: "7",
  },
  {
    id: "2",
    description: "new news in reddit",
    points: "9",
    comments: "2",
    hours: "11",
  },
  {
    id: "3",
    description: "announcements updated in reddit",
    points: "5",
    comments: "7",
    hours: "1",
  },
];

const HomePage = () => {
  const [showPost, setShowPost] = useState(false);
  // TODO: replace dummy data with post data
  // handle recent posts to append and delete from local storage
  const handleRecentPosts = () => {
    localStorage.setItem("RecentPosts", JSON.stringify(recentPost));
  };
  return (
    <AppContainer>
      <AppHeader>
        <MainContainer data-testid="home-page-id">
          <div className="main" />
          <Container>
            <div className={"content-posts"}>
              <CreatePost />
              <PopularPosts />
              <div
                onClick={() => {
                  setShowPost(true);
                  handleRecentPosts();
                }}
              >
                <PostShape />
              </div>
              <Post show={showPost} setShow={setShowPost} />
            </div>
            <aside>
              <div className={"sidebar"}>
                <TopCommunities />

                <div className={"create-community"}>
                  <CreatePostSideBar />
                </div>
                <div className={"recent-posts"}>
                  <div>
                    <RecentPosts />
                  </div>
                </div>
                <footer>
                  <div className={"child-footer"}>
                    <Footer />
                  </div>
                  <div className={"scroll-but"}>
                    <ScrollButton />
                  </div>
                </footer>
              </div>
            </aside>
          </Container>
        </MainContainer>
      </AppHeader>
    </AppContainer>
  );
};

export default HomePage;
