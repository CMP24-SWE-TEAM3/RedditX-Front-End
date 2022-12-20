// import components
import React from "react";
import ReorderItem from "Features/Moderator/Components/ReorderItem/ReorderItem";
import { DroppableContainer } from "./DroppableRule.styled";
import { Droppable } from "react-beautiful-dnd";

const DroppableRule = ({ rules, showDragDrop }) => {
  let droppableHandler = (items) => {
    return items.map((item, index) => (
      <ReorderItem index={index} item={item} />
    ));
  };
  return (
    <Droppable droppableId={'1'}>
      {(provided) => (
        <DroppableContainer
          showDragDrop={showDragDrop}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {droppableHandler(rules)}
          {provided.placeholder}
        </DroppableContainer>
      )}
    </Droppable>
  );
};
export default DroppableRule;
