import useFetchFunction from "Hooks/useFetchFunction";
import getUser from "Features/User/Services/getUser";
import getFollowers from "Features/User/Services/getFollowers";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useEffect, useState } from "react";
import { useIsMe } from "Features/User/Contexts/IsMeProvider";
import { useUserAbout } from "Features/User/Contexts/UserAboutProvider";
import { useUserID } from "Features/User/Contexts/UserIDProvider";
import { useFollowers } from "Features/User/Contexts/FollowersProvider";
import UserNotFound from "../UserNotFound/UserNotFound";
import AdultPage from "../AdultPage/AdultPage";
import fetchPeopleFollowed from "Features/Search/Services/fetchPeopleFollowed";
import { useFollowing } from "Features/User/Contexts/FollowingProvider";

const SetUser = ({ userId, children }) => {
  const [show, setShow] = useState(false);
  const auth = useAuth();
  const { setIsMe, isMe } = useIsMe();
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

  const [followingData, followingError, followingIsLoading, fetchFollowing] =
    useFetchFunction();

  useEffect(() => {
    fetchPeopleFollowed(fetchFollowing, auth);
  }, []);

  const { setFollowing } = useFollowing();

  useEffect(() => {
    if (followingData) {
      setFollowing(followingData.following);
    }
  }, [followingData, setFollowing]);

  console.log("following", followingData);

  if (
    (userInfo && !isLoading && userInfo.about && !userInfo.about.user) ||
    (!isLoading &&
      userInfo &&
      userInfo.about &&
      userInfo.about.user &&
      userInfo.about.user.isBlocked) ||
    error
  ) {
    return <UserNotFound />;
  }

  if (
    !isLoading &&
    userInfo &&
    userInfo.about &&
    userInfo.about.user &&
    userInfo.about.user.over18 &&
    !show &&
    !isMe
  ) {
    return <AdultPage onHide={setShow} />;
  }

  return <>{children}</>;
};

export default SetUser;
