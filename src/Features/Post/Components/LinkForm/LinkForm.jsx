// Import bootstrap components
import Form from "react-bootstrap/Form";

// Import components
import PostFlagsWrapper from "../PostFlagsWrapper/PostFlagsWrapper";
import PostFormFooter from "../PostFormFooter/PostFormFooter";

// Import styled components
import {
  PostButton,
  SaveDraftButton,
  StyledLinkForm,
  SubmitButtons,
} from "./LinkForm.styled";

const LinkForm = () => {
  return (
    <>
      <StyledLinkForm>
        <Form.Group className="title-group mb-3">
          <Form.Control type="text" placeholder="Title" />
          <span>0/300</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" placeholder="Url" rows={3} />
        </Form.Group>
        <PostFlagsWrapper />
        <SubmitButtons>
          <SaveDraftButton variant="light">Save Draft</SaveDraftButton>
          <PostButton>Post</PostButton>
        </SubmitButtons>
      </StyledLinkForm>
      <PostFormFooter id={"LinkForm"} />
    </>
  );
};

export default LinkForm;
