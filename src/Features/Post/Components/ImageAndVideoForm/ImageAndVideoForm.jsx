// Import bootstrap components
import Form from "react-bootstrap/Form";

// Import components
import DragAndDropFile from "Features/Post/Components/DragDropFile/DragDropFile";
import PostFlagsWrapper from "Features/Post/Components/PostFlagsWrapper/PostFlagsWrapper";
import PostFormFooter from "Features/Post/Components/PostFormFooter/PostFormFooter";

// Import styled components
import {
  PostButton,
  StyledImageAndVideoFrom,
  CancelButton,
  SubmitButtons,
} from "./ImageAndVideoForm.styled";

/**
 * Image and video form component (The form that appears when you click on the image and video tab in main section)
 *
 * @returns {React.Component} - Image and video form component (The form that appears when you click on the image and video tab in main section)
 */
const ImageAndVideoForm = () => {
  return (
    <>
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
      <PostFormFooter id={"ImageAndVideoForm"} />
    </>
  );
};

export default ImageAndVideoForm;
