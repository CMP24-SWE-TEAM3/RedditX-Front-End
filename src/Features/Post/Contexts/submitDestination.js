import { createContext, useContext, useState } from "react";

export const submitDestinationContext = createContext({});

/**
 * Context for post submit destination
 *
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
const SubmitDestinationProvider = ({ children }) => {
  // Context that is used to share project info between project and workspace
  const [submitDestination, setSubmitDestination] = useState(null);

  return (
    <submitDestinationContext.Provider
      value={{
        submitDestination,
        setSubmitDestination,
      }}
    >
      {children}
    </submitDestinationContext.Provider>
  );
};
/**
 * Custom hook used to provide post submit destination context
 *
 * @returns {React.Context}
 */
const useSubmitDestination = () => {
  return useContext(submitDestinationContext);
};

export { SubmitDestinationProvider, useSubmitDestination };
