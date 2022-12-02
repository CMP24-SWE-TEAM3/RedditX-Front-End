import React from "react";
import { useState, useEffect } from "react";
const SearchContext = React.createContext({
  word: "ali",
  wordHandler: (word) => {},
});
// import React from 'react'

export function SearchContextProvider(props) {
  const [word, setword] = useState("");

  const wordHandler = (word) => {
    setword(word);
    console.log(word);
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

// export default Auth-context
export default SearchContext;
