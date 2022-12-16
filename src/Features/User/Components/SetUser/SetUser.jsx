import useFetchFunction from "Hooks/useFetchFunction";
import getUser from "Features/User/Services/getUser";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useEffect } from "react";
import { useIsMe } from "Features/User/Contexts/IsMeProvider";
import { useUserAbout } from "Features/User/Contexts/UserAboutProvider";
import { useUserID } from "Features/User/Contexts/UserIDProvider";

const SetUser = ({ userId, children }) => {
  const auth = useAuth();
  const { setIsMe } = useIsMe();
  const { setUserAbout } = useUserAbout();
  const { setUserID } = useUserID();

  useEffect(() => {
    if (auth && userId) {
      setIsMe(userId === auth.getUserName() ? true : false);
    }
    if (!auth) {
      setIsMe(false);
    }
  }, [auth, userId, setIsMe]);

  useEffect(() => {
    setUserID(userId);
  }, [userId, setUserID]);

  const [userInfo, error, isLoading, fetchData] = useFetchFunction();

  useEffect(() => {
    getUser(fetchData, userId, auth);
  }, []);
  console.log(userInfo, "__", error, "__", isLoading);

  useEffect(() => {
    if (userInfo && userInfo.about) {
      setUserAbout(userInfo.about.user);
    }
  }, [userInfo, setUserAbout]);

  return <>{children}</>;
};

export default SetUser;
