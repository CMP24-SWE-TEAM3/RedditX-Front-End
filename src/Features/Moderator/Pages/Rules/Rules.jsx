// import components
import React, { useState, useEffect } from "react";
import NavbarRule from "Features/Moderator/Components/NavbarRule/NavbarRule";
import RuleHeader from "Features/Moderator/Components/RuleHeader/RuleHeader";
import RuleTab from "Features/Moderator/Components/RuleTab/RuleTab";
import RuleModal from "Features/Moderator/Components/RuleModal/RuleModal";
import ReorderRules from "Features/Moderator/Components/ReorderRules/ReorderRules";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useParams } from "react-router-dom";
import getSubreddit from "Features/Subreddit/Services/getSubreddit";
import { RulesContainer, RuleTabContainer } from "./Rules.styled";

const Rules = () => {
  const { subredditId } = useParams();
  // console.log("IDDDDD===>", subredditId);

  // authorization's user
  const auth = useAuth();
  // Fetch communities
  // Call useFetchFunction hook to handle states: loading, error, data
  // Loading: Boolean to tell if the request has been sent, or it's still loading
  // Error: Contains error message when the request is failed
  // Data: the response data
  const [rulesList, error, isLoading, fetchData] = useFetchFunction();

  useEffect(() => {
    getSubreddit(fetchData, subredditId, auth);
  }, []);

  // state which handles displaying of modal rule
  const [showModal, setShowModal] = useState(false);
  // handle displaying of droppable rule tabs
  const [showDragDrop, setShowDragDrop] = useState(false);
  // handle edit modal rule
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <RulesContainer>
      <NavbarRule
        setShowDragDrop={setShowDragDrop}
        setShowModal={setShowModal}
      />
      <RuleHeader showNote={showDragDrop} />
      <RuleTabContainer showRuleTabs={showDragDrop}>
        {!isLoading &&
          rulesList &&
          rulesList.length !== 0 &&
          rulesList.things &&
          rulesList.things[0].communityRules.length !== 0 &&
          rulesList.things[0].communityRules.map((rule) => {
            console.log(rule);
            return (
              <RuleTab
                setShowEditModal={setShowEditModal}
                showDragDrop={showDragDrop}
                setShowModal={setShowModal}
                ruleTitle={rule.title}
                ruleDescription={rule.description}
                ruleReason={rule.reason}
              />
            );
          })}
      </RuleTabContainer>
      <ReorderRules showDragDrop={showDragDrop} />
      <RuleModal
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        setShowModal={setShowModal}
      />
    </RulesContainer>
  );
};

export default Rules;
