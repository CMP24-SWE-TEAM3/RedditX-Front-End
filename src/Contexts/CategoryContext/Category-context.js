import React from "react";
import { useState, useEffect } from "react";
const CategoryContext = React.createContext({
  Category: "",
  CategoryHandler: (Category) => {},
});
/**
 * Context for the Category Selected
 *
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
export function CategoryContextProvider(props) {
  const [Category, setCategory] = useState("");
  /**
   * Function for the Category Selected
   *
   * @param {boolean} Category  - which indicates if the Category Selected is enabled or not
   */
  const CategoryHandler = (Category) => {
    setCategory(Category);
    // console.log(Category);
  };

  return (
    <CategoryContext.Provider
      value={{
        Category: Category,
        CategoryHandler: CategoryHandler,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
}

// export default CategoryContext
export default CategoryContext;
