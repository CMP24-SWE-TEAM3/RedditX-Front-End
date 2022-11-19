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
      <div className="create-post"></div>
      <CategoryBar />
    </Container>
  );
};

export default BodyContent;
