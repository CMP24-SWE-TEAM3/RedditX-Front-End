import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableRule from "Features/Moderator/Components/DroppableRule/DroppableRule";
import RuleTab from "Features/Moderator/Components/RuleTab/RuleTab";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useParams } from "react-router-dom";
import getSubreddit from "Features/Subreddit/Services/getSubreddit";

const ReorderRules = ({ showDragDrop }) => {
  const { subredditId } = useParams();
  let Rules = [];
  // authorization's user
  const auth = useAuth();
  // Fetch communities
  // Call useFetchFunction hook to handle states: loading, error, data
  // Loading: Boolean to tell if the request has been sent, or it's still loading
  // Error: Contains error message when the request is failed
  // Data: the response data
  const [rulesList, error, isLoading, fetchData] = useFetchFunction();

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    let sourceIdx = parseInt(result.source.index);
    let destIdx = parseInt(result.destination.index);
    let draggedLink = Rules.list[sourceIdx];
    let newList = Rules.list.slice();
    newList.splice(sourceIdx, 1);
    newList.splice(destIdx, 0, draggedLink);
    Rules.list = newList;
  };

  useEffect(() => {
    getSubreddit(fetchData, subredditId, auth);
  }, []);

  if (
    rulesList &&
    rulesList.length !== 0 &&
    rulesList.things &&
    rulesList.things[0].communityRules
  ) {
    for (let i = 0; i < rulesList.things[0].communityRules.length; i++) {
      Rules.push(
        <RuleTab
          showDragDrop={true}
          number={i + 1}
          ruleTitle={rulesList.things[0].communityRules[i].title}
        />
      );
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DroppableRule showDragDrop={showDragDrop} rules={Rules} />
    </DragDropContext>
  );
};

export default ReorderRules;
