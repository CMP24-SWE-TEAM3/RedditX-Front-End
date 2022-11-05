// Import components
import PostFlagsWrapper from "Features/Post/Components/PostFlagsWrapper/PostFlagsWrapper";
import DraftEditor from "Features/Post/Components/DraftEditor/DraftEditor";
import PostFormFooter from "Features/Post/Components/PostFormFooter/PostFormFooter";
import FlairModal from "Features/Post/Components/FlairModal/FlairModal";

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
const flairs = [
  {
    id: "t7_63248d012f459a937e2684fd",
    text: "Flair 1 text",
    flairBackGroundColor: "rgb(70, 209, 96)",
    flairTextColor: "rgb(255, 255, 255)",
    modOnly: true,
    allowUserEdits: true,
  },
  {
    id: "t7_63248d012f459a937e1223123d",
    text: "Flair 2 text",
    flairBackGroundColor: "blue",
    flairTextColor: "rgb(255, 255, 255)",
    modOnly: true,
    allowUserEdits: true,
  },
  {
    id: "t1_632012f459a937e1223123d",
    text: "Flair 3 text",
    flairBackGroundColor: "red",
    flairTextColor: "rgb(70, 209, 96)",
    modOnly: true,
    allowUserEdits: true,
  },
];

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
      />
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
        <PostFlagsWrapper flairHandler={setModalShow} />
        <SubmitButtons>
          {/* <SaveDraftButton variant="light">Save Draft</SaveDraftButton> */}
          <PostButton>Post</PostButton>
        </SubmitButtons>
      </StyledDraftEditorForm>
      <PostFormFooter id={"DraftEditorForm"} />
    </>
  );
};

export default DraftEditorForm;
