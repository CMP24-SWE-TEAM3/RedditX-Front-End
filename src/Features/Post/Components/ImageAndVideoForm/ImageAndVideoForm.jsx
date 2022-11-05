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

// Import hooks
import { useState, useRef } from "react";

/**
 * Image and video form component (The form that appears when you click on the image and video tab in main section)
 *
 * @returns {React.Component} - Image and video form component (The form that appears when you click on the image and video tab in main section)
 */
const ImageAndVideoForm = () => {
  // State for title
  const [title, setTitle] = useState("");

  // Ref for title
  const titleRef = useRef(null);

  /**
   * Handle title change
   *
   * @param {Event} e - Event
   */
  const handleTitleChange = (e) => {
    if (e.target.value.length <= 300) {
      setTitle(e.target.value);
      titleRef.current.style.height = titleRef.current.scrollHeight + "px";
    }
  };

  /**
   * Handle key down
   *
   * @param {Event} e - Event
   */
  const handleKeyDown = (e) => {
    // Prevent enter key (new line)
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <>
      <StyledImageAndVideoFrom>
        <Form.Group className="title-group mb-3">
          <Form.Control
            ref={titleRef}
            as="textarea"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            onKeyDown={handleKeyDown}
            rows={1}
            className="title-input"
          />
          <span>{title.length}/300</span>
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
