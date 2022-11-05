// Import bootstrap components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

// Import styled components
import {
  SearchContainer,
  SearchInput,
  RadioContainer,
  ModalBody,
  ModalHeader,
  ModalFooter,
  SelectedFlairContainer,
  GlobalStyles,
  Flair,
  FormCheck,
  FormCheckLabel,
  StyledModal,
  FlairParagraph,
  EditFlair,
} from "./FlairModal.styled";

// Import icons
import { CiSearch } from "react-icons/ci";

// Import hooks
import { useState } from "react";

const FlairModal = ({ show, onHide, flairList, flairIndex, setFlairIndex }) => {
  // State to store text of edited flair
  const [flairEditText, setFlairEditText] = useState("");

  /**
   * Function to handle the change in flair text
   *
   * @param {Event} e - event
   */
  const handleFlairEditText = (e) => {
    if (e.target.value.length < 64) {
      setFlairEditText(e.target.value);
    }
  };
  return (
    <StyledModal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
      backdrop={false}
    >
      <GlobalStyles />
      <ModalHeader closeButton>
        <Modal.Title id="contained-modal-title-vcenter" as="h6">
          Select your community flair
        </Modal.Title>
      </ModalHeader>
      <ModalBody>
        <SelectedFlairContainer>
          {flairIndex === null && (
            <FlairParagraph> No flair selected</FlairParagraph>
          )}
          {flairIndex !== null && (
            <FlairParagraph>
              <span> Post Title </span>
              <Flair
                color={flairList[flairIndex].flairTextColor}
                backgroundColor={flairList[flairIndex].flairBackGroundColor}
              >
                {flairEditText}
              </Flair>
            </FlairParagraph>
          )}
        </SelectedFlairContainer>

        <RadioContainer>
          <SearchContainer>
            <CiSearch size={25} />
            <SearchInput type="search" placeholder="Search for flair" />
          </SearchContainer>
          <Form>
            {flairList.map((flair, index) => (
              <FormCheck type={"radio"} key={flair.id} id={flair.id}>
                <Form.Check.Input type={"radio"} name="flair" id={flair.id} />
                <FormCheckLabel
                  onClick={() => {
                    setFlairIndex(index);
                    setFlairEditText(flairList[index].text);
                  }}
                >
                  <Flair
                    color={flair.flairTextColor}
                    backgroundColor={flair.flairBackGroundColor}
                  >
                    {flair.text}
                  </Flair>
                </FormCheckLabel>
              </FormCheck>
            ))}
          </Form>
        </RadioContainer>
        {flairIndex !== null && (
          <EditFlair empty={flairEditText.length === 0}>
            <span className="edit-flair">EDIT FLAIR</span>
            <FlairParagraph>Allows text and up to 10 emojis</FlairParagraph>
            <input
              type="text"
              value={flairEditText}
              onChange={handleFlairEditText}
            />
            {flairEditText.length !== 0 && (
              <p className="remaining-text">
                {64 - flairEditText.length} characters remaining
              </p>
            )}
            {flairEditText.length === 0 && (
              <p className="danger-remaining-text">
                Error: text or emoji is required
              </p>
            )}
          </EditFlair>
        )}
      </ModalBody>
      <ModalFooter>
        <Button onClick={onHide}>Close</Button>
      </ModalFooter>
    </StyledModal>
  );
};

export default FlairModal;
