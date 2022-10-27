// Import bootstrap components
import Form from "react-bootstrap/Form";

// Import components
import DragAndDropFile from "../DragDropFile/DragDropFile";
import PostFlagsWrapper from "../PostFlagsWrapper/PostFlagsWrapper";

// Import styled components
import {
  PostButton,
  StyledImageAndVideoFrom,
  CancelButton,
  SubmitButtons,
} from "./ImageAndVideoForm.styled";

const ImageAndVideoForm = () => {
  return (
    <StyledImageAndVideoFrom>
      <Form.Group className="title-group mb-3">
        <Form.Control type="text" placeholder="Title" />
        <span>0/300</span>
      </Form.Group>
      <DragAndDropFile />
      <PostFlagsWrapper />
      <SubmitButtons>
        <CancelButton variant="light">Cancel</CancelButton>
        <PostButton>Post</PostButton>
      </SubmitButtons>
    </StyledImageAndVideoFrom>
  );
};

export default ImageAndVideoForm;
