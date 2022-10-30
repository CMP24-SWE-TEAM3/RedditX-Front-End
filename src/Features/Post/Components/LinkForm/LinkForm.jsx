// Import bootstrap components
import Form from "react-bootstrap/Form";

// Import components
import PostFlagsWrapper from "Features/Post/Components/PostFlagsWrapper/PostFlagsWrapper";
import PostFormFooter from "Features/Post/Components/PostFormFooter/PostFormFooter";

// Import styled components
import {
  PostButton,
  SaveDraftButton,
  StyledLinkForm,
  SubmitButtons,
} from "./LinkForm.styled";

/**
 * The form of link in create post page (Link tab)
 *
 * @returns {React.Component} - Link Form component (The form that appears when you click on the link tab in main section)
 */
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
