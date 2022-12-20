import { useEffect, useState } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import { useIsModerator } from "Features/Subreddit/Contexts/IsModeratorProvider";
import getSubreddit from "Features/Subreddit/Services/getSubreddit";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useIsBanned } from "Features/Subreddit/Contexts/IsBannedProvider";
import { useIsMuted } from "Features/Subreddit/Contexts/IsMutedProvider";
import getBannedUsers from "Features/Subreddit/Services/getBannedUsers";
import getMutedUsers from "Features/Subreddit/Services/getMutedUsers";

/**
 *
 * @param {string} comName - community name to fitch its data
 * @param {React.Component} children - children of this component
 * @returns {React.Component}
 */
const SetCommunityCard = ({ comm, children }) => {
  const { community, setCommunity } = useSubReddit();
  const [isJoined, setIsJoined] = useState(false);
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
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  const [mutedList, errorMuted, isLoadingMuted, fetchDataMuted] =
    useFetchFunction();
  useEffect(() => {
    getMutedUsers(fetchDataMuted, auth, comm);
  }, [comm]);

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

  useEffect(() => {
    if (community && community.members && auth) {
      community.members.forEach((user) => {
        if (user._id === auth.getUserName()) {
          setIsJoined(true);
        }
      });
    } else setIsJoined(false);
  }, [community]);

  return <>{children}</>;
};

export default SetCommunityCard;
