import React from "react";
import { Container, AddRuleBtn, RecordBtn } from "./NavbarRule.styled";

const NavbarRule = () => {
  return (
    <Container>
      <RecordBtn>Reorder rules</RecordBtn>
      <AddRuleBtn>Add rule</AddRuleBtn>
    </Container>
  );
};

export default NavbarRule;
