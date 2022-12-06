import {
  AddFlairButton,
  ContainerFlairButtons,
  ReorderButton,
} from "./BuutonsBar.styled";
import { useState } from "react";
import { useContext } from "react";
import FlairContext from "Features/Moderator/Contexts/Safe-context";
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
            }}
          >
            Cancel
          </ReorderButton>
          <AddFlairButton disabled={DisSave}>Save</AddFlairButton>
        </>
      )}
    </ContainerFlairButtons>
  );
};

export default BuutonsBar;
