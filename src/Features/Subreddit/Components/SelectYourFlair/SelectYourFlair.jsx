import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { HiXMark } from "react-icons/hi2";
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
  XButton
} from "./SelectYourFlair.styled";

const SelectYourFlair = ({modalShow, hide, onApply}) => {
  const [selectedFlair, setSelectedFlair] = useState({});
  const [searchValue, setSearchValue] = useState("");
  // const [check, setCheck] = useState(false);

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

  function searchHandler(e) {
    setSearchValue(e.target.value);
  }

  function selectFlairHandler(e) {
    // setCheck(true);
    setSelectedFlair({
      text: e.target.nextElementSibling.firstChild.innerText,
      color: e.target.nextElementSibling.firstChild.style.color,
      backgroundColor:
        e.target.nextElementSibling.firstChild.style.backgroundColor,
    });
  }

  function changeSelectedFlairTextHandler(e) {
    setSelectedFlair((prev) => ({ ...prev, text: e.target.value }));
  }

  function CLearHandler() {
    setSelectedFlair({});
    // setCheck(false);
  }

  function applyHandler(){
    onApply(selectedFlair)
  }

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
      <Modal.Header >
        <Title>Select your community flair</Title>
        <XButton onClick={hide}>
          <HiXMark />
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

            <StyledForm onChange={selectFlairHandler} >
              {filteredList.map((flair) => {
                return (
                  <Form.Check
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
