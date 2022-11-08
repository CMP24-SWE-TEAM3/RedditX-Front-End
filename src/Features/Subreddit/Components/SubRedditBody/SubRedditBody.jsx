import BodyContent from "Features/Subreddit/Components/BodyContent/BodyContent";
import SubRedditSideBar from "Features/Subreddit/Components/SubRedditSideBar/SubRedditSideBar";
import { BodyContainer } from "./SubRedditBody.styled";

/**
 * 
 * @returns {React.Component} CreatePost component
 */
const SubRedditBody = () => {
  return (
    <BodyContainer>
      <BodyContent />
      <SubRedditSideBar />
    </BodyContainer>
  );
};

export default SubRedditBody;
