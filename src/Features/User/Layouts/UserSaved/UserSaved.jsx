import { Container, SavedContainer, StyledDiv } from "./UserSaved.styled";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useEffect, useRef, useState, useCallback } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import getSavedPosts from "Features/User/Services/getSavedPosts";
import CollapsePost from "Features/Post/Layouts/CollapsePost/CollapsePost";
import UserNoPosts from "Features/User/Components/UserNoPosts/UserNoPosts";
import Post from "Features/Post/Pages/Post/Post";

/**
 * saved posts page
 * 
 * @returns {React.Component}
 */
const UserSaved = () => {
  const [showPost, setShowPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [pgNum, setPgNum] = useState(1);
  const [p, setP] = useState([]);
  const auth = useAuth();

  const [data, error, isLoading, fetchData] = useFetchFunction();

  useEffect(() => {
    getSavedPosts(fetchData, auth, pgNum);
  }, [pgNum]);

  const { posts } = data;

  useEffect(() => {
    console.log("data in saved posts", data);
  }, [data]);

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
      <SavedContainer>
        {
          <>
            {p &&
              p.length !== 0 &&
              p.map((post, i) => {
                if (p.length === i + 1) {
                  return (
                    <StyledDiv
                      ref={lastPostElementRef}
                      key={i}
                      onClick={() => {
                        setShowPost(true);
                        setSelectedPost(post);
                      }}
                    >
                      {/* {post.title} */}
                      <CollapsePost post={post} />
                    </StyledDiv>
                  );
                } else {
                  return (
                    <StyledDiv
                      key={i}
                      onClick={() => {
                        setShowPost(true);
                        setSelectedPost(post);
                      }}
                    >
                      <CollapsePost post={post} />
                    </StyledDiv>
                  );
                }
              })}
            {p && p.length === 0 && !isLoading && (
              <UserNoPosts
                text={`hmm... looks like you haven't saved anything yet`}
              />
            )}
            {selectedPost && (
              <Post post={selectedPost} show={showPost} setShow={setShowPost} />
            )}
          </>
        }
      </SavedContainer>
    </Container>
  );
};

export default UserSaved;
