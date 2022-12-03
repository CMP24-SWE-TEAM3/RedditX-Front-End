import CreatePost from "Layouts/CreatePost/CreatePost";
import CategoryBar from "../CategoryBar/CategoryBar";
import { Container } from "./BodyContent.styled";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import getSubredditHotPosts from "Features/Subreddit/Services/getSubredditHotPosts";
import getSubredditNewPosts from "Features/Subreddit/Services/getSubredditNewPosts";
import { useEffect } from "react";
import SubRedditNoPosts from "../SubRedditNoPosts/SubRedditNoPosts";

/**
 * the Body of Subreddit page
 *
 * @returns {React.Component}
 */
const BodyContent = () => {
  const auth = useAuth();
  const { communityID } = useSubRedditID();
  const [hotPosts, error, isLoading, fetchData] = useFetchFunction();
  const [newPosts, errorNew, isLoadingNew, fetchDataNew] = useFetchFunction();

  // console.log(communityID);

  useEffect(() => {
    communityID && getSubredditHotPosts(fetchData, communityID, auth);
    communityID && getSubredditNewPosts(fetchDataNew, communityID, auth);
  }, [communityID]);
  // console.log(hotPosts, "_hot_", error, "_hot_", isLoading);
  // console.log(newPosts, "_new_", errorNew, "_new_", isLoadingNew);
  return (
    <Container>
      <CreatePost />
      <CategoryBar />
      {/* Add your routes here */}
      <SubRedditNoPosts />
    </Container>
  );
};

export default BodyContent;
