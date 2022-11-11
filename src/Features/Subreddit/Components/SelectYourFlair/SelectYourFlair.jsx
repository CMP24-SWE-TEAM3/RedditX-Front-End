import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {MdOutlineClear} from "react-icons/md"
import {
  AllowedText,
  CharRem,
  EditDiv,
  EditFlairText,
  EditFlairTitle,
  Flair,
  FlairModal,
  InputFlairText,
  SearchComponent,
  SearchDiv,
  SearchEditDiv,
  SearchIcon,
  SelectedFlairDiv,
  ShowMyFlairDiv,
  StyledForm,
  Title,
  XButton,
} from "./SelectYourFlair.styled";
/**
 *
 * @param {boolean} modalShow - boolean to show or hide modal
 * @param {function} hide - handler on click on X button
 * @param {function} onApply - handler when click apply for changes
 * @returns {React.Component}
 */
const SelectYourFlair = ({ modalShow, hide, onApply }) => {
  // selected flair from radio buttons
  const [selectedFlair, setSelectedFlair] = useState({});
  //text on search
  const [searchValue, setSearchValue] = useState("");
  // const [check, setCheck] = useState(false);

  //flair list
  const searchList = [
    {
      text: "lie",
      backgroundColor: "green",
      color: "#fff",
    },
    {
      text: "tie",
      backgroundColor: "yellow",
      color: "#fff",
    },
    {
      text: "bye",
      backgroundColor: "blue",
      color: "#fff",
    },
    {
      text: "hi",
      backgroundColor: "black",
      color: "#fff",
    },
  ];

  /**
   * onchange of input text of search bar handler
   *
   * @param {Event} e - event
   */
  function searchHandler(e) {
    setSearchValue(e.target.value);
  }

  /**
   * handler when select a flair
   *
   * @param {Event} e -event
   */
  function selectFlairHandler(e) {
    // setCheck(true);
    setSelectedFlair({
      text: e.target.nextElementSibling.firstChild.innerText,
      color: e.target.nextElementSibling.firstChild.style.color,
      backgroundColor:
        e.target.nextElementSibling.firstChild.style.backgroundColor,
    });
  }

  /**
   * handler when change text of selected flair
   *
   * @param {Event} e -event
   */
  function changeSelectedFlairTextHandler(e) {
    setSelectedFlair((prev) => ({ ...prev, text: e.target.value }));
  }

  /**
   * handler when click discard
   */
  function CLearHandler() {
    setSelectedFlair({});
    // setCheck(false);
  }

  /**
   * handler when click apply
   */
  function applyHandler() {
    onApply(selectedFlair);
  }

  //filtered flairs for search
  const filteredList = searchList.filter((flair) => {
    return flair.text.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  });

  return (
    <FlairModal
      show={modalShow}
      // onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Title>Select your community flair</Title>
        <XButton onClick={hide}>
          <MdOutlineClear />
        </XButton>
      </Modal.Header>
      <Modal.Body>
        {/******************************************************************************* */}
        <SelectedFlairDiv>
          {Object.keys(selectedFlair).length === 0 && "No flair selected"}
          {!(JSON.stringify(selectedFlair) === "{}") && (
            <>
              <span>u/username</span>
              <Flair
                className="selected-flair"
                style={{
                  backgroundColor: selectedFlair.backgroundColor,
                  color: selectedFlair.color,
                }}
              >
                {selectedFlair.text}
              </Flair>
            </>
          )}
        </SelectedFlairDiv>
        {/**************************************************************************** */}

        <SearchEditDiv>
          <SearchDiv>
            <SearchComponent>
              <input
                type="text"
                placeholder="Search for flair"
                value={searchValue}
                onChange={searchHandler}
              />
              <SearchIcon />
            </SearchComponent>

            <StyledForm onChange={selectFlairHandler}>
              {filteredList.map((flair, i) => {
                return (
                  <Form.Check
                    key={i}
                    type={"radio"}
                    name="flair"
                    label={
                      <Flair
                        style={{
                          backgroundColor: flair.backgroundColor,
                          color: flair.color,
                        }}
                      >
                        {flair.text}
                      </Flair>
                    }
                  ></Form.Check>
                );
              })}
            </StyledForm>
          </SearchDiv>
          {!(JSON.stringify(selectedFlair) === "{}") && (
            <EditDiv>
              <EditFlairTitle>edit flair</EditFlairTitle>
              <AllowedText>Allows text and up to 10 emojis</AllowedText>
              <div>
                <EditFlairText>
                  <InputFlairText
                    type="text"
                    maxLength="64"
                    value={selectedFlair.text}
                    onChange={changeSelectedFlairTextHandler}
                  />
                </EditFlairText>
                <CharRem>{`${
                  64 - selectedFlair.text.length
                } characters remaining`}</CharRem>
              </div>
            </EditDiv>
          )}
        </SearchEditDiv>
        {/********************************************** */}

        <ShowMyFlairDiv>
          <Form>
            <Form.Check
              type={"checkbox"}
              label={"Show my user flair on this community"}
            />
          </Form>
        </ShowMyFlairDiv>

        {/********************************************** */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={CLearHandler} className="discard">
          Clear Flair
        </Button>
        <Button variant="primary" className="save" onClick={applyHandler}>
          Apply
        </Button>
      </Modal.Footer>
    </FlairModal>
  );
};

export default SelectYourFlair;
