import React from "react";
import { useState, useEffect } from "react";
const SafeContext = React.createContext({
  safe: false,
  safeHandler: (safe) => {},
});
/**
 * Context for the safe search
 *
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
export function SafeContextProvider(props) {
  const [safe, setsafe] = useState(false);
  /**
   * Function for the safe search
   *
   * @param {boolean} safe  - which indicates if the safe search is enabled or not
   */
  const safeHandler = (safe) => {
    setsafe(safe);
    // console.log(safe);
  };

  return (
    <SafeContext.Provider
      value={{
        safe: safe,
        safeHandler: safeHandler,
      }}
    >
      {props.children}
    </SafeContext.Provider>
  );
}

// export default SafeContext
export default SafeContext;
