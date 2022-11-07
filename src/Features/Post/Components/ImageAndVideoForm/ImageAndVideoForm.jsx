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

// Import contexts
import { useSubmitDestination } from "Features/Post/Contexts/selectedDestination";
import { useCreatePostTitle } from "Features/Post/Contexts/createPostTitle";

/**
 * Image and video form component (The form that appears when you click on the image and video tab in main section)
 *
 * @returns {React.Component} - Image and video form component (The form that appears when you click on the image and video tab in main section)
 */
const ImageAndVideoForm = () => {
  // State for title
  const {createPostTitle, setCreatePostTitle} = useCreatePostTitle();

  // Ref for title
  const titleRef = useRef(null);

  // Context for selected submit destination
  const { submitDestination } = useSubmitDestination();

  /**
   * Handle title change
   *
   * @param {Event} e - Event
   */
  const handleTitleChange = (e) => {
    if (e.target.value.length <= 300) {
      setCreatePostTitle(e.target.value);
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
            value={createPostTitle}
            onChange={handleTitleChange}
            onKeyDown={handleKeyDown}
            rows={1}
            className="title-input"
          />
          <span>{createPostTitle.length}/300</span>
        </Form.Group>
        <DragAndDropFile />
        <PostFlagsWrapper />
        <SubmitButtons>
          <CancelButton variant="light">Cancel</CancelButton>
          <PostButton disabled={!submitDestination || !createPostTitle}>
            Post
          </PostButton>
        </SubmitButtons>
      </StyledImageAndVideoFrom>
      <PostFormFooter id={"ImageAndVideoForm"} />
    </>
  );
};

export default ImageAndVideoForm;
