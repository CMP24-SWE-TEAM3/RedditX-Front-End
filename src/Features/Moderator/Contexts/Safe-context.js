import React from "react";
import { useState, useEffect } from "react";
const FlairContext = React.createContext({
  Edit: false,
  EditHandler: (Edit) => {},
  Add: false,
  AddHandler: (Add) => {},
  Reorder: false,
  ReorderHandler: (Reorder) => {},
  CancelReorder: false,
  CancelReorderHandler: (CancelReorder) => {},
  saveReorder: false,
  saveReorderHandler: (saveReorder) => {},
});
/**
 * Context for the Edit Flair
 *
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
export function EditContextProvider(props) {
  const [Edit, setEdit] = useState(false);
  const [Add, setAdd] = useState(false);
  const [Reorder, setReorder] = useState(false);
  const [CancelReorder, setCancelReorder] = useState(false);
  const [saveReorder, setsaveReorder] = useState(false);

  const EditHandler = (Edit) => {
    setEdit(Edit);
    console.log(Edit);
  };
  const AddHandler = (Add) => {
    setAdd(Add);
    console.log(Add);
  };
  const ReorderHandler = (Reorder) => {
    setReorder(Reorder);
    console.log(Reorder);
  };
  const CancelReorderHandler = (CancelReorder) => {
    setCancelReorder(CancelReorder);
    console.log(CancelReorder);
  };
  const saveReorderHandler = (saveReorder) => {
    setsaveReorder(saveReorder);
    console.log(saveReorder);
  };
  return (
    <FlairContext.Provider
      value={{
        Edit: Edit,
        EditHandler: EditHandler,
        Add: Add,
        AddHandler: AddHandler,
        Reorder: Reorder,
        ReorderHandler: ReorderHandler,
        CancelReorder: CancelReorder,
        CancelReorderHandler: CancelReorderHandler,
        saveReorder: saveReorder,
        saveReorderHandler: saveReorderHandler,
      }}
    >
      {props.children}
    </FlairContext.Provider>
  );
}

// export default FlairContext
export default FlairContext;
