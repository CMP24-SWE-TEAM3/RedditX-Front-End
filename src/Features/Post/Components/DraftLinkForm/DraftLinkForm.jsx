// Import styled components
import {
  FormContainer,
  Input,
  StyledButton,
  FormLabel,
  FormRow,
} from "./DraftLinkForm.styled";

// Import bootstrap components
import { Col } from "react-bootstrap";
import { isValidUrl } from "Features/Post/Utils/isValidUrl";

// Import hooks
import { useState } from "react";

/**
 * A small form that allows the user to enter a link in draft editor
 * It appears when the user clicks on add link button in the draft editor controls
 *
 * @param {Function} onLinkURLChange - Function to handle link URL change
 * @param {Function} onLinkTextChange - Function to handle link text change
 * @param {Function} onLinkInputKeyDown - Function to handle enter button
 * @param {Function} confirmLink - Function to handle form submit
 * @param {String} linkUrlValue - Link URL value (state)
 * @param {String} linkTextValue - Link text value (state)
 *
 * @returns {React.Component} - DraftLinkForm component
 */
const DraftLinkForm = ({
  onLinkURLChange,
  linkUrlValue,
  onLinkInputKeyDown,
  confirmLink,
  linkTextValue,
  onLinkTextChange,
}) => {
  // State to store if url is valid or not
  const [isUrlValid, setIsUrlValid] = useState(true);

  /**
   * Function to handle form submit
   *
   * @param {Event} e - Event object
   */
  const handleFormSubmit = (e) => {
    setIsUrlValid(isValidUrl(linkUrlValue));
    if (isValidUrl(linkUrlValue)) {
      confirmLink(e);
    }
  };
  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <FormRow>
        <FormLabel>Text</FormLabel>
        <Col>
          <Input
            onChange={onLinkTextChange}
            type="text"
            value={linkTextValue}
            onKeyDown={onLinkInputKeyDown}
            placeholder="Title of link (optional)"
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
            placeholder="Paste or type link here"
          />
        </Col>
      </FormRow>
      <FormRow>
        <Col>
          <StyledButton onMouseDown={handleFormSubmit}> Insert </StyledButton>
          {!isUrlValid && <span>Link doesn't look right</span>}
        </Col>
      </FormRow>
    </FormContainer>
  );
};

export default DraftLinkForm;
