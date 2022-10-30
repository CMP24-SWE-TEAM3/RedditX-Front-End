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

/**
 * The form of draft editor in create post page (Draft editor tab)
 *
 * @returns {React.Component} - Draft editor Form component (The form that appears when you click on the post tab in main section)
 */
const DraftEditorForm = () => {
  return (
    <>
      <StyledDraftEditorForm>
        <Form.Group className="title-group mb-3">
          <Form.Control type="text" placeholder="Title" />
          <span>0/300</span>
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
