import CategoryBar from "Features/User/Components/CategoryBar/CategoryBar";
import { Container, CommentContainer } from "./UserComments.styled";
import UserComment from "Features/User/Components/UserComment/UserComment";
import { useLocation } from "react-router-dom";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useUserID } from "Features/User/Contexts/UserIDProvider";
import { useEffect, useState, useRef, useCallback } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import getUserComments from "Features/User/Services/getUserComments";
import UserNoPosts from "Features/User/Components/UserNoPosts/UserNoPosts";

/**
 * comments page
 * 
 * @returns {React.Component}
 */
const UserComments = () => {
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
    getUserComments(fetchData, userID, auth, time, pgNum);
  }, [userID, pgNum, time]);

  useEffect(() => {
    console.log("comments", data);
  }, [data]);

  const { comments } = data;

  useEffect(() => {
    comments &&
      setP((prev) => {
        return [...prev, ...comments];
      });
  }, [comments]);

  useEffect(() => {
    console.log("posts", p);
    console.log("pagenum", pgNum);
    console.log("comments data", data);
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
          comments && comments.length !== 0
        );
        if (entries[0].isIntersecting && comments.length !== 0 /*&& hasMore*/) {
          setPgNum((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, comments]
  );

  return (
    <Container>
      <CategoryBar />
      <CommentContainer>
        {/* <UserComment /> */}

        {
          <>
            {p &&
              p.length !== 0 &&
              p.map((post, i) => {
                if (p.length === i + 1) {
                  return (
                    <div ref={lastPostElementRef} key={i}>
                      <UserComment comment={post} overview={false} />
                    </div>
                  );
                } else {
                  return (
                    <div key={i}>
                      <UserComment comment={post} overview={false} />
                    </div>
                  );
                }
              })}
            {p && p.length === 0 && !isLoading && (
              <UserNoPosts
                text={
                  userID &&
                  `hmm... u/${userID.substring(3)} hasn't commented on anything`
                }
              />
            )}
          </>
        }
      </CommentContainer>
    </Container>
  );
};

export default UserComments;
