import { useEffect } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import { useIsModerator } from "Features/Subreddit/Contexts/IsModeratorProvider";
import getSubreddit from "Features/Subreddit/Services/getSubreddit";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import PrivatePage from "../PrivatePage/PrivatePage";
import { useIsBanned } from "Features/Subreddit/Contexts/IsBannedProvider";
import { useIsMuted } from "Features/Subreddit/Contexts/IsMutedProvider";
import NoSubReddit from "../NoSubReddit/NoSubReddit";
import getBannedUsers from "Features/Subreddit/Services/getBannedUsers";
import getMutedUsers from "Features/Subreddit/Services/getMutedUsers";

/**
 *
 * @param {string} comName - community name to fitch its data
 * @param {React.Component} children - children of this component
 * @returns {React.Component}
 */
const SetSubReddit = ({ comm, children }) => {
  const { community, setCommunity } = useSubReddit();
  const auth = useAuth();

  const { setCommunityID } = useSubRedditID();

  useEffect(() => {
    setCommunityID(comm);
  }, [comm, setCommunityID]);

  const { setIsMod } = useIsModerator();

  const { setIsBanned } = useIsBanned();

  const { setIsMuted } = useIsMuted();

  const [Community, error, isLoading, fetchData] = useFetchFunction();
  useEffect(() => {
    getSubreddit(fetchData, comm, auth);
  }, [comm]);
  console.log(Community && Community.things, "__", error, "__", isLoading);

  useEffect(() => {
    Community &&
      Community.things &&
      Community.things.length &&
      setCommunity(Community.things[0]);
  }, [Community]);

  useEffect(() => {
    if (community && community.moderators && auth) {
      community.moderators.forEach((mod) => {
        if (mod.userID === auth.getUserName()) {
          setIsMod(true);
        }
      });
    } else setIsMod(false);
  }, [setIsMod, community, auth]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  const [bannedList, errorBanned, isLoadingBanned, fetchDataBanned] =
    useFetchFunction();
  useEffect(() => {
    getBannedUsers(fetchDataBanned, auth, comm);
  }, [comm]);
  console.log(bannedList, "_banned_", errorBanned, "_banned_", isLoadingBanned);
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  const [mutedList, errorMuted, isLoadingMuted, fetchDataMuted] =
    useFetchFunction();
  useEffect(() => {
    getMutedUsers(fetchDataMuted, auth, comm);
  }, [comm]);
  console.log(mutedList, "_muted_", errorMuted, "_muted_", isLoadingMuted);

  useEffect(() => {
    if (bannedList && bannedList.users && auth) {
      bannedList.users.forEach((banned) => {
        if (banned._id === auth.getUserName()) {
          setIsBanned(true);
        }
      });
    } else setIsBanned(false);
  }, [setIsBanned, bannedList, auth]);

  useEffect(() => {
    if (mutedList && mutedList.users && auth) {
      mutedList.users.forEach((muted) => {
        if (muted._id === auth.getUserName()) {
          setIsMuted(true);
        }
      });
    } else setIsMuted(false);
  }, [setIsMuted, mutedList, auth]);

  if (false) {
    return <PrivatePage />;
  }

  if (false) {
    return <NoSubReddit />;
  }

  return <>{children}</>;
};

export default SetSubReddit;
