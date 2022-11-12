import { createContext, useContext, useState } from "react";
const subRedditContext = createContext(null);

export const SubRedditProvider = ({children }) => {

  const [community, setCommunity] = useState(null);

  return (
    <subRedditContext.Provider value={{ community, setCommunity/*, error, loading, reload */}}>
      {children}
    </subRedditContext.Provider>
  );
};

export const useSubReddit = () => {
  return useContext(subRedditContext);
};