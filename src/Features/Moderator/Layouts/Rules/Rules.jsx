// import components
import React, { useState } from "react";
import NavbarRule from "Features/Moderator/Components/NavbarRule/NavbarRule";
import RuleHeader from "Features/Moderator/Components/RuleHeader/RuleHeader";
import RuleTab from "Features/Moderator/Components/RuleTab/RuleTab";
import RuleModal from "Features/Moderator/Components/RuleModal/RuleModal";
import ReorderRules from "Features/Moderator/Components/ReorderRules/ReorderRules";
import { RuleTabContainer } from "./Rules.styled";

const Rules = () => {
  // state which handles displaying of modal rule
  const [showModal, setShowModal] = useState(false);
  // handle displaying of droppable rule tabs
  const [showDragDrop, setShowDragDrop] = useState(false);
  return (
    <>
      <NavbarRule
        setShowDragDrop={setShowDragDrop}
        setShowModal={setShowModal}
      />
      <RuleHeader showNote={showDragDrop} />
      <RuleTabContainer defaultActiveKey="1" showRuleTabs={showDragDrop}>
        <RuleTab
          collapse={"0"}
          showDragDrop={showDragDrop}
          setShowModal={setShowModal}
        />
        <RuleTab
          collapse={"2"}
          showDragDrop={showDragDrop}
          setShowModal={setShowModal}
        />
        <RuleTab
          collapse={"3"}
          showDragDrop={showDragDrop}
          setShowModal={setShowModal}
        />
      </RuleTabContainer>
      <RuleTabContainer defaultActiveKey="1">
        <ReorderRules showDragDrop={showDragDrop} />
      </RuleTabContainer>
      <RuleModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Rules;
