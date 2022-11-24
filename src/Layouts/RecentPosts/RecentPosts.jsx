import React, { useState, useEffect } from "react";
import { Container } from "./RecentPosts.styled";
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
            <div className="head">
              <div>Recent Posts</div>
            </div>
            {recentPostList.map((recentPost) => {
              return (
                <div className="content" key={recentPost.id}>
                  <div className="cover">
                    <div className={"child-1"}>
                      <Link href={"https://i.redd.it/kfjabyn5tdy91.png"}>
                        <div className={"post-img"}>
                          <img src={imagePost} alt={"recent post img"} />
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="description">
                    <p>{recentPost.description}</p>
                    <div className="details">
                      <div>
                        <span>{recentPost.points} points</span>
                        <span className={"dots"}>
                          {recentPost.comments} comments
                        </span>
                        <span className={"dots"}>{recentPost.hours}h</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            id={"recent-post-button"}
            className={"but"}
            onClick={deleteRecentPosts}
          >
            Clear
          </button>
        </Container>
      )}
    </>
  );
};

export default RecentPosts;
