import { createContext, useContext, useState } from "react";
const isBannedContext = createContext(null);

export const IsBannedProvider = ({ children }) => {
  const [isBanned, setIsBanned] = useState(null);

  return (
    <isBannedContext.Provider value={{ isBanned, setIsBanned }}>
      {children}
    </isBannedContext.Provider>
  );
};

export const useIsBanned = () => {
  return useContext(isBannedContext);
};
