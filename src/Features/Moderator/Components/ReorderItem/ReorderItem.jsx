// import components
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ItemContainer } from "./ReorderItem.styled";

const ReorderItem = ({ index, item }) => {
  return (
    <Draggable draggableId={`${index}`} index={index}>
      {(provided, snapshot) => (
        <ItemContainer
          item={item}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item}
        </ItemContainer>
      )}
    </Draggable>
  );
};
export default ReorderItem;
