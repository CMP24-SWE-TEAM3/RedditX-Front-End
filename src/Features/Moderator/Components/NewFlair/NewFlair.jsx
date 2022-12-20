import { useAuth } from "Features/Authentication/Contexts/Authentication";
import FlairContext from "Features/Moderator/Contexts/Safe-context";
import fetchFlairs from "Features/Moderator/Services/fetchFlairs";
import useFetchFunction from "Hooks/useFetchFunction";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import Flair from "../Flair/Flair";

// const data = [
//   {
//     id: "item-1",
//     flairText: "Item-1",
//     FlairColor: "red",
//     flairBackGroundColor: "black",
//   },
//   {
//     id: "item-2",
//     flairText: "Item-2",
//     FlairColor: "red",
//     flairBackGroundColor: "yellow",
//   },
//   {
//     id: "item-3",
//     flairText: "Item-3",
//     FlairColor: "red",
//     flairBackGroundColor: "yellow",
//   },
//   {
//     id: "item-4",
//     flairText: "Item-4",
//     FlairColor: "red",
//     flairBackGroundColor: "yellow",
//   },
//   {
//     id: "item-5",
//     flairText: "Item-5",
//     FlairColor: "red",
//     flairBackGroundColor: "yellow",
//   },
//   {
//     id: "item-6",
//     flairText: "Item-6",
//     FlairColor: "red",
//     flairBackGroundColor: "yellow",
//   },
//   {
//     id: "item-7",
//     flairText: "Item-7",
//     FlairColor: "red",
//     flairBackGroundColor: "yellow",
//   },
//   {
//     id: "item-8",
//     flairText: "Item-8",
//     FlairColor: "red",
//     flairBackGroundColor: "yellow",
//   },
//   {
//     id: "item-9",
//     flairText: "Item-9",
//     FlairColor: "red",
//     flairBackGroundColor: "yellow",
//   },
// ];

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  console.log(result, "result");
  console.log(endIndex, "endIndex");
  console.log(startIndex, "startIndex");
  console.log(list, "list");
  return result;
};

/**
 * Component that contains render the flairs and reorder them
 *
 * @Component
 * @returns {React.Component}
 */
const NewFlair = () => {
  const auth = useAuth();
  const ctx = useContext(FlairContext);
  const [flairList, error, loading, fetch] = useFetchFunction();
  const { subredditId } = useParams();
  // console.log(flairList.flairs, "jjjjj");
  // console.log(flairList);
  const [items, setItems] = useState([]);
  let initial;
  useEffect(() => {
    fetchFlairs(fetch, auth, subredditId);
  }, [ctx.ChangeFetch]);
  if (!loading) {
    initial = flairList.flairs;
    console.log("hhhhhh");
  }
  console.log(initial, "initial");
  useEffect(() => {
    ctx.flairsDataHandler(flairList.flairs);
    setItems(flairList.flairs);
  }, [flairList.flairs]);
  useEffect(() => {
    if (ctx.CancelReorder) {
      ctx.CancelReorderHandler(false);
      setItems(ctx.flairsData);
    }
    if (ctx.saveReorder) {
      ctx.saveReorderHandler(false);
      // setItems(result);
      ctx.flairsDataHandler(initial);
    }
  }, [ctx.CancelReorder, ctx.saveReorder, ctx.Reorder]);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    // console.log({ reorderedItems });
    setItems(reorderedItems);
  };
  return (
    <div className="main_content">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              // style={getListStyle(snapshot.isDraggingOver)}
            >
              {items &&
                items.map((item, index) => (
                  <Draggable
                    key={item._id}
                    draggableId={item._id}
                    index={index}
                    isDragDisabled={!ctx.Reorder}
                  >
                    {(provided, snapshot) => (
                      <Flair
                        innerRef={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        text={item.flairText}
                        color={item.flairTextColor}
                        background={item.flairBackGround}
                        isNew={false}
                        id={item._id}
                      />
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default NewFlair;
