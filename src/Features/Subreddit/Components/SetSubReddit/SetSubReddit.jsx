import { useEffect } from "react";
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
/**
 * 
 * @param {string} comName - community name to fitch its data
 * @param {React.Component} children - children of this component
 * @returns {React.Component}
 */
const SetSubReddit = ({ comName, children }) => {
  const { community, setCommunity } = useSubReddit();

  let [Community, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: `http://localhost:8000/${comName}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });

  useEffect(() => {
    setCommunity(Community);
    console.log(error, loading, reload);
    console.log(Community)
  }, [Community]);
  console.log(community)

  return <>{community && community.length && children}</>;
};

export default SetSubReddit;
