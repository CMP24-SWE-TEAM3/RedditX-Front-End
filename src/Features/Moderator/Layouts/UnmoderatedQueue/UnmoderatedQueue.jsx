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
  const [pageNumber, setPageNumber] = useState(0);
  useEffect(() => {
    //  fetchData,
    // comm, auth, type, time, pgNum;
    getSubredditHotPosts(dataFetch, subredditId, auth, "new", 10, pageNumber);
  }, []);
  const handleNext = () => {
    if (pageNumber * 5 < data.posts.length) setPageNumber(pageNumber + 1);
  };
  const handleBack = () => {
    if (pageNumber > 0) setPageNumber(pageNumber - 1);
  };
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
      />
    </Container>
  );
};

export default UnmoderatedQueue;
