import React from "react";
import { useState, useEffect } from "react";
const CategoryContext = React.createContext({
  Category: "",
  CategoryHandler: (Category) => {},
  ReFetch: false,
  ReFetchHandler: (ReFetch) => {},
});
/**
 * Context for the Category Selected
 *
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
export function CategoryContextProvider(props) {
  const [Category, setCategory] = useState("");
  const [ReFetch, setReFetch] = useState(false);

  /**
   * Function for the Category Selected
   *
   * @param {boolean} Category  - which indicates if the Category Selected is enabled or not
   */
  const CategoryHandler = (Category) => {
    setCategory(Category);
    // console.log(Category);
  };
  /**
   * Function for the refetch
   *
   * @param {boolean} ReFetch  - which indicates if the ReFetch is changed
   */
  const ReFetchHandler = (ReFetch) => {
    setReFetch(ReFetch);
    // console.log(ReFetch);
  };
  return (
    <CategoryContext.Provider
      value={{
        Category: Category,
        CategoryHandler: CategoryHandler,
        ReFetch: ReFetch,
        ReFetchHandler: ReFetchHandler,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
}

// export default CategoryContext
export default CategoryContext;
