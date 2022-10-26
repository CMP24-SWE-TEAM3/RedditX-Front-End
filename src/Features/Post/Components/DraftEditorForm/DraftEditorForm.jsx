// Import components
import PostFlagsWrapper from "../PostFlagsWrapper/PostFlagsWrapper";
import DraftEditor from "../DraftEditor/DraftEditor";

// Import bootstrap components
import { Form } from "react-bootstrap";

// Import styled components
import { StyledDraftEditorForm } from "./DraftEditorForm.styled";

const DraftEditorForm = () => {
  return (
    <StyledDraftEditorForm>
      <Form.Group className="title-group mb-3">
        <Form.Control type="text" placeholder="Title" />
        <span>0/300</span>
      </Form.Group>
      <DraftEditor />
      <PostFlagsWrapper />
    </StyledDraftEditorForm>
  );
};

export default DraftEditorForm;
