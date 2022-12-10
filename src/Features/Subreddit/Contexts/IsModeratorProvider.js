import { createContext, useContext, useState } from "react";
const isModeratorContext = createContext(null);

export const IsModeratorProvider = ({ children }) => {
  const [isMod, setIsMod] = useState(null);

  return (
    <isModeratorContext.Provider value={{ isMod, setIsMod }}>
      {children}
    </isModeratorContext.Provider>
  );
};

export const useIsModerator = () => {
  return useContext(isModeratorContext);
};
