import React, { useState } from "react";
import {
  Adult,
  AdultCheck,
  AlarmInput,
  CheckFormContainer,
  CloseBtn,
  Content,
  CreateBtn,
  FormCheckContainer,
  FormCheckLabel,
  FormInput,
  Ico,
  LabelForm,
  ModalStyled,
  NSFW,
} from "./ModalCommunity.styled";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { BsFillPersonFill } from "react-icons/bs";
import { VscEye } from "react-icons/vsc";
import { HiLockClosed } from "react-icons/hi";
import { CgDanger } from "react-icons/cg";
import createCommunity from "Services/createCommunity";

/**
 * Component that has been showed after clicking on create community button in home page .
 *
 * @params {boolean,boolean}  create community button isLoggedIn is true if  loggedIn and false otherwise
 * @returns {Modal} returns a modal that shows the user's create community form
 */

const ModalCommunity = ({ show, close }) => {
  /**
   * state of the community which tracks string is shown in input filed in modal
   */
  const [communityName, setCommunityName] = useState("");
   // state store type of community
   const [currentRadioValue, setCurrentRadioValue] = useState("public");
   // state store if NSFW or not
   const [currentCheckBoxValue, setCurrentCheckBoxValue] = useState(false);

  /**
   * function that controls length of string in modal's inputForm
   * @param event
   */
  const handlerChars = (event) => {
    setCommunityName(event.target.value);
  };

  /**
   * function that handle form after submitting modal's form
   * @param event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    // alert(`Radio button ${currentRadioValue}`);
    // alert(`CheckBox button ${currentCheckBoxValue}`);
    // alert(`The Community name you entered was: ${communityName}`);
  };
 
  return (
    <ModalStyled show={show} onHide={close} id={"modal"}>
      <Modal.Header closeButton>
        <Modal.Title>Create a community</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Name</h6>
        <p data-testid="modalID">
          Community names including capitalization cannot be changed.{" "}
          <span>
            {" "}
            <CgDanger size={20} />
          </span>
        </p>
        <Form id={"community-form"} method={"post"} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              id={"text-input"}
              value={communityName}
              onChange={handlerChars}
              aria-required
              type={"text"}
              maxlength="21"
            />
          </Form.Group>

          <AlarmInput alarmValue={21 - communityName.length}>
            {" "}
            {21 - communityName.length} Characters remaining
          </AlarmInput>
        </Form>
        <CheckFormContainer>
          <h6>Community type</h6>
          <FormCheckContainer>
            <input
              className="form-check-input"
              type="radio"
              name="radio-input"
              value="public"
              id="public"
              onChange={(e) => setCurrentRadioValue(e.target.value)}
              defaultChecked={currentRadioValue === "public"}
            />
            <LabelForm for="public">
              <Ico>
                <BsFillPersonFill />
              </Ico>
              <FormCheckLabel for="public">Public</FormCheckLabel>
              <Content>
                Anyone can view, post, and comment to this community
              </Content>
            </LabelForm>
          </FormCheckContainer>
          <FormCheckContainer>
            <input
              className="form-check-input"
              type="radio"
              value={"restricted"}
              aria-label={"checked"}
              name="radio-input"
              id="restricted"
              onChange={(e) => setCurrentRadioValue(e.target.value)}
              defaultChecked={currentRadioValue === "restricted"}
            />
            <LabelForm for="restricted">
              <Ico>
                <VscEye />
              </Ico>
              <FormCheckLabel for="restricted">Restricted</FormCheckLabel>
              <Content>
                Anyone can view this community, but only approved users can post
              </Content>
            </LabelForm>
          </FormCheckContainer>
          <FormCheckContainer>
            <input
              className="form-check-input"
              type="radio"
              value="private"
              name="radio-input"
              id="private"
              onChange={(e) => setCurrentRadioValue(e.target.value)}
              defaultChecked={currentRadioValue === "private"}
            />
            <LabelForm for="private">
              <Ico>
                <HiLockClosed />
              </Ico>
              <FormCheckLabel for="private">Private</FormCheckLabel>
              <Content>
                Only approved users can view and submit to this community
              </Content>
            </LabelForm>
          </FormCheckContainer>
        </CheckFormContainer>
        <div>
          <Adult>Adult content</Adult>
          <AdultCheck>
            <input
              className="form-check-input w-5vm"
              type="checkbox"
              id="nsfw"
              value=""
              onChange={(e) => setCurrentCheckBoxValue(e.target.checked)}
            />
            <NSFW>NSFW</NSFW>
            <FormCheckLabel for="nsfw">18+ year old community</FormCheckLabel>
          </AdultCheck>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <CloseBtn id={"close-button"} onClick={()=>{close();handleSubmit();}}>
          Close
        </CloseBtn>
        <CreateBtn
          id={"create-community-form"}
          type={"submit"}
          form={"community-form"}
        >
          Create Community
        </CreateBtn>
      </Modal.Footer>
    </ModalStyled>
  );
};
export default ModalCommunity;
