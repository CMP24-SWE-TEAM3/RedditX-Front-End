import React from "react";
import { useState, useEffect } from "react";
const SearchContext = React.createContext({
  word: "",
  isSubreddit: "",
  community: "",
  Sort: "Relevance",
  communityHandler: (community) => {},
  wordHandler: (word) => {},
  isSubredditHandler: (isSubreddit) => {},
  SortHandler: (Sort) => {},
});
/**
 * Context for the word we search for
 *
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
export function SearchContextProvider(props) {
  const [word, setword] = useState("");
  const [isSubreddit, setisSubreddit] = useState("");
  const [community, setcommunity] = useState("");
  const [Sort, setSort] = useState("Relevance");
  const wordHandler = (word) => {
    setword(word);
    // console.log(word);
  };
  /**
   * Function for is the search for Subreddit
   * @param {boolean} isSubreddit  - which indicates if the search for Subreddit
   */
  const isSubredditHandler = (isSubreddit) => {
    setisSubreddit(isSubreddit);
    console.log(isSubreddit);
  };
  /**
   * Function for is the search for community
   * @param {string} community  - which indicates the community we search for.
   */
  const communityHandler = (community) => {
    setcommunity(community);
    console.log(community);
  };
  /**
   * Function for is the search for Sort
   * @param {string} Sort  - which indicates the Sort we search for.
   */
  const SortHandler = (Sort) => {
    setSort(Sort);
    console.log(Sort);
  };
  return (
    <SearchContext.Provider
      value={{
        word: word,
        wordHandler: wordHandler,
        isSubredditHandler: isSubredditHandler,
        isSubreddit: isSubreddit,
        community: community,
        communityHandler: communityHandler,
        Sort: Sort,
        SortHandler: SortHandler,
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
