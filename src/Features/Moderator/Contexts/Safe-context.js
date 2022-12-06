import React from "react";
import { useState, useEffect } from "react";
const FlairContext = React.createContext({
  Edit: false,
  EditHandler: (Edit) => {},
  Add: false,
  AddHandler: (Add) => {},
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

  const EditHandler = (Edit) => {
    setEdit(Edit);
    console.log(Edit);
  };
  const AddHandler = (Add) => {
    setAdd(Add);
    console.log(Add);
  };
  return (
    <FlairContext.Provider
      value={{
        Edit: Edit,
        EditHandler: EditHandler,
        Add: Add,
        AddHandler: AddHandler,
      }}
    >
      {props.children}
    </FlairContext.Provider>
  );
}

// export default FlairContext
export default FlairContext;
