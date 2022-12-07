// imports
import React, { useState } from "react";
import NavbarRule from "Features/Moderator/Components/NavbarRule/NavbarRule";
import RuleHeader from "Features/Moderator/Components/RuleHeader/RuleHeader";
import RuleTab from "Features/Moderator/Components/RuleTab/RuleTab";
import RuleModal from "Features/Moderator/Components/RuleModal/RuleModal";

const Rules = () => {
  // state which handles displaying of modal rule
  const [show, setShow] = useState(false);

  return (
    <>
      <NavbarRule setShow={setShow} />
      <RuleHeader />
      <RuleTab setShow={setShow} />
      <RuleTab setShow={setShow} />
      <RuleTab setShow={setShow} />
      <RuleModal show={show} close={() => setShow(false)} setShow={setShow} />
    </>
  );
};

export default Rules;
