import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  HeadContainer,
  Dots,
  Cover,
  CoverChild,
  Description,
  Details,
  ClearBtn,
  ImageContainer,
} from "./RecentPosts.styled";
import imagePost from "Assets/Images/cats.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import RecentContext from "Contexts/RecentContext";

/**
 * Component that displays a list of recent posts from homepage
 *
 * @return {React.Component}
 */
const RecentPosts = () => {
  //TODO: using caching recent posts after each clicked on a specific post instead of fetching data from server
  // let recentPostList = JSON.parse(localStorage.getItem("RecentPosts"));
  const [recentPostList, setrecentPostList] = useState([]);
  const ctx = useContext(RecentContext);
  useEffect(() => {
    setrecentPostList(JSON.parse(localStorage.getItem("RecentPosts")));
  }, [ctx.Posts]);
  useEffect(() => {
    if (recentPostList) setShowRecentPosts(true);
  }, [recentPostList]);

  /**
   * state to handle show and delete of recent posts
   */
  const [showRecentPosts, setShowRecentPosts] = useState(false);

  // function that handles deleted recent posts from local storage
  const deleteRecentPosts = () => {
    localStorage.removeItem("RecentPosts");
    setShowRecentPosts(false);
  };
  return (
    <>
      {showRecentPosts && (
        <Container id={"recent-post-container"}>
          <div>
            <HeadContainer>
              <div>Recent Posts</div>
            </HeadContainer>
            {recentPostList.length !== 0 &&
              recentPostList &&
              recentPostList.slice(0, 3).map((recentPost) => {
                return (
                  <Content key={recentPost.id}>
                    <Cover>
                      <CoverChild>
                        <Link href={"https://i.redd.it/kfjabyn5tdy91.png"}>
                          <ImageContainer>
                            <img src={imagePost} alt="img" />
                          </ImageContainer>
                        </Link>
                      </CoverChild>
                    </Cover>

                    <Description>
                      <p>{recentPost.communityID}</p>
                      <Details>
                        <div>
                          <span>{recentPost.userID._id} points</span>
                          <Dots>{recentPost.comments} comments</Dots>
                          <Dots>{recentPost.hours}h</Dots>
                        </div>
                      </Details>
                    </Description>
                  </Content>
                );
              })}
          </div>
          <ClearBtn id={"recent-post-button"} onClick={deleteRecentPosts}>
            Clear
          </ClearBtn>
        </Container>
      )}
    </>
  );
};

export default RecentPosts;
