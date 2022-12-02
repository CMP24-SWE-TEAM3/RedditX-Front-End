import CreatePost from "Layouts/CreatePost/CreatePost";
import CategoryBar from "../CategoryBar/CategoryBar";
import { Container } from "./BodyContent.styled";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import getSubredditHotPosts from "Features/Subreddit/Services/getSubredditHotPosts";
import { useEffect } from "react";

/**
 * the Body of Subreddit page
 *
 * @returns {React.Component}
 */
const BodyContent = () => {
  const auth = useAuth();
  const { communityID } = useSubRedditID();
  const [hotPosts, error, isLoading, fetchData] = useFetchFunction();

  // console.log(communityID);

  useEffect(() => {
    communityID && getSubredditHotPosts(fetchData, communityID, auth);
  }, [communityID]);
  console.log(hotPosts, "__", error, "__", isLoading);
  return (
    <Container>
      <CreatePost />
      <CategoryBar />
      {/* Add your routes here */}
    </Container>
  );
};

export default BodyContent;
