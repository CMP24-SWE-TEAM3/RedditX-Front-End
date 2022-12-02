import { useEffect } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import getSubreddit from "Features/Subreddit/Services/getSubreddit";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
/**
 *
 * @param {string} comName - community name to fitch its data
 * @param {React.Component} children - children of this component
 * @returns {React.Component}
 */
const SetSubReddit = ({ comm, children }) => {
  const { setCommunity } = useSubReddit();
  const auth = useAuth();

  const {setCommunityID} = useSubRedditID();
  setCommunityID(comm);

  // const [Community, error, isLoading, fetchData] = useFetchFunction();
  // useEffect(() => {
  //   getSubreddit(fetchData, comm ,auth );
  // }, []);
  // console.log(Community, "__", error, "__", isLoading);

  // useEffect(() => {
  //   setCommunity(Community);
  // }, [Community]);

  return <>{children}</>;
};

export default SetSubReddit;
