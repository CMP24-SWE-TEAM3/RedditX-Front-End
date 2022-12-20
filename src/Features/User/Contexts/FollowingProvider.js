import { createContext, useContext, useState } from "react";
const followingContext = createContext(null);

export const FollowingProvider = ({ children }) => {
  const [following, setFollowing] = useState(null);

  return (
    <followingContext.Provider value={{ following, setFollowing }}>
      {children}
    </followingContext.Provider>
  );
};

export const useFollowing = () => {
  return useContext(followingContext);
};
