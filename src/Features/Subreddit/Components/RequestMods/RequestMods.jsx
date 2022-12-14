import Modal from "react-bootstrap/Modal";
import { MdOutlineClear } from "react-icons/md";
import {
  BodyTextContainer,
  CancelButton,
  ModalCommunity,
  ModalHeaderContainer,
  ModalHeaderTitle,
  StyledLabel,
  StyledModal,
  StyledSpan,
  SubmitButton,
  TextAreaContainer,
  Title,
  XButton,
} from "./RequestMods.styled";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import { useState } from "react";

const RequestMods = ({ modalShow, hide, isPriv }) => {
  const [value, setValue] = useState(
    isPriv
      ? "I would like to join this community."
      : "I would like to become an approved user of this community so I can post"
  );

  const { communityID } = useSubRedditID();

  function changeTextareaHandler(e) {
    setValue(e.target.value);
  }

  return (
    <StyledModal
      show={modalShow}
      // onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      priv={isPriv ? 1 : 0}
    >
      <Modal.Header>
        <ModalHeaderContainer>
          <div>
            <ModalHeaderTitle priv={isPriv ? 1 : 0}>
              {isPriv && <Title>Request to join</Title>}
              {!isPriv && <Title>Become an approved user of</Title>}
              <ModalCommunity>
                {communityID && `r/${communityID.substring(3)}`}
              </ModalCommunity>
            </ModalHeaderTitle>
          </div>
          <XButton onClick={hide}>
            <MdOutlineClear />
          </XButton>
        </ModalHeaderContainer>
      </Modal.Header>

      <Modal.Body>
        {isPriv && (
          <BodyTextContainer>
            Write a short message to the moderators explaining why you want to
            join.
          </BodyTextContainer>
        )}
        {!isPriv && communityID && (
          <BodyTextContainer>
            {` Only approved users can post in r/${communityID.substring(
              3
            )}. To become an approved
            user, send a request to the moderators.`}
          </BodyTextContainer>
        )}
        <TextAreaContainer>
          <StyledLabel text={value}>
            <textarea value={value} onChange={changeTextareaHandler} />
            <StyledSpan>message to moderators</StyledSpan>
          </StyledLabel>
        </TextAreaContainer>
      </Modal.Body>

      <Modal.Footer>
        <CancelButton onClick={hide}>cancel</CancelButton>
        <SubmitButton>Send Request</SubmitButton>
      </Modal.Footer>
    </StyledModal>
  );
};

export default RequestMods;
