import PostShape from "Features/Post/Layouts/PostShape/PostShape";
import { useState } from "react";
import { Container1, InnerContainer } from "./PostsList.styled";
import Post from "Features/Post/Pages/Post/Post";
const PostsList = ({ PostList }) => {
  console.log("first");
  const [showPost, setShowPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const handleRecentPosts = () => {
    // localStorage.setItem("RecentPosts", JSON.stringify(recentPost));
  };
  return (
    <Container1>
      <InnerContainer>
        {/* <PostShape post={post} /> */}
        <div>
          {PostList.results &&
            PostList.results.map((post) => (
              <div
                onClick={() => {
                  setShowPost(true);
                  setSelectedPost(post);
                  // handleRecentPosts();
                }}
              >
                <PostShape post={post} />
                {/* <CollapsePost post={post} /> */}
              </div>
            ))}
        </div>
        {selectedPost && (
          <Post post={selectedPost} show={showPost} setShow={setShowPost} />
        )}
      </InnerContainer>
    </Container1>
  );
};

export default PostsList;
