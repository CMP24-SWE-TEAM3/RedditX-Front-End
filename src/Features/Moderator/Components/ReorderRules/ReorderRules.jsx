import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableRule from "Features/Moderator/Components/DroppableRule/DroppableRule";
import RuleTab from "Features/Moderator/Components/RuleTab/RuleTab";

// for testing
let rules = [
  {
    id: "1",
    list: [
      <RuleTab showDragDrop={true} name={"1"} />,
      <RuleTab showDragDrop={true} name={"2"} />,
      <RuleTab showDragDrop={true} name={"3"} />,
    ],
  },
];

let onDragEnd = (result) => {
  if (!result.destination) {
    return;
  }
  let sourceIdx = parseInt(result.source.index);
  let destIdx = parseInt(result.destination.index);
  let draggedLink = rules[0].list[sourceIdx];
  let newList = rules[0].list.slice();
  newList.splice(sourceIdx, 1);
  newList.splice(destIdx, 0, draggedLink);
  rules[0].list = newList;
};
const ReorderRules = ({ showDragDrop }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DroppableRule showDragDrop={showDragDrop} rules={rules[0]} />
    </DragDropContext>
  );
};

export default ReorderRules;
