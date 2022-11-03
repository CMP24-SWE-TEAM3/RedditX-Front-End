// Import bootstrap components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
} from "./FlairModal.styled";

// Import icons
import { CiSearch } from "react-icons/ci";
import { Form } from "react-bootstrap";

const FlairModal = ({ show, onHide }) => {
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
          <p>No flair selected</p>
        </SelectedFlairContainer>

        <RadioContainer>
          <SearchContainer>
            <CiSearch size={25} />
            <SearchInput type="search" placeholder="Search for flair" />
          </SearchContainer>
          <Form>
            <FormCheck type={"radio"} id={`check-api-flair-1`}>
              <Form.Check.Input
                type={"radio"}
                name="flair"
                id={`check-api-flair-1`}
              />
              <FormCheckLabel>
                <Flair
                  color="rgb(255, 255, 255)"
                  backgroundColor="rgb(70, 209, 96)"
                >
                  Flair
                </Flair>
              </FormCheckLabel>
            </FormCheck>
            <FormCheck type={"radio"} id={`check-api-flair-2`}>
              <Form.Check.Input
                type={"radio"}
                name="flair"
                id={`check-api-flair-2`}
              />
              <FormCheckLabel>
                <Flair
                  color="rgb(255, 255, 255)"
                  backgroundColor="rgb(70, 209, 96)"
                >
                  Flair
                </Flair>
              </FormCheckLabel>
            </FormCheck>
            <FormCheck type={"radio"} id={`check-api-flair-3`}>
              <Form.Check.Input
                type={"radio"}
                name="flair"
                id={`check-api-flair-3`}
              />
              <FormCheckLabel>
                <Flair
                  color="rgb(255, 255, 255)"
                  backgroundColor="rgb(70, 209, 96)"
                >
                  Flair
                </Flair>
              </FormCheckLabel>
            </FormCheck>
          </Form>
        </RadioContainer>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onHide}>Close</Button>
      </ModalFooter>
    </StyledModal>
  );
};

export default FlairModal;
