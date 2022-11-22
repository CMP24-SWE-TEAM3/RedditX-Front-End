import CreatePost from "Layouts/CreatePost/CreatePost";
import CategoryBar from "../CategoryBar/CategoryBar";
import { Container } from "./BodyContent.styled";

/**
 * the Body of Subreddit page
 *
 * @returns {React.Component}
 */
const BodyContent = () => {
  return (
    <Container>
      <CreatePost />
      <CategoryBar />
    </Container>
  );
};

export default BodyContent;
