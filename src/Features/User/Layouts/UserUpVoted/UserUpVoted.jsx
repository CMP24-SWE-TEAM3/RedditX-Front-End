import { Container, UpVotedContainer } from "./UserUpVoted.styled";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import getUpVotedPosts from "Features/User/Services/getUpVotedPosts";
import { useEffect, useRef, useState, useCallback } from "react";
import CollapsePost from "Features/Post/Layouts/CollapsePost/CollapsePost";
import { useUserID } from "Features/User/Contexts/UserIDProvider";
import UserNoPosts from "Features/User/Components/UserNoPosts/UserNoPosts";

const UserUpVoted = () => {
  const [pgNum, setPgNum] = useState(1);
  const [p, setP] = useState([]);
  const auth = useAuth();
  const { userID } = useUserID();

  const [data, error, isLoading, fetchData] = useFetchFunction();

  useEffect(() => {
    getUpVotedPosts(fetchData, userID, auth, pgNum);
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
      <UpVotedContainer>
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
            {p && p.length === 0 && !isLoading && <UserNoPosts
                text={`hmm... looks like you haven't upvoted anything yet`}
              />}
          </>
        }
      </UpVotedContainer>
    </Container>
  );
};

export default UserUpVoted;
