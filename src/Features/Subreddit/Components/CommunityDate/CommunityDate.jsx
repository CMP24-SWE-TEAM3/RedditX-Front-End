import { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FiEyeOff } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { TbCake } from "react-icons/tb";
import SaveChangesModal from "../SaveChangesModal/SaveChangesModal";
import {
  AddDescription,
  BirthDay,
  ButtonsContainer,
  CancelButton,
  CharContainer,
  DescriptionContainer,
  DescriptionContent,
  DescriptionInnerContainer,
  InputContainer,
  Private,
  SaveButton
} from "./CommunityDate.styled";

const CommunityDate = () => {
  const [description, setDescription] = useState("hiiiiiiii");
  const [inputFocus, setInputFocus] = useState(false);
  const [dummyDescription, setDummyDescription] = useState(description);
  const [modalShow, setModalShow] = useState(false);
  let isPrivate = true;

  function inputHandler(e) {
    setDescription(e.target.value);
  }
  function AddDescriptionHandler() {
    setInputFocus(true);
  }
  function blurInputHandler(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      if (dummyDescription !== description) {
        setModalShow(true);
      } else setInputFocus(false);
    }
  }
  function cancelHandler() {
    setDescription(dummyDescription);
    setInputFocus(false);
  }
  function saveHandler() {
    setDummyDescription(description);
    setInputFocus(false);
  }

  function discardHandler() {
    setDescription(dummyDescription);
    setInputFocus(false);
    setModalShow(false);
  }

  function saveModalHandler() {
    setDummyDescription(description);
    setInputFocus(false);
    setModalShow(false);
  }

  const Description = (props) => {
    return (
      <DescriptionContainer onClick={props.onClick}>
        <DescriptionInnerContainer>
          <DescriptionContent>
            {description}
            <span className="icon">
              <HiOutlinePencil />
            </span>
          </DescriptionContent>
        </DescriptionInnerContainer>
      </DescriptionContainer>
    );
  };

  return (
    <>
      {!inputFocus && !description && (
        <AddDescription onClick={AddDescriptionHandler}>
          <div>Add description</div>
        </AddDescription>
      )}
      {!inputFocus && description && (
        <Description onClick={AddDescriptionHandler} />
      )}
      {inputFocus && (
        <InputContainer onBlur={blurInputHandler}>
          <textarea
            value={description}
            placeholder="Tell Us about your community"
            onChange={inputHandler}
            autoFocus
          ></textarea>
          <ButtonsContainer>
            <CharContainer>
              {500 - description.length + " Characters remaining"}
            </CharContainer>
            <CancelButton onClick={cancelHandler}>Cancel</CancelButton>
            <SaveButton onClick={saveHandler}>Save</SaveButton>
          </ButtonsContainer>
        </InputContainer>
      )}
      <OverlayTrigger
        placement={"bottom"}
        overlay={<Tooltip>16 days ago</Tooltip>}
        delay="200"
      >
        <BirthDay>
          <div className="cake-day">
            <span className="icon">
              <TbCake />
            </span>

            <span className="text">Created Oct 17, 2022</span>
          </div>
        </BirthDay>
      </OverlayTrigger>
      {isPrivate && (
        <Private>
          <div className="container">
            <OverlayTrigger
              placement={"top"}
              overlay={
                <Tooltip>
                  Only approved users can view and submit to this community
                </Tooltip>
              }
              delay="200"
            >
              <span className="icon">
                <FiEyeOff />
              </span>
            </OverlayTrigger>
            <span className="text">Private</span>
          </div>
        </Private>
      )}
      <SaveChangesModal
        show={modalShow}
        onDiscard={discardHandler}
        onSave={saveModalHandler}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default CommunityDate;
