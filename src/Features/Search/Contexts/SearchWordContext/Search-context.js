import React from "react";
import { useState, useEffect } from "react";
const SearchContext = React.createContext({
  word: "",
  isSubreddit: "",
  community: "",
  communityHandler: (community) => {},
  wordHandler: (word) => {},
  isSubredditHandler: (isSubreddit) => {},
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
   * Function for is the search for Subreddit
   * @param {string} community  - which indicates the Subreddit we search for.
   */
  const communityHandler = (community) => {
    setcommunity(community);
    console.log(community);
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
