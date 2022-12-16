import CategoryBar from "Features/User/Components/CategoryBar/CategoryBar";
import { Container, PostContainer } from "./UserPosts.styled";
import { useLocation } from "react-router";
import getUserPosts from "Features/User/Services/getUserPosts";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useEffect, useState, useRef, useCallback } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import { useUserID } from "Features/User/Contexts/UserIDProvider";
import CollapsePost from "Features/Post/Layouts/CollapsePost/CollapsePost";
import UserNoPosts from "Features/User/Components/UserNoPosts/UserNoPosts";

const UserPosts = () => {
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
    getUserPosts(fetchData, userID, auth, time, pgNum);
  }, [userID, pgNum, time]);

  const { posts } = data;

  useEffect(() => {
    posts &&
      setP((prev) => {
        return [...prev, ...posts];
      });
  }, [posts]);

  useEffect(() => {
    console.log("posts", p);
    console.log("pagenum", pgNum);
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
          posts && posts.length !== 0
        );
        if (entries[0].isIntersecting && posts.length !== 0 /*&& hasMore*/) {
          setPgNum((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, posts]
  );

  return (
    <Container>
      <CategoryBar />
      <PostContainer>
        {
          <>
            {p &&
              p.length !== 0 &&
              p.map((post, i) => {
                if (p.length === i + 1) {
                  return (
                    <div ref={lastPostElementRef} key={i}>
                      {/* {post.title} */}
                      <CollapsePost post={post} />
                    </div>
                  );
                } else {
                  return (
                    <div key={i}>
                      <CollapsePost post={post} />
                    </div>
                  );
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
          </>
        }
      </PostContainer>
    </Container>
  );
};

export default UserPosts;
