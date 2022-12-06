import {
  AddFlairButton,
  ContainerFlairButtons,
  ReorderButton,
} from "./BuutonsBar.styled";
import { useState } from "react";
const BuutonsBar = () => {
  const [Reorder, setReorder] = useState(false);
  return (
    <ContainerFlairButtons>
      {!Reorder && (
        <>
          <ReorderButton
            onClick={() => {
              setReorder(!Reorder);
            }}
          >
            Reorder
          </ReorderButton>
          <AddFlairButton>Add flair</AddFlairButton>
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
          <AddFlairButton>Save</AddFlairButton>
        </>
      )}
    </ContainerFlairButtons>
  );
};

export default BuutonsBar;
