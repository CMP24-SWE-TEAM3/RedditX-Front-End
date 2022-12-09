import {
  AddFlairButton,
  ContainerFlairButtons,
  ReorderButton,
} from "./BuutonsBar.styled";
import { useState } from "react";
import { useContext } from "react";
import FlairContext from "Features/Moderator/Contexts/Safe-context";
import context from "react-bootstrap/esm/AccordionContext";

/**
 * Component that contains the BuutonsBar
 *
 * @Component
 * @returns {React.Component}
 */
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
              ctx.AddHandler(false);
            }}
            disabled={ctx.Edit}
            title="reorder"
          >
            Reorder
          </ReorderButton>
          <AddFlairButton
            disabled={ctx.Edit}
            onClick={() => {
              ctx.AddHandler(true);
            }}
            title="AddFlair"
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
            title="Cancel"
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
            title="Save"
          >
            Save
          </AddFlairButton>
        </>
      )}
    </ContainerFlairButtons>
  );
};

export default BuutonsBar;
