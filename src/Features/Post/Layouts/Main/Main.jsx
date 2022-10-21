// Import styled components
import { Title, Container } from "./Main.styled";

// Import components
import ChooseCommunity from "Features/Post/Components/ChooseCommunity/ChooseCommunity";

const Main = () => {
  return (
    <Container>
      <Title>
        <h4>Create a Post</h4>
      </Title>
      <ChooseCommunity />
    </Container>
  );
};

export default Main;
