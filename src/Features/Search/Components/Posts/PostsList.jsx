import SafeContext from "Features/Search/Contexts/SafeSearchContext/Safe-context";
import NotFound from "../NotFound/NotFound";
import PostItem from "../Post/Post";
import { ContainerPostsList } from "./PostsList.styled";
import { useContext, useState } from "react";
import Post from "Features/Post/Pages/Post/Post";

/**
 * Component that contains the Postslist component and the PostslistItems.
 *
 * @Component
 * @param {String} type -  the type of sort
 * @param {object} PostList -  contain all the posts
 * @returns {React.Component}
 */
const PostsList = ({ type, PostList }) => {
  const [showPost, setShowPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const handleRecentPosts = () => {
    // localStorage.setItem("RecentPosts", JSON.stringify(recentPost));
  };
  // console.log(PostList.results);
  const ctx = useContext(SafeContext);
  if (PostList.results) {
    const postReals = PostList.results;
    let filteredPostList;
    if (ctx.safe === true) {
      filteredPostList = postReals.filter((post) => post.nsfw !== ctx.safe);
    } else {
      filteredPostList = PostList.results;
    }
    const PostsNumber = PostList.results.length;
    return (
      <ContainerPostsList>
        <div className="Posts-List">
          <div className="Sub-List">
            {PostList.results &&
              PostsNumber !== 0 &&
              filteredPostList.map((post) => (
                <div
                  onClick={() => {
                    setShowPost(true);
                    setSelectedPost(post);
                    // handleRecentPosts();
                  }}
                >
                  <PostItem post={post} key={post._id} />
                </div>
              ))}
            {selectedPost && (
              <Post post={selectedPost} show={showPost} setShow={setShowPost} />
            )}
            {PostsNumber === 0 && <NotFound />}
          </div>
        </div>
      </ContainerPostsList>
    );
  }
};

export default PostsList;
