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

const EditedQueue = () => {
  const [data, error, isLoading, dataFetch] = useFetchFunction();
  const auth = useAuth();
  const [showPost, setShowPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const { subredditId } = useParams();
  useEffect(() => {
    getEditedPosts(dataFetch, auth, subredditId);
  }, []);
  return (
    <Container>
      <QueueHeader title="Edited" />
      <QueuesControls />
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
    </Container>
  );
};

export default EditedQueue;
