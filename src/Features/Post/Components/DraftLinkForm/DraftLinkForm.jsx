// Import styled components
import {
  FormContainer,
  Input,
  StyledButton,
  FormLabel,
  FormRow,
} from "./DraftLinkForm.styled";

// Import bootstrap components
import { Col, Form, Row } from "react-bootstrap";

const DraftLinkForm = ({
  onLinkURLChange,
  linkUrlValue,
  onLinkInputKeyDown,
  confirmLink,
  linkTextValue,
  onLinkTextChange,
}) => {
  return (
    <FormContainer>
      <FormRow>
        <FormLabel>Text</FormLabel>
        <Col>
          <Input
            onChange={onLinkTextChange}
            type="text"
            value={linkTextValue}
            onKeyDown={onLinkInputKeyDown}
            placeholder="Paste or type link here"
          />
        </Col>
      </FormRow>
      <FormRow>
        <FormLabel column lg={2}>
          Link
        </FormLabel>
        <Col>
          <Input
            onChange={onLinkURLChange}
            type="text"
            value={linkUrlValue}
            onKeyDown={onLinkInputKeyDown}
            placeholder="Title of link (optional)"
          />
        </Col>
      </FormRow>
      <FormRow>
        <Col>
          <StyledButton onMouseDown={confirmLink}> Insert </StyledButton>
        </Col>
      </FormRow>
    </FormContainer>
  );
};

export default DraftLinkForm;
