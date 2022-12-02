import { useEffect } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import getSubreddit from "Features/Subreddit/Services/getSubreddit";
/**
 *
 * @param {string} comName - community name to fitch its data
 * @param {React.Component} children - children of this component
 * @returns {React.Component}
 */
const SetSubReddit = ({ comName, children }) => {
  const { community, setCommunity } = useSubReddit();

  const [Community, error, isLoading, fetchData] = useFetchFunction();
  useEffect(() => {
    getSubreddit(fetchData);
  }, []);

  useEffect(() => {
    setCommunity(Community);
    // console.log(error, loading, reload);
    // console.log(Community)
  }, [Community]);
  // console.log(community)

  return <>{children}</>;
};

export default SetSubReddit;
