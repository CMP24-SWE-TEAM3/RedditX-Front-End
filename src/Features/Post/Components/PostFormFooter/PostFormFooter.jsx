// Import bootstrap components
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

// Import styled components
import { FooterContainer } from "./PostFormFooter.styled";

// Import icons
import { AiOutlineInfoCircle } from "react-icons/ai";
const PostFormFooter = ({ id }) => {
  return (
    <FooterContainer>
      <Form.Group className="mb-3" controlId={id}>
        <Form.Check type="checkbox" label="Send me post reply notifications" />
      </Form.Group>
      <Link to="/">Connect accounts to share your post</Link>
      <AiOutlineInfoCircle size={20}/>
    </FooterContainer>
  );
};

export default PostFormFooter;
