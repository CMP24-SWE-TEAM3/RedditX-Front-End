// Import bootstrap components
import Form from "react-bootstrap/Form";
import DragAndDropFile from "../DragDropFile/DragDropFile";

// Import styled components
import { StyledImageAndVideoFrom } from "./ImageAndVideoForm.styled";

const ImageAndVideoForm = () => {
  return (
    <StyledImageAndVideoFrom>
      <Form.Group className="title-group mb-3">
        <Form.Control type="text" placeholder="Title" />
        <span>0/300</span>
      </Form.Group>
      <DragAndDropFile />
    </StyledImageAndVideoFrom>
  );
};

export default ImageAndVideoForm;
