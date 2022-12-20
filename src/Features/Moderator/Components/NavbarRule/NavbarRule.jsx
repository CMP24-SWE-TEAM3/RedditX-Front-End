import React, { useState } from "react";
import {
  Container,
  AddRuleBtn,
  ReorderBtn,
  CancelBtn,
  SaveBtn,
} from "./NavbarRule.styled";

const NavbarRule = ({ setShowModal, setShowDragDrop, setEditor }) => {
  const [showReorder, setShowReorder] = useState(false);
  const handleShow = () => {
    setShowReorder(!showReorder);
  };
  return (
    <Container>
      <ReorderBtn
        showReorder={showReorder}
        onClick={() => {
          handleShow();
          setShowDragDrop(true);
        }}
      >
        Reorder rules
      </ReorderBtn>
      <AddRuleBtn
        showReorder={showReorder}
        onClick={() => {
          setShowModal(true);
          // setEditor(null);
        }}
      >
        Add rule
      </AddRuleBtn>
      <CancelBtn
        onClick={() => {
          handleShow();
          setShowDragDrop(false);
        }}
        showReorder={showReorder}
      >
        Cancel
      </CancelBtn>
      <SaveBtn showReorder={showReorder}>Save</SaveBtn>
    </Container>
  );
};

export default NavbarRule;
