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
/**
 *
 * @param {string} comName - community name to fitch its data
 * @param {React.Component} children - children of this component
 * @returns {React.Component}
 */
const SetSubReddit = ({ comm, children }) => {
  const { setCommunity } = useSubReddit();
  const auth = useAuth();

  const { setCommunityID } = useSubRedditID();

  useEffect(() => {
    setCommunityID(comm);
  }, [comm, setCommunityID]);

  const { setIsMod } = useIsModerator();
  useEffect(() => {
    setIsMod(false);
  }, [setIsMod]);

  const { setIsBanned } = useIsBanned();
  useEffect(() => {
    setIsBanned(false);
  }, [setIsBanned]);

  const { setIsMuted } = useIsMuted();
  useEffect(() => {
    setIsMuted(false);
  }, [setIsMuted]);

  const [Community, error, isLoading, fetchData] = useFetchFunction();
  useEffect(() => {
    getSubreddit(fetchData, comm, auth);
  }, []);
  console.log(Community && Community.things, "__", error, "__", isLoading);

  useEffect(() => {
    Community &&
      Community.things &&
      Community.things.length &&
      setCommunity(Community.things[0]);
  }, [Community]);

  if (false) {
    return <PrivatePage />;
  }

  if (false) {
    return <NoSubReddit />;
  }

  return <>{children}</>;
};

export default SetSubReddit;
