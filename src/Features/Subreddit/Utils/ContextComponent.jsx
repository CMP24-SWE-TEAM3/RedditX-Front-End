import { DataContext } from "../Services/DataContext";
import data from "../Services/data.json";
import React, { useState } from "react";



/**
 * The ContextComponent function is a React component that provides the data context to the children of
 * the component.
 * @returns {React.Component}The data is being returned.
 */
const ContextComponent = ({ children }) => {

const [category, setCategory] = useState(data);
const providedData = { category, setCategory };
  return (
    <DataContext.Provider value={providedData}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextComponent;