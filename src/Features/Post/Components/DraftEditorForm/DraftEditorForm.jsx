// Import components
import PostFlagsWrapper from "Features/Post/Components/PostFlagsWrapper/PostFlagsWrapper";
import DraftEditor from "Features/Post/Components/DraftEditor/DraftEditor";
import PostFormFooter from "Features/Post/Components/PostFormFooter/PostFormFooter";
import FlairModal from "Features/Post/Components/FlairModal/FlairModal";

// Import bootstrap components
import { Form } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

// Import styled components
import {
  PostButton,
  SaveDraftButton,
  StyledDraftEditorForm,
  SubmitButtons,
} from "./DraftEditorForm.styled";

// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";

// Import hooks
import { useState, useRef } from "react";

// Import contexts
import { useSubmitDestination } from "Features/Post/Contexts/selectedDestination";
import { useCreatePostTitle } from "Features/Post/Contexts/createPostTitle";

/**
 * The form of draft editor in create post page (Draft editor tab)
 *
 * @returns {React.Component} - Draft editor Form component (The form that appears when you click on the post tab in main section)
 */
const DraftEditorForm = () => {
  // State for flair modal
  const [modalShow, setModalShow] = useState(false);

  // State for flair
  const [flairIndex, setFlairIndex] = useState(null);

  // State for title
  const { createPostTitle, setCreatePostTitle } = useCreatePostTitle();

  // Ref for title
  const titleRef = useRef(null);

  // Context for selected submit destination
  const { submitDestination } = useSubmitDestination();

  const [flairs, error, isLoading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "/flairs/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
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

  const onModalHide = () => {
    setModalShow(false);
    setFlairIndex(null);
  };
  return (
    <>
      <FlairModal
        show={modalShow}
        onHide={onModalHide}
        flairIndex={flairIndex}
        setFlairIndex={setFlairIndex}
        flairList={flairs}
        error={error}
        isLoading={isLoading}
      />
      <StyledDraftEditorForm>
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
        <DraftEditor />
        <PostFlagsWrapper flairHandler={setModalShow} />
        <SubmitButtons>
          {/* <SaveDraftButton variant="light">Save Draft</SaveDraftButton> */}
          <PostButton disabled={!submitDestination || !createPostTitle}>
            Post
          </PostButton>
        </SubmitButtons>
      </StyledDraftEditorForm>
      <PostFormFooter id={"DraftEditorForm"} />
    </>
  );
};

export default DraftEditorForm;
