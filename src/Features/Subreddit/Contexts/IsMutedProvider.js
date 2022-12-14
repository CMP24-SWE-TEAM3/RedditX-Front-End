import { createContext, useContext, useState } from "react";
const isMutedContext = createContext(null);

export const IsMutedProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(null);

  return (
    <isMutedContext.Provider value={{ isMuted, setIsMuted }}>
      {children}
    </isMutedContext.Provider>
  );
};

export const useIsMuted = () => {
  return useContext(isMutedContext);
};
