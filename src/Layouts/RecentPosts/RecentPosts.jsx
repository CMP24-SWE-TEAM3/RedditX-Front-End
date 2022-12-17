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

/**
 * Component that displays a list of recent posts from homepage
 *
 * @return {React.Component}
 */
const RecentPosts = () => {
  //TODO: using caching recent posts after each clicked on a specific post instead of fetching data from server
  let recentPostList = JSON.parse(localStorage.getItem("RecentPosts"));
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
            {recentPostList.map((recentPost) => {
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
                    <p>{recentPost.description}</p>
                    <Details>
                      <div>
                        <span>{recentPost.points} points</span>
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
