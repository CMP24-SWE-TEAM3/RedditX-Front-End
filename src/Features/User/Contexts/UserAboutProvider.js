import { createContext, useContext, useState } from "react";
const UserAboutContext = createContext(null);

export const UserAboutProvider = ({ children }) => {
  const [userAbout, setUserAbout] = useState(null);

  return (
    <UserAboutContext.Provider value={{ userAbout, setUserAbout }}>
      {children}
    </UserAboutContext.Provider>
  );
};

export const useUserAbout = () => {
  return useContext(UserAboutContext);
};
