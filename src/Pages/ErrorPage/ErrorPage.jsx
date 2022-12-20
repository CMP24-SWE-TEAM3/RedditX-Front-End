// Import images
import notFound from "Assets/Images/notFound.png";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

// Import styled components
import { Image, Container } from "./ErrorPage.styled";

/**
 * A Not found page that should appear if the user directed to invalid url
 *
 * @returns {React.Component}
 */
const ErrorPage = () => {
  const auth = useAuth();
  const handleLogin = () => {
    auth.logout();
    window.location.href = "/login";
  };
  return (
    <Container>
      <Image src={notFound} alt="not found" />
      <h1>An error occurred we are working on it..</h1>
      <h1>Please login again</h1>
      <Button onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default ErrorPage;
