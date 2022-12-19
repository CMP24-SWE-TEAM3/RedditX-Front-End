import useFetchFunction from "Hooks/useFetchFunction";
import getUser from "Features/User/Services/getUser";
import getFollowers from "Features/User/Services/getFollowers";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useEffect } from "react";
import { useIsMe } from "Features/User/Contexts/IsMeProvider";
import { useUserAbout } from "Features/User/Contexts/UserAboutProvider";
import { useUserID } from "Features/User/Contexts/UserIDProvider";
import { useFollowers } from "Features/User/Contexts/FollowersProvider";
import UserNotFound from "../UserNotFound/UserNotFound";
import AdultPage from "../AdultPage/AdultPage";

const SetUser = ({ userId, children }) => {
  const auth = useAuth();
  const { setIsMe } = useIsMe();
  const { setUserAbout } = useUserAbout();
  const { setUserID } = useUserID();
  const { setFollowers } = useFollowers();

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
  const [
    followersData,
    followersError,
    followersIsLoading,
    followersFetchData,
  ] = useFetchFunction();

  useEffect(() => {
    getUser(fetchData, userId, auth);
  }, [userId]);
  console.log(userInfo, "__", error, "__", isLoading);

  useEffect(() => {
    getFollowers(followersFetchData, auth);
  }, []);
  console.log(
    followersData,
    "followers",
    followersError,
    "followers",
    followersIsLoading
  );

  useEffect(() => {
    if (
      followersData &&
      followersData.followers &&
      followersData.followers.length !== 0
    ) {
      setFollowers(followersData.followers);
    } else {
      setFollowers(null);
    }
  }, [followersData, setFollowers]);

  useEffect(() => {
    if (userInfo && userInfo.about) {
      setUserAbout(userInfo.about.user);
    }
  }, [userInfo, setUserAbout]);

  if (false) {
    return <UserNotFound />;
  }

  if (true) {
    return <AdultPage />;
  }

  return <>{children}</>;
};

export default SetUser;
