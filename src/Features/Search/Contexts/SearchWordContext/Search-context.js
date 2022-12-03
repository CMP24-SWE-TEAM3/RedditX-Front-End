import React from "react";
import { useState, useEffect } from "react";
const SearchContext = React.createContext({
  word: "",
  wordHandler: (word) => {},
});
/**
 * Context for the word we search for
 *
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
export function SearchContextProvider(props) {
  const [word, setword] = useState("");

  const wordHandler = (word) => {
    setword(word);
    // console.log(word);
  };

  return (
    <SearchContext.Provider
      value={{
        word: word,
        wordHandler: wordHandler,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

// export default SearchContext
export default SearchContext;

// import { createContext, useContext, useState } from "react";
// const SearchContext = createContext(null);

// export const SearchContextProvider = ({ children }) => {
//   const [word, setWord] = useState(null);

//   return (
//     <SearchContext.Provider value={{ word, setWord }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };

// export const useSearchContext = () => {
//   return useContext(SearchContext);
// };
