import React, { useState } from "react";
import {
  Container,
  AddRuleBtn,
  ReorderBtn,
  CancelBtn,
  SaveBtn,
} from "./NavbarRule.styled";
/**
 * Component that displays the navigation of rules
 * @returns {React.Component}
 */
const NavbarRule = ({ setShowModal, setShowDragDrop }) => {
  // handle showing drag drop
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
