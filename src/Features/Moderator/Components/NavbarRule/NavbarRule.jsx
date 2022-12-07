import React from "react";
import { Container, AddRuleBtn, RecordBtn } from "./NavbarRule.styled";

const NavbarRule = ({ setShow }) => {
  return (
    <Container>
      <RecordBtn>Reorder rules</RecordBtn>
      <AddRuleBtn onClick={() => setShow(true)}>Add rule</AddRuleBtn>
    </Container>
  );
};

export default NavbarRule;
