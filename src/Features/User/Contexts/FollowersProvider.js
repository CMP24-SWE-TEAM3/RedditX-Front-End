import { createContext, useContext, useState } from "react";
const followersContext = createContext(null);

export const FollowersProvider = ({ children }) => {
  const [followers, setFollowers] = useState(null);

  return (
    <followersContext.Provider value={{ followers, setFollowers }}>
      {children}
    </followersContext.Provider>
  );
};

export const useFollowers = () => {
  return useContext(followersContext);
};
