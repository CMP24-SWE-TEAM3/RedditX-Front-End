import { createContext, useContext, useState } from "react";

export const createPostTextContext = createContext({});

/**
 * Context for text of the post to be created
 *
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
export const CreatePostTextProvider = ({ children }) => {
  // Context that is used to share text of the post to be created
  const [createPostText, setCreatePostText] = useState([]);

  return (
    <createPostTextContext.Provider
      value={{
        createPostText,
        setCreatePostText,
      }}
    >
      {children}
    </createPostTextContext.Provider>
  );
};
/**
 * Custom hook used to provide post text context
 *
 * @returns {React.Context}
 */
export const useCreatePostText = () => {
  return useContext(createPostTextContext);
};
