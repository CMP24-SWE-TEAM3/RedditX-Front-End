// Import styled components
import { Title, Container } from "./Main.styled";

// Import components and layouts
import ChooseCommunity from "Features/Post/Components/ChooseCommunity/ChooseCommunity";
import Tabs from "Features/Post/Layouts/Tabs/Tabs";

/**
 * Main component (the main section in the create post page)
 *
 * @returns {React.Component} Main component (the main section in the create post page)
 */
const Main = () => {
  return (
    <Container>
      <Title>
        <h4>Create a post</h4>
      </Title>
      <ChooseCommunity />
      <Tabs />
    </Container>
  );
};

export default Main;
