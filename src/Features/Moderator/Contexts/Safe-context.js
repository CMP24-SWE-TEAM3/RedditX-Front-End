import React from "react";
import { useState, useEffect } from "react";
const FlairContext = React.createContext({
  Edit: false,
  EditHandler: (Edit) => {},
  ChangeFetch: false,
  ChangeFetchHandler: (ChangeFetch) => {},
  Add: false,
  AddHandler: (Add) => {},
  Reorder: false,
  ReorderHandler: (Reorder) => {},
  CancelReorder: false,
  CancelReorderHandler: (CancelReorder) => {},
  saveReorder: false,
  saveReorderHandler: (saveReorder) => {},
  flairsData: [],
  flairsDataHandler: (flairsData) => {},
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
  const [flairsData, setflairsData] = useState([]);
  const [ChangeFetch, setChangeFetch] = useState([]);
  /**
   * function to handle Edit Flair State
   * @param {boolean} Edit -  Edit Flair State
   */
  const EditHandler = (Edit) => {
    setEdit(Edit);
    console.log(Edit);
  };
  /**
   * function to handle Add Flair
   * @param {boolean} Add -  Add Flair State
   */
  const AddHandler = (Add) => {
    setAdd(Add);
    console.log(Add);
  };
  /**
   * function to handle Reorder Flair
   * @param {boolean} Reorder -  Reorder Flair State
   */
  const ReorderHandler = (Reorder) => {
    setReorder(Reorder);
    console.log(Reorder);
  };
  /**
   * function to handle CancelReorder Flair
   * @param {boolean} CancelReorder -  CancelReorder Flair State
   */
  const CancelReorderHandler = (CancelReorder) => {
    setCancelReorder(CancelReorder);
    console.log(CancelReorder);
  };
  /**
   * function to handle saveReorder of Flairs order
   * @param {boolean} saveReorder  -  saveReorder  Flair State
   */
  const saveReorderHandler = (saveReorder) => {
    setsaveReorder(saveReorder);
    console.log(saveReorder);
  };
  /**
   * function to handle flairsData order
   * @param {object} flairsData  -  current order
   */
  const flairsDataHandler = (flairsData) => {
    setflairsData(flairsData);
    console.log(flairsData);
  };
  /**
   * function to handle ChangeFetch order
   * @param {object} ChangeFetch  -  current order
   */
  const ChangeFetchHandler = (ChangeFetch) => {
    setChangeFetch(ChangeFetch);
    console.log(ChangeFetch);
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
        flairsData: flairsData,
        flairsDataHandler: flairsDataHandler,
        ChangeFetch: ChangeFetch,
        ChangeFetchHandler: ChangeFetchHandler,
      }}
    >
      {props.children}
    </FlairContext.Provider>
  );
}

// export default FlairContext
export default FlairContext;
