import React, { useEffect, useState } from "react";
import getNewPosts from "Services/getNewPosts";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import PostShape from "Features/Post/Layouts/PostShape/PostShape";
import Post from "Features/Post/Pages/Post/Post";
import CollapsePost from "Features/Post/Layouts/CollapsePost/CollapsePost";

let recentPost = [
  {
    id: "1",
    description: "new news in CUFE",
    points: "10",
    comments: "4",
    hours: "7",
  },
  {
    id: "2",
    description: "new news in reddit",
    points: "9",
    comments: "2",
    hours: "11",
  },
  {
    id: "3",
    description: "announcements updated in reddit",
    points: "5",
    comments: "7",
    hours: "1",
  },
];

const ShowPosts = () => {
  const [data, error, isLoading, dataFetch] = useFetchFunction();
  const auth = useAuth();
  useEffect(() => {
    getNewPosts(dataFetch, auth, 1, 50);
  }, []);

  const [showPost, setShowPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  // TODO: replace dummy data with post data
  // handle recent posts to append and delete from local storage
  const handleRecentPosts = () => {
    localStorage.setItem("RecentPosts", JSON.stringify(recentPost));
  };

  return (
    <>
      <div>
        {!isLoading &&
          data.posts &&
          data.posts.map((post) => (
            <div
              onClick={() => {
                setShowPost(true);
                setSelectedPost(post);
                handleRecentPosts();
              }}
            >
              <PostShape post={post} />
              <CollapsePost post={post} />
            </div>
          ))}
      </div>
      {selectedPost && (
        <Post post={selectedPost} show={showPost} setShow={setShowPost} />
      )}
    </>
  );
};

export default ShowPosts;
