import { useEffect, useState, useCallback, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import getPosts from "Services/getPosts";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import PostShape from "Features/Post/Layouts/PostShape/PostShape";
import Post from "Features/Post/Pages/Post/Post";
import CollapsePost from "Features/Post/Layouts/CollapsePost/CollapsePost";
import RecentContext from "Contexts/RecentContext";

// let recentPost = [
//   {
//     id: "1",
//     description: "new news in CUFE",
//     points: "10",
//     comments: "4",
//     hours: "7",
//   },
//   {
//     id: "2",
//     description: "new news in reddit",
//     points: "9",
//     comments: "2",
//     hours: "11",
//   },
//   {
//     id: "3",
//     description: "announcements updated in reddit",
//     points: "5",
//     comments: "7",
//     hours: "1",
//   },
// ];

const ShowPosts = ({ type }) => {
  // states
  const [showPost, setShowPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [pgNum, setPgNum] = useState(1);
  const [posts, setPosts] = useState([]);
  const [recentPost, setrecentPost] = useState([]);
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const time = queryParam.get("t");

  // fetch data
  const [data, error, isLoading, dataFetch] = useFetchFunction();

  useEffect(() => {
    setPgNum(1);
    setPosts([]);
  }, [type, time]);
  const auth = useAuth();
  useEffect(() => {
    getPosts(dataFetch, auth, type, time, pgNum, 10);
  }, [pgNum, time, type]);

  useEffect(() => {
    data.posts &&
      setPosts((prev) => {
        return [...prev, ...data.posts];
      });
  }, [data.posts]);

  const observer = useRef();
  const lastPostElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data.posts.length !== 0) {
          setPgNum((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, data.posts]
  );
  const ctx = useContext(RecentContext);
  // useEffect(() => {
  //   ctx.PostsHandler()
  // }, []);
  useEffect(() => {
    setrecentPost(ctx.Posts);
  }, [ctx.Posts]);
  // TODO: replace dummy data with post data
  // handle recent posts to append and delete from local storage
  const handleRecentPosts = () => {
    localStorage.setItem("RecentPosts", JSON.stringify(recentPost));
  };
  console.log(recentPost);
  const AddPost = (post) => {
    if (post._id !== ctx.Posts[0]._id) {
      ctx.PostsHandler([post, ...ctx.Posts]);
    }
  };
  return (
    <>
      <div>
        {posts &&
          posts.length !== 0 &&
          posts.map((post, index) => {
            if (posts.length === index + 1) {
              return (
                <div
                  key={index}
                  ref={lastPostElementRef}
                  onClick={() => {
                    setShowPost(true);
                    setSelectedPost(post);
                    // ctx.PostsHandler([post, ...ctx.Posts]);
                    AddPost(post);
                    handleRecentPosts();
                  }}
                >
                  <PostShape post={post} />
                  <CollapsePost post={post} />
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setShowPost(true);
                    setSelectedPost(post);
                    // ctx.PostsHandler([post, ...ctx.Posts]);
                    AddPost(post);
                    handleRecentPosts();
                  }}
                >
                  <PostShape post={post} />
                  <CollapsePost post={post} />
                </div>
              );
            }
          })}
      </div>
      {selectedPost && (
        <Post post={selectedPost} show={showPost} setShow={setShowPost} />
      )}
    </>
  );
};

export default ShowPosts;
