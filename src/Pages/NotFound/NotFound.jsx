// Import images
import notFound from "Assets/Images/notFound.png";

// Import styled components
import { Image, Container } from "./NotFound.styled";

/**
 * A Not found page that should appear if the user directed to invalid url
 *
 * @returns {React.Component}
 */
const NotFound = () => {
  return (
    <Container>
      <Image src={notFound} alt="not found" />
      <h1>page not found</h1>
      <p>the page you requested does not exist</p>
    </Container>
  );
};

export default NotFound;
