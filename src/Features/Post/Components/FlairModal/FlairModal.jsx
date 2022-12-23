// Import bootstrap components
import Modal from "react-bootstrap/Modal";
import { Form, Spinner } from "react-bootstrap";

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
  ApplyButton,
  CancelButton,
} from "./FlairModal.styled";

// Import icons
import { CiSearch } from "react-icons/ci";

// Import hooks
import { useState } from "react";

// Import contexts
import { useCreatePostFlairs } from "Features/Post/Contexts/createPostFlairs";

/**
 * Component to show the modal for flairs
 *
 * @param {Boolean} show - boolean to show the modal
 * @param {Function} onHide - function to hide the modal
 * @param {Array} flairList - array of flairs
 * @param {Number} flairIndex - index of selected flair
 * @param {Function} setFlairIndex - function to set the index of selected flair
 * @param {String} error - error message
 * @param {Boolean} isLoading - boolean to show loading spinner
 * @param {String} postOrUser - string to check if the modal is for post or user
 * @returns
 */
const FlairModal = ({
  show,
  onHide,
  flairList,
  flairIndex,
  setFlairIndex,
  error,
  isLoading,
  postOrUser,
}) => {
  console.log("flairList submit", flairList);
  // Context for create post flairs
  const { createPostFlairs, setCreatePostFlairs } = useCreatePostFlairs();

  // State to store text of edited flair
  const [flairEditText, setFlairEditText] = useState("");

  // State to store search text
  const [searchText, setSearchText] = useState("");
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
          {flairIndex === null && flairList && (
            <FlairParagraph> No flair selected</FlairParagraph>
          )}
          {flairIndex !== null && flairList && (
            <FlairParagraph>
              <span> Post Title </span>
              {flairList[flairIndex].flairTextColor &&
                flairList[flairIndex].flairBackGround && (
                  <Flair
                    color={flairList[flairIndex].flairTextColor}
                    backgroundColor={flairList[flairIndex].flairBackGround}
                  >
                    {flairEditText}
                  </Flair>
                )}
            </FlairParagraph>
          )}
        </SelectedFlairContainer>

        <RadioContainer>
          <SearchContainer>
            <CiSearch size={25} />
            <SearchInput
              type="search"
              placeholder="Search for flair"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </SearchContainer>
          {isLoading && <Spinner />}
          {!isLoading && flairList && flairList.length !== 0 && (
            <Form>
              {flairList
                .filter(
                  (flair) =>
                    flair.flairText &&
                    flair.flairText
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                )
                .map((flair, index) => (
                  <FormCheck type={"radio"} key={flair._id} id={flair._id}>
                    <Form.Check.Input
                      type={"radio"}
                      name="flair"
                      id={flair._id}
                    />
                    {flairList[index].flairText && (
                      <FormCheckLabel
                        onClick={() => {
                          setFlairIndex(index);
                          setFlairEditText(flairList[index].flairText);
                        }}
                      >
                        {flair.flairTextColor && flair.flairBackGround && (
                          <Flair
                            color={flair.flairTextColor}
                            backgroundColor={flair.flairBackGround}
                          >
                            {flair.flairText}
                          </Flair>
                        )}
                      </FormCheckLabel>
                    )}
                  </FormCheck>
                ))}
            </Form>
          )}
        </RadioContainer>
        <EditFlair
          empty={flairEditText.length === 0}
          flairSelected={flairIndex !== null}
        >
          {flairIndex !== null && flairList && (
            <>
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
            </>
          )}
        </EditFlair>
      </ModalBody>
      <ModalFooter>
        <CancelButton onClick={() => setFlairIndex(null)}>
          Clear Flair
        </CancelButton>
        <ApplyButton
          disabled={flairIndex === null || flairEditText.length === 0}
          onClick={() => {
            if (postOrUser === "post")
              setCreatePostFlairs(flairList[flairIndex]);
            onHide();
            flairList[flairIndex].text = flairEditText;
          }}
        >
          Apply
        </ApplyButton>
      </ModalFooter>
    </StyledModal>
  );
};

export default FlairModal;
