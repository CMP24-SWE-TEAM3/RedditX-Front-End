import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import getSubreddit from "Features/Subreddit/Services/getSubreddit";
import { useParams } from "react-router-dom";
import createRule from "Features/Moderator/Services/createRule";
import {
  Characters,
  FormCheck,
  FormLabel,
  ModalContainer,
  FormText,
  ReportLabel,
  ReportDefault,
  Footer,
  AddRuleBtn,
  CancelBtn,
  DeleteBtn,
  UsedBefore,
} from "./RuleModal.styled";

const RuleModal = ({
  showModal,
  closeModal,
  setShowModal,
  showEditModal,
  setShowEditModal,
}) => {
  // get name of community
  const { subredditId } = useParams();
  // const [show, setShow] = useState(false);
  const [rule, setRule] = useState("");
  const [reasonRule, setReasonRule] = useState("");
  const [description, setDescription] = useState("");
  // state store type of community
  const [currentRadioValue, setCurrentRadioValue] = useState("posts-comments");
  // state for rule is used or not
  const [isUsedRule, setIsUsedRule] = useState(false);

  // authorization's user
  const auth = useAuth();
  // Fetch communities
  // Call useFetchFunction hook to handle states: loading, error, data
  // Loading: Boolean to tell if the request has been sent, or it's still loading
  // Error: Contains error message when the request is failed
  // Data: the response data
  const [rulesList, error, isLoading, fetchRules] = useFetchFunction();
  const [ruleResponse, errorResponse, isLoadingResponse, fetchData] =
    useFetchFunction();

  useEffect(() => {
    getSubreddit(fetchRules, subredditId, auth);
  }, []);

  useEffect(() => {
    let flag = 0;
    if (
      !isLoading &&
      rulesList &&
      rulesList.things &&
      rulesList.things[0].communityRules
    ) {
      let result = rulesList.things[0].communityRules;
      result.map((el) => {
        if (el.title === rule && rule !== "") {
          console.log(el.title);
          setIsUsedRule(true);
          flag = 1;
        }
      });
      if (!flag) {
        setIsUsedRule(false);
      }
    }
  }, [rule]);

  const handleCreateRule = () => {
    if (!isUsedRule) {
      createRule(fetchData, auth, {
        srName: subredditId,
        rule: {
          title: rule,
          description: description,
          reason: reasonRule,
        },
      });
      resetModal();
      closeModal();
    }
  };
  const resetModal = () => {
    setRule("");
    setDescription("");
    setReasonRule("");
    setCurrentRadioValue("posts-comments");
    setShowEditModal(false);
  };

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
        resetModal();
        closeModal();
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

            {isUsedRule && (
              <UsedBefore>
                You have another rule with this title. Please change.
              </UsedBefore>
            )}
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
        {!showEditModal && (
          <AddRuleBtn
            onClick={handleCreateRule}
            addRule={rule.length > 0 && !isUsedRule}
          >
            Add new rule
          </AddRuleBtn>
        )}
        {showEditModal && <AddRuleBtn addRule={rule.length}>Save</AddRuleBtn>}
        <CancelBtn
          onClick={() => {
            setShowModal(false);
            setShowEditModal(false);
          }}
        >
          cancel
        </CancelBtn>
        <DeleteBtn show={showEditModal}>Delete</DeleteBtn>
      </Footer>
    </ModalContainer>
  );
};

export default RuleModal;
