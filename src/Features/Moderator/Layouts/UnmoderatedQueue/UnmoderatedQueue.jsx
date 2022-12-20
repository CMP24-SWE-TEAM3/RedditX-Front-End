import QueueHeader from "Features/Moderator/Components/QueueHeader/QueueHeader";
import QueuesControls from "Features/Moderator/Components/QueuesControls/QueuesControls";
import { Container } from "./UnmoderatedQueue.styled";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import { useEffect, useState } from "react";
import getNewPosts from "Services/getNewPosts";
import Post from "Features/Post/Pages/Post/Post";
import SpamPost from "Features/Post/Layouts/SpamPost/SpamPost";
import getSubredditHotPosts from "Features/Subreddit/Services/getSubredditHotPosts";
import { useParams } from "react-router-dom";
import PageNumber from "Features/Moderator/Components/PageNumber/PageNumber";

const UnmoderatedQueue = () => {
  const [data, error, isLoading, dataFetch] = useFetchFunction();
  const auth = useAuth();
  const [showPost, setShowPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const { subredditId } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    //  fetchData,
    // comm, auth, type, time, pgNum;
    getSubredditHotPosts(
      dataFetch,
      "t5_" + subredditId,
      auth,
      "new",
      undefined,
      pageNumber
    );
  }, []);
  console.log(data);
  const handleNext = () => {
    getSubredditHotPosts(
      dataFetch,
      "t5_" + subredditId,
      auth,
      "new",
      undefined,
      pageNumber + 1
    );
    setPageNumber(pageNumber + 1);
  };
  const handleBack = () => {
    if (pageNumber > 1) {
      getSubredditHotPosts(
        dataFetch,
        "t5_" + subredditId,
        auth,
        "new",
        undefined,
        pageNumber - 1
      );
      setPageNumber(pageNumber - 1);
    }
  };
  console.log(data);
  console.log(data && data.posts && data.posts.length === 12);
  return (
    <Container>
      <QueueHeader title="Unmoderated" />
      <QueuesControls postsOnly={true} />
      <div>
        {!isLoading &&
          data.posts &&
          data.posts.map((post) => (
            <div
              onClick={() => {
                setShowPost(true);
                setSelectedPost(post);
              }}
            >
              <SpamPost post={post} />
            </div>
          ))}
      </div>
      {selectedPost && (
        <Post post={selectedPost} show={showPost} setShow={setShowPost} />
      )}
      <PageNumber
        handleNext={handleNext}
        handleBack={handleBack}
        pageNumber={pageNumber}
        numPosts={data && data.posts ? data.posts.length : 0}
        more={data && data.posts && data.posts.length === 12 ? 0 : 1}
        less={pageNumber === 1 ? 1 : 0}
      />
    </Container>
  );
};

export default UnmoderatedQueue;
