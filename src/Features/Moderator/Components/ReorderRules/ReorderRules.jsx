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
  // console.log("Source ",sourceIdx)
  let destIdx = parseInt(result.destination.index);
  // console.log("Destination ",destIdx)
  let draggedLink = rules[0].list[sourceIdx];
  console.log("DraggedLink ", draggedLink);
  let newList = rules[0].list.slice();
  // console.log("New List-1 ",newList)
  newList.splice(sourceIdx, 1);
  newList.splice(destIdx, 0, draggedLink);
  rules[0].list = newList;
  // console.log("New List-2 ",newList)
};
const ReorderRules = ({ showDragDrop }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DroppableRule showDragDrop={showDragDrop} rules={rules[0]} />
    </DragDropContext>
  );
};

export default ReorderRules;
