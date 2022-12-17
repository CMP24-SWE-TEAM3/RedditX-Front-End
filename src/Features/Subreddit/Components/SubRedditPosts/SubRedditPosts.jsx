import { useEffect, useState, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import getSubredditHotPosts from "Features/Subreddit/Services/getSubredditHotPosts";
import SubRedditNoPosts from "Features/Subreddit/Components/SubRedditNoPosts/SubRedditNoPosts";
import PostShape from "Features/Post/Layouts/PostShape/PostShape";

const SubRedditPosts = ({ type }) => {
  const [pgNum, setPgNum] = useState(1);   //Page Number
  const [p, setP] = useState([]);          //Posts
  const location = useLocation();     
  const queryParam = new URLSearchParams(location.search);
  const time = queryParam.get("t");
  const auth = useAuth();
  const { communityID } = useSubRedditID();

  const [data, error, isLoading, fetchData] = useFetchFunction();

  useEffect(() => {
    communityID &&
      getSubredditHotPosts(fetchData, communityID, auth, type, time, pgNum);
  }, [communityID]);

  const { posts } = data;

  useEffect(() => {
    posts &&
      setP((prev) => {
        return [...prev, ...posts];
      });
  }, [posts]);

  // useEffect(() => {
  //   console.log(p);
  //   console.log(pgNum)
  // }, [p,pgNum]);

  const observer = useRef();
  const lastPostElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && posts.length !== 0 /*&& hasMore*/) {
          setPgNum((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, posts]
  );

  return (
    <>
      {p &&
        p.length !== 0 &&
        p.map((post, i) => {
          if (p.length === i + 1) {
            return (
              <div ref={lastPostElementRef} key={i}>
                {/* {post.title} */}
                <PostShape post={post} />
              </div>
            );
          } else {
            return (
              <div key={i}>
                <PostShape post={post} />
              </div>
            );
          }
        })}
      {p && p.length === 0 && !isLoading && <SubRedditNoPosts />}
    </>
  );
};

export default SubRedditPosts;
