import React, { useState, useEffect } from "react";
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
  UsedCommunity,
} from "./ModalCommunity.styled";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { BsFillPersonFill } from "react-icons/bs";
import { VscEye } from "react-icons/vsc";
import { HiLockClosed } from "react-icons/hi";
import { CgDanger } from "react-icons/cg";
import createCommunity from "Services/createCommunity";
import ModalAfterCreateCommunity from "Components/ModalAfterCreateCommunity/ModalAfterCreateCommunity";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";

/**
 * Component that has been showed after clicking on create community button in home page .
 *
 * @params {boolean,boolean}  create community button isLoggedIn is true if  loggedIn and false otherwise
 * @returns {Modal} returns a modal that shows the user's create community form
 */

const ModalCommunity = ({ showModal, setShoweModal, close }) => {
  const auth = useAuth();
  // Fetch notifications
  // Call useFetchFunction hook to handle states: loading, error, data
  // Loading: Boolean to tell if the request has been sent, or it's still loading
  // Error: Contains error message when the request is failed
  // Data: the response data
  const [response, error, isLoading, fetchData] = useFetchFunction();
  // console.log("Out==>", response);

  /**
   * state of the community which tracks string is shown in input filed in modal
   */
  const [communityName, setCommunityName] = useState("");
  // state store type of community
  const [currentRadioValue, setCurrentRadioValue] = useState("public");
  // state store if NSFW or not
  const [currentCheckBoxValue, setCurrentCheckBoxValue] = useState(false);
  // state handles show modal after create community
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  /// state that handles if community is used or not
  const [showUsedCommunity, setUsedCommunity] = useState(false);
  /**
   * function that controls length of string in modal's inputForm
   * @param event
   */
  const handlerChars = (event) => {
    setCommunityName(event.target.value);
  };

  /**
   * Function to handle create community
   * @param event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    createCommunity(fetchData, auth, {
      name: `t5_${communityName}`,
      type: currentRadioValue,
      over18: currentCheckBoxValue,
    });
  };
  // effect if any change happened on response
  useEffect(() => {
    if (response.status === undefined) return;
    console.log("Passed");
    if (response.status === "subreddit is already made") setUsedCommunity(true);
    else setUsedCommunity(false);

    if (!showUsedCommunity) {
      setShoweModal(false);
      setShowWelcomeModal(true);
    }
  }, [response]);

  return (
    <>
      <ModalStyled
        show={showModal}
        onHide={() => {
          close();
          setCommunityName("");
        }}
        id={"modal"}
      >
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                id={"text-input"}
                value={communityName}
                onChange={handlerChars}
                aria-required
                type={"text"}
                maxLength="21"
              />
            </Form.Group>
            <AlarmInput alarmValue={21 - communityName.length}>
              {" "}
              {21 - communityName.length} Characters remaining
            </AlarmInput>

            {showUsedCommunity && (
              <UsedCommunity>
                <span>Sorry, r/{communityName} is taken. Try another.</span>
              </UsedCommunity>
            )}
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
              <LabelForm htmlFor="public">
                <Ico>
                  <BsFillPersonFill />
                </Ico>
                <FormCheckLabel htmlFor="public">Public</FormCheckLabel>
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
              <LabelForm htmlFor="restricted">
                <Ico>
                  <VscEye />
                </Ico>
                <FormCheckLabel htmlFor="restricted">Restricted</FormCheckLabel>
                <Content>
                  Anyone can view this community, but only approved users can
                  post
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
              <LabelForm htmlFor="private">
                <Ico>
                  <HiLockClosed />
                </Ico>
                <FormCheckLabel htmlFor="private">Private</FormCheckLabel>
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
                onChange={(e) => setCurrentCheckBoxValue(e.target.checked)}
              />
              <NSFW>NSFW</NSFW>
              <FormCheckLabel htmlFor="nsfw">
                18+ year old community
              </FormCheckLabel>
            </AdultCheck>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <CloseBtn
            id={"close-button"}
            onClick={() => {
              close();
              setCommunityName("");
            }}
          >
            Close
          </CloseBtn>
          <CreateBtn id={"create-community-form"} onClick={handleSubmit}>
            Create Community
          </CreateBtn>
        </Modal.Footer>
      </ModalStyled>
      {showWelcomeModal && (
        <ModalAfterCreateCommunity
          showModal={showWelcomeModal}
          setShowWelcomeModal={setShowWelcomeModal}
        />
      )}
    </>
  );
};
export default ModalCommunity;
