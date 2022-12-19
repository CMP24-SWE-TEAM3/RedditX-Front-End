import axios from "API/axios";

/**
 * Function to get settings of community
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 */
export const getCommunitySettings = (dataFetch, subredditName, token) => {
  //let searchSubredditName = "t5_" + subredditName;
  let finalUrl = "/api/r/" + subredditName + "/about/edit";

  if (
    dataFetch !== undefined &&
    subredditName !== undefined &&
    token !== undefined
  ) {
    if (typeof subredditName === "string" && typeof token === "string") {
      dataFetch({
        axiosInstance: axios,
        method: "get",
        url: finalUrl,
        requestConfig: {
          headers: {
            "Content-Language": "en-US",
            Authorization: `Bearer ${token}`,
          },
        },
      });
      return true;
    }

    return false;
  }

  return false;
};

/**
 * Function to update the settings of community
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 */
export const updateSettings = (dataFetch, objectData, subredditName, token) => {
  let finalUrl = "/api/r/" + subredditName + "/site-admin";
  if (
    dataFetch !== undefined &&
    subredditName !== undefined &&
    token !== undefined &&
    objectData !== undefined
  ) {
    if (typeof subredditName === "string" && typeof token === "string") {
      dataFetch({
        axiosInstance: axios,
        method: "POST",
        url: finalUrl,
        requestConfig: {
          data: objectData,
          headers: {
            "Content-Language": "en-US",
            Authorization: `Bearer ${token}`,
          },
        },
      });
      return true;
    }
    return false;
  }
  return false;
};
