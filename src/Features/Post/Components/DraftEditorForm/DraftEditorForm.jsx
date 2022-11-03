// Import components
import PostFlagsWrapper from "Features/Post/Components/PostFlagsWrapper/PostFlagsWrapper";
import DraftEditor from "Features/Post/Components/DraftEditor/DraftEditor";
import PostFormFooter from "Features/Post/Components/PostFormFooter/PostFormFooter";

// Import bootstrap components
import { Form } from "react-bootstrap";

// Import styled components
import {
  PostButton,
  SaveDraftButton,
  StyledDraftEditorForm,
  SubmitButtons,
} from "./DraftEditorForm.styled";

// Import hooks
import { useState, useRef } from "react";

/**
 * The form of draft editor in create post page (Draft editor tab)
 *
 * @returns {React.Component} - Draft editor Form component (The form that appears when you click on the post tab in main section)
 */
const DraftEditorForm = () => {
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
      <StyledDraftEditorForm>
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
        <DraftEditor />
        <PostFlagsWrapper />
        <SubmitButtons>
          <SaveDraftButton variant="light">Save Draft</SaveDraftButton>
          <PostButton>Post</PostButton>
        </SubmitButtons>
      </StyledDraftEditorForm>
      <PostFormFooter id={"DraftEditorForm"} />
    </>
  );
};

export default DraftEditorForm;
