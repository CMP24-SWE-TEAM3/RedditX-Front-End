import { Routes, Route } from "react-router-dom";
import CreatePost from "Features/Subreddit/Layouts/CreatePost/CreatePost";
import CategoryBar from "../CategoryBar/CategoryBar";
import { Container } from "./BodyContent.styled";
import SubRedditPosts from "Features/Subreddit/Components/SubRedditPosts/SubRedditPosts";
import { useIsMuted } from "Features/Subreddit/Contexts/IsMutedProvider";
import { useIsBanned } from "Features/Subreddit/Contexts/IsBannedProvider";

/**
 * the Body of Subreddit page
 *
 * @returns {React.Component}
 */
const BodyContent = () => {
  const { isMuted } = useIsMuted();
  const { isBanned } = useIsBanned();

  return (
    <Container>
      {!isMuted && !isBanned && <CreatePost />}
      <CategoryBar />
      {/* Add your routes here */}
      <Routes>
        <Route path="" element={<SubRedditPosts type="random" />} />
        <Route path="hot" element={<SubRedditPosts type="hot" />} />
        <Route path="new" element={<SubRedditPosts type="new" />} />
        <Route path="top" element={<SubRedditPosts type="top" />} />
      </Routes>
    </Container>
  );
};

export default BodyContent;
