import React from "react";
import { useState, useEffect } from "react";
const RecentContext = React.createContext({
  Posts: [],
  PostsHandler: (Posts) => {},
});
/**
 * Context for the Category Selected
 *
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
export function RecentContextProvider(props) {
  const [Posts, setPosts] = useState([]);

  /**
   * Function for the Category Selected
   *
   * @param {boolean} Category  - which indicates if the Category Selected is enabled or not
   */
  const PostsHandler = (Posts) => {
    setPosts(Posts);
    // console.log(Posts);
  };

  return (
    <RecentContext.Provider
      value={{
        Posts: Posts,
        PostsHandler: PostsHandler,
      }}
    >
      {props.children}
    </RecentContext.Provider>
  );
}

// export default RecentContext
export default RecentContext;
