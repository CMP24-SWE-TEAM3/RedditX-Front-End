import CategoryBar from "Features/User/Components/CategoryBar/CategoryBar";
import { Container, PostContainer } from "./Overview.styled";
import UserNoPosts from "Features/User/Components/UserNoPosts/UserNoPosts";
import { useUserID } from "Features/User/Contexts/UserIDProvider.js";
import getOverview from "Features/User/Services/getOverview";
import useFetchFunction from "Hooks/useFetchFunction";
import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import PostShape from "Features/Post/Layouts/PostShape/PostShape";
import UserComment from "Features/User/Components/UserComment/UserComment";
import Post from "Features/Post/Pages/Post/Post";

const Overview = () => {
  const [showPost, setShowPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [pgNum, setPgNum] = useState(1);
  const [p, setP] = useState([]);
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const time = queryParam.get("t");
  const auth = useAuth();
  const { userID } = useUserID();

  const [data, error, isLoading, fetchData] = useFetchFunction();

  useEffect(() => {
    setPgNum(1);
    setP([]);
  }, [time]);

  useEffect(() => {
    getOverview(fetchData, userID, auth, time, pgNum);
  }, [userID, pgNum, time]);

  useEffect(() => {
    console.log("overview ===>", data);
  }, [data]);

  const { overview } = data;

  useEffect(() => {
    overview &&
      setP((prev) => {
        return [...prev, ...overview];
      });
  }, [overview]);

  useEffect(() => {
    console.log("posts", p);
    console.log("pagenum", pgNum);
    console.log("overview data", data);
  }, [p, pgNum]);

  const observer = useRef();
  const lastPostElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        console.log(
          entries[0].isIntersecting,
          "ddd",
          overview && overview.length !== 0
        );
        if (entries[0].isIntersecting && overview.length !== 0 /*&& hasMore*/) {
          setPgNum((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, overview]
  );

  return (
    <Container>
      <CategoryBar />
      <PostContainer>
        <>
          {p &&
            p.length !== 0 &&
            p.map((post, i) => {
              if (p.length === i + 1) {
                if (!post.title) {
                  return (
                    <div ref={lastPostElementRef} key={i}>
                      <UserComment comment={post} overview={true} />
                    </div>
                  );
                } else {
                  return (
                    <div
                      ref={lastPostElementRef}
                      key={i}
                      onClick={() => {
                        setShowPost(true);
                        setSelectedPost(post);
                      }}
                    >
                      <PostShape post={post} />
                    </div>
                  );
                }
              } else {
                if (!post.title) {
                  return (
                    <div key={i}>
                      <UserComment comment={post} overview={true} />
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={i}
                      post={post}
                      onClick={() => {
                        setShowPost(true);
                        setSelectedPost(post);
                      }}
                    >
                      <PostShape post={post}/>
                    </div>
                  );
                }
              }
            })}
          {p && p.length === 0 && !isLoading && (
            <UserNoPosts
              text={
                userID &&
                `hmm... u/${userID.substring(3)} hasn't posted anything`
              }
            />
          )}
          {selectedPost && (
            <Post post={selectedPost} show={showPost} setShow={setShowPost} />
          )}
        </>
      </PostContainer>
    </Container>
  );
};

export default Overview;
