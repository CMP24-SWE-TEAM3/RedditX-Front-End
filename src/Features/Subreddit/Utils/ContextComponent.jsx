import { DataContext } from "../Services/DataContext";
import data from "../Services/data.json";
import { useState } from "react";

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