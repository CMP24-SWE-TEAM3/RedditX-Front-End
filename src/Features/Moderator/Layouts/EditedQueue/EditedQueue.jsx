import QueueHeader from "Features/Moderator/Components/QueueHeader/QueueHeader";
import QueuesControls from "Features/Moderator/Components/QueuesControls/QueuesControls";
import { Container } from "./EditedQueue.styled";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import { useEffect, useState } from "react";
import getNewPosts from "Services/getNewPosts";
import Post from "Features/Post/Pages/Post/Post";
import SpamPost from "Features/Post/Layouts/SpamPost/SpamPost";
import getEditedPosts from "Features/Moderator/Services/getEditedPosts";
import { useParams } from "react-router-dom";
import PageNumber from "Features/Moderator/Components/PageNumber/PageNumber";

/**
 * Edited queue ( a queue of posts and comments that have been edited )
 *
 * @returns {React.Component} Edited queue
 */
const EditedQueue = () => {
  const [data, error, isLoading, dataFetch] = useFetchFunction();
  const auth = useAuth();
  const [showPost, setShowPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const { subredditId } = useParams();
  useEffect(() => {
    getEditedPosts(dataFetch, auth, subredditId);
  }, []);

  const handleNext = () => {
    if ((pageNumber + 1) * 5 < data.posts.length) setPageNumber(pageNumber + 1);
  };
  const handleBack = () => {
    if (pageNumber > 0) setPageNumber(pageNumber - 1);
  };
  data &&
    data.posts &&
    console.log(
      pageNumber * 5,
      Math.min(pageNumber * 5 + 5, data.posts.length),
      data.posts.length
    );
  return (
    <Container>
      <QueueHeader title="Edited" />
      <QueuesControls />
      <div>
        {!isLoading &&
          data.posts &&
          data.posts
            .slice(
              pageNumber * 5,
              Math.min(pageNumber * 5 + 5, data.posts.length)
            )
            .map((post) => (
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

export default EditedQueue;
