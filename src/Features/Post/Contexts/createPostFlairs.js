import { createContext, useContext, useState } from "react";

export const createPostFlairsContext = createContext({});

/**
 * Context for flairs of the post to be created
 *
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
export const CreatePostFlairsProvider = ({ children }) => {
  // Context that is used to share flairs of the post to be created
  const [createPostFlairs, setCreatePostFlairs] = useState(null);

  return (
    <createPostFlairsContext.Provider
      value={{
        createPostFlairs,
        setCreatePostFlairs,
      }}
    >
      {children}
    </createPostFlairsContext.Provider>
  );
};
/**
 * Custom hook used to provide post flairs context
 *
 * @returns {React.Context}
 */
export const useCreatePostFlairs = () => {
  return useContext(createPostFlairsContext);
};
