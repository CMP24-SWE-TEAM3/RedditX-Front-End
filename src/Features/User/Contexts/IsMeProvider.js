import { createContext, useContext, useState } from "react";
const isMeContext = createContext(null);

export const IsMeProvider = ({ children }) => {
  const [isMe, setIsMe] = useState(null);

  return (
    <isMeContext.Provider value={{ isMe, setIsMe }}>
      {children}
    </isMeContext.Provider>
  );
};

export const useIsMe = () => {
  return useContext(isMeContext);
};
