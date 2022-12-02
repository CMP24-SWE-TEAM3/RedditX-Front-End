import { createContext, useContext, useState } from "react";
const subRedditIDContext = createContext(null);

export const SubRedditIDProvider = ({children }) => {

  const [communityID, setCommunityID] = useState(null);

  return (
    <subRedditIDContext.Provider value={{ communityID, setCommunityID}}>
      {children}
    </subRedditIDContext.Provider>
  );
};

export const useSubRedditID = () => {
  return useContext(subRedditIDContext);
};