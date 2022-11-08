import { createContext, useContext, useState } from "react";

export const createPostAttachmentsContext = createContext({});

/**
 * Context for attachments of the post to be created
 *
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
export const CreatePostAttachmentsProvider = ({ children }) => {
  // Context that is used to share attachments of the post to be created
  const [createPostAttachments, setCreatePostAttachments] = useState([]);

  return (
    <createPostAttachmentsContext.Provider
      value={{
        createPostAttachments,
        setCreatePostAttachments,
      }}
    >
      {children}
    </createPostAttachmentsContext.Provider>
  );
};
/**
 * Custom hook used to provide post attachments context
 *
 * @returns {React.Context}
 */
export const useCreatePostAttachments = () => {
  return useContext(createPostAttachmentsContext);
};
