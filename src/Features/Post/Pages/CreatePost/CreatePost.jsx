// Import styled components
import { Container } from "./CreatePost.styled";

// Import components
import Main from "Features/Post/Layouts/Main/Main";
import Sidebar from "Features/Post/Layouts/Sidebar/Sidebar";

const CreatePost = () => {
  return (
    <Container>
      <Main />
      <Sidebar />
    </Container>
  );
};

export default CreatePost;
