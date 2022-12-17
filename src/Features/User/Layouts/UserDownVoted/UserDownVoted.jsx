import { Container, DownVotedContainer } from "./UserDownVoted.styled";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useUserID } from "Features/User/Contexts/UserIDProvider";
import { useEffect, useRef, useState, useCallback } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import getDownVotedPosts from "Features/User/Services/getDownVotedPosts";
import CollapsePost from "Features/Post/Layouts/CollapsePost/CollapsePost";
import UserNoPosts from "Features/User/Components/UserNoPosts/UserNoPosts";

const UserDownVoted = () => {
  const [pgNum, setPgNum] = useState(1);
  const [p, setP] = useState([]);
  const auth = useAuth();
  const { userID } = useUserID();

  const [data, error, isLoading, fetchData] = useFetchFunction();

  useEffect(() => {
    getDownVotedPosts(fetchData, userID, auth, pgNum);
  }, [userID, pgNum]);

  useEffect(() => {
    console.log("data in upvoted posts", data);
  }, [data]);

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
      <DownVotedContainer>
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
                text={`hmm... looks like you haven't downvoted anything yet`}
              />
            )}
          </>
        }
      </DownVotedContainer>
    </Container>
  );
};

export default UserDownVoted;
