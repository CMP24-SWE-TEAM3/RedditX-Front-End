import { createContext, useContext, useState } from "react";

export const createPostTitleContext = createContext({});

/**
 * Context for title of the post to be created
 *
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
const CreatePostTitleProvider = ({ children }) => {
  // Context that is used to share title of the post to be created
  const [createPostTitle, setCreatePostTitle] = useState("");

  return (
    <createPostTitleContext.Provider
      value={{
        createPostTitle,
        setCreatePostTitle,
      }}
    >
      {children}
    </createPostTitleContext.Provider>
  );
};
/**
 * Custom hook used to provide post submit destination context
 *
 * @returns {React.Context}
 */
const useCreatePostTitle = () => {
  return useContext(createPostTitleContext);
};

export { CreatePostTitleProvider, useCreatePostTitle };
