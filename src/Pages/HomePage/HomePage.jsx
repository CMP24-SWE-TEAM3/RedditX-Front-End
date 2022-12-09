// imports
import React, { useState } from "react";
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
import PostShape from "Features/Post/Layouts/PostShape/PostShape";
import Post from "Features/Post/Pages/Post/Post";
import useDocumentTitle from "Hooks/useDocumentTitle";
import { useEffect } from "react";
import getNewPosts from "Services/getNewPosts";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import ChooseDate from "../../Components/ChooseDate/ChooseDate";

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
  // Change document title
  useDocumentTitle("Reddit - Dive into anything");
  const [data, error, isLoading, dataFetch] = useFetchFunction();
  const auth = useAuth();
  useEffect(() => {
    getNewPosts(dataFetch, auth, 1, 10);
  }, []);
  console.log("fetched posts", data);

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
          <Main />
          <Container>
            <ContentPost>
              <CreatePost />
              <PopularPosts />
              <div
                // onClick={() => {
                //   setShowPost(true);
                //   handleRecentPosts();
                // }}
              >
                {!isLoading &&
                  data.posts &&
                  data.posts.map((post) => <PostShape post={post} />)}
              </div>
              <Post show={showPost} setShow={setShowPost} />
            </ContentPost>
            <aside>
              <Sidebar>
                <CommunityCard />

                <CreateCommunity>
                  <CreatePostSideBar />
                </CreateCommunity>
                <RecentPostsContainer>
                  <div>
                    <RecentPosts />
                  </div>
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
