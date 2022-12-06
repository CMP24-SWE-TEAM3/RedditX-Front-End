import {
  AddFlairButton,
  ContainerFlairButtons,
  ReorderButton,
} from "./BuutonsBar.styled";
import { useState } from "react";
import { useContext } from "react";
import FlairContext from "Features/Moderator/Contexts/Safe-context";
import context from "react-bootstrap/esm/AccordionContext";
const BuutonsBar = () => {
  const [DisReorder, setDisReorder] = useState(false);
  const [DisAdd, setDisAdd] = useState(false);
  const [DisSave, setDisSave] = useState(false);
  const [Reorder, setReorder] = useState(false);
  const ctx = useContext(FlairContext);
  return (
    <ContainerFlairButtons>
      {!Reorder && (
        <>
          <ReorderButton
            onClick={() => {
              setReorder(!Reorder);
              ctx.ReorderHandler(true);
            }}
            disabled={ctx.Edit}
          >
            Reorder
          </ReorderButton>
          <AddFlairButton
            disabled={ctx.Edit}
            onClick={() => {
              ctx.AddHandler(true);
            }}
          >
            Add flair
          </AddFlairButton>
        </>
      )}
      {Reorder && (
        <>
          <ReorderButton
            onClick={() => {
              setReorder(!Reorder);
              ctx.ReorderHandler(false);
              ctx.CancelReorderHandler(true);
            }}
          >
            Cancel
          </ReorderButton>
          <AddFlairButton
            disabled={DisSave}
            onClick={() => {
              ctx.AddHandler(false);
              ctx.ReorderHandler(false);
              setReorder(!Reorder);
              ctx.saveReorderHandler(true);
            }}
          >
            Save
          </AddFlairButton>
        </>
      )}
    </ContainerFlairButtons>
  );
};

export default BuutonsBar;
