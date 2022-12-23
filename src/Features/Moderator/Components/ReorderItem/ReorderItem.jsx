// import components
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ItemContainer } from "./ReorderItem.styled";

/**
 * Component that displays a list of draggble rule
 * @param {integer,Component}
 * @returns {React.Component}
 */
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
