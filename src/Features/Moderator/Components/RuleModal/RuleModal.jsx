import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {
  Characters,
  FormCheck,
  FormLabel,
  ModalContainer,
  FormText,
  ReportLabel,
  ReportDefault,
  ButtonContainer,
  Footer,
  AddRuleBtn,
  CancelBtn,
} from "./RuleModal.styled";

const RuleModal = ({ showModal, closeModal, setShowModal }) => {
  // const [show, setShow] = useState(false);
  const [rule, setRule] = useState("");
  const [reasonRule, setReasonRule] = useState("");
  const [description, setDescription] = useState("");
  // state store type of community
  const [currentRadioValue, setCurrentRadioValue] = useState("posts-comments");

  /**
   * function that controls length of string in modal's inputForm
   * @param event
   */
  const handlerRules = (event) => {
    setRule(event.target.value);
  };
  const handleReason = (event) => {
    setReasonRule(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  return (
    <ModalContainer
      show={showModal}
      onHide={() => {
        closeModal();
        setRule("");
        setDescription("");
        setReasonRule("");
        setCurrentRadioValue("posts-comments");
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit rule</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Rule</Form.Label>
            <Form.Control
              as={"textarea"}
              placeholder='Rule displayed (e.g "No Photos")'
              autoFocus
              rows={2}
              value={rule}
              onChange={handlerRules}
              maxlength="100"
            />
            <Characters alarmValue={100 - rule.length}>
              {" "}
              {100 - rule.length} Characters remaining
            </Characters>
          </Form.Group>
          <FormCheck>
            <p>Applies to</p>
            <div>
              <FormLabel>
                <input
                  className="form-check-input"
                  type="radio"
                  id={"checkId-1"}
                  name="Radio"
                  value="posts-comments"
                  onChange={(e) => setCurrentRadioValue(e.target.value)}
                  defaultChecked={currentRadioValue === "posts-comments"}
                />
                <label htmlFor="checkId-1">
                  <FormText>Posts & comments</FormText>
                </label>
              </FormLabel>
              <FormLabel>
                <input
                  className="form-check-input"
                  type="radio"
                  id={"checkId-2"}
                  name="Radio"
                  value="posts-only"
                  onChange={(e) => setCurrentRadioValue(e.target.value)}
                  defaultChecked={currentRadioValue === "posts-only"}
                />
                <label htmlFor="checkId-2">
                  <FormText>Posts only</FormText>
                </label>
              </FormLabel>
              <FormLabel>
                <input
                  className="form-check-input"
                  type="radio"
                  id={"checkId-3"}
                  name="Radio"
                  value="comments-only"
                  onChange={(e) => setCurrentRadioValue(e.target.value)}
                  defaultChecked={currentRadioValue === "comments-only"}
                />
                <label htmlFor="checkId-3">
                  <FormText>Comments only</FormText>
                </label>
              </FormLabel>
            </div>
          </FormCheck>

          <Form.Group className="mb-3">
            <ReportLabel>Report reason</ReportLabel>
            <ReportDefault>Defaults to rule name if left blank</ReportDefault>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder='Reason rule is broken (eg "This is a photo")'
              onChange={handleReason}
              maxlength="100"
              value={reasonRule}
            />
            <Characters alarmValue={100 - reasonRule.length}>
              {" "}
              {100 - reasonRule.length} Characters remaining
            </Characters>
          </Form.Group>
          <Form.Group className="mb-3">
            <ReportLabel>Full description</ReportLabel>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter the full description of the rule"
              onChange={handleDescription}
              maxlength="500"
              value={description}
            />
            <Characters alarmValue={500 - description.length}>
              {" "}
              {500 - description.length} Characters remaining
            </Characters>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Footer>
        <AddRuleBtn addRule={rule.length}>Add new rule</AddRuleBtn>
        <CancelBtn onClick={() => setShowModal(false)}>cancel</CancelBtn>
        {/*TODO: delete button*/}
        {/*<ButtonContainer deleteBtn={1}>Delete</ButtonContainer>*/}
      </Footer>
    </ModalContainer>
  );
};

export default RuleModal;
