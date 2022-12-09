import axios from "API/axios";

/**
 * Function to get the moderators of subreddit
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 */
export const getModerators = (dataFetch, subredditName, token) => {
  //let searchSubredditName = "t5_" + subredditName;
  let finalUrl = "/api/r/" + subredditName + "/about/moderators";
  if (subredditName?.length > 0) {
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
};

/**
 * Function to invite moderator
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @param {String} token The token of the user
 */
export const inviteModerator = (dataFetch, objectData, token) => {
  if (
    objectData.userID !== undefined &&
    objectData.type !== undefined &&
    objectData.communityID !== undefined
  ) {
    if (
      objectData.type === "moderator_invite" &&
      typeof objectData.userID === "string" &&
      typeof objectData.communityID === "string"
    ) {
      dataFetch({
        axiosInstance: axios,
        method: "POST",
        url: "/api/user/friend",
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

/**
 * Function to leave as moderator
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 */
export const leaveModerator = (dataFetch, objectData, subredditName, token) => {
  if (objectData.userID !== undefined && subredditName?.length > 0) {
    if (typeof objectData.userID === "string") {
      let finalUrl = "/api/r/" + subredditName + "/leave-moderator";
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

/**
 * Function to get banned users in subreddit
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 */
export const getBanned = (dataFetch, subredditName, token) => {
  //let searchSubredditName = "t5_" + subredditName;
  let finalUrl = "/api/r/" + subredditName + "/about/banned";
  if (subredditName?.length > 0) {
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
};

/**
 * Function to get mutted users in subreddit
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 */
export const getMutted = (dataFetch, subredditName, token) => {
  //let searchSubredditName = "t5_" + subredditName;
  let finalUrl = "/api/r/" + subredditName + "/about/muted";
  if (subredditName?.length > 0) {
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
};

/**
 * Function to ban or unban user
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 */
export const banUser = (dataFetch, objectData, subredditName, token) => {
  if (
    objectData.userID !== undefined &&
    objectData.operation !== undefined &&
    subredditName?.length > 0
  ) {
    if (
      typeof objectData.userID === "string" &&
      (objectData.operation === "ban" || objectData.operation === "unban")
    ) {
      let finalUrl = "/api/r/" + subredditName + "/about/banned";
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
