// Import bootstrap components
import Form from "react-bootstrap/Form";

// Import styled components
import { StyledLinkForm } from "./LinkForm.styled";

const LinkForm = () => {
  return (
    <StyledLinkForm>
      <Form.Group className="title-group mb-3">
        <Form.Control type="text" placeholder="Title" />
        <span>0/300</span>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" placeholder="Url" rows={3} />
      </Form.Group>
    </StyledLinkForm>
  );
};

export default LinkForm;
