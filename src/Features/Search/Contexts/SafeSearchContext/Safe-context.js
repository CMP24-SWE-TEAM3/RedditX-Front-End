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
