import axios from "API/axios";

/**
 * Function to get the moderators of subreddit
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 * @returns {Boolean}  return boolean to if the data if the request has been sent or not
 */
const getModerators = (dataFetch, subredditName, token) => {
  //let searchSubredditName = "t5_" + subredditName;
  let finalUrl = "/api/r/" + subredditName + "/about/moderators";
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
 * Function to get the moderators of subreddit
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 * @returns {Boolean}  return boolean to if the data if the request has been sent or not
 */
const getApproved = (dataFetch, subredditName, token) => {
  //let searchSubredditName = "t5_" + subredditName;
  let finalUrl = "/api/r/" + subredditName + "/about/members";
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
 * Function to invite moderator
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @param {String} token The token of the user
 * @returns {Boolean}  return boolean to if the data if the request has been sent or not
 */
const inviteModerator = (dataFetch, objectData, token) => {
  if (
    objectData?.userID !== undefined &&
    objectData?.type !== undefined &&
    objectData?.communityID !== undefined &&
    token !== undefined
  ) {
    if (
      objectData.type === "moderator_invite" &&
      typeof objectData.userID === "string" &&
      typeof objectData.communityID === "string" &&
      typeof token === "string"
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
 * @returns {Boolean}  return boolean to if the data if the request has been sent or not
 */
const leaveModerator = (dataFetch, objectData, subredditName, token) => {
  if (
    objectData?.userID !== undefined &&
    dataFetch !== undefined &&
    subredditName !== undefined &&
    token !== undefined
  ) {
    let finalUrl = "/api/r/" + subredditName + "/leave-moderator";
    if (
      typeof objectData.userID === "string" &&
      typeof subredditName === "string" &&
      typeof token === "string"
    ) {
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
 * Function to make moderator as an ordinary memeber
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 * @returns {Boolean}  return boolean to if the data if the request has been sent or not
 */
const kickModerator = (dataFetch, objectData, subredditName, token) => {
  if (
    objectData?.userID !== undefined &&
    dataFetch !== undefined &&
    subredditName !== undefined &&
    token !== undefined
  ) {
    if (
      typeof objectData.userID === "string" &&
      typeof subredditName === "string" &&
      typeof token === "string"
    ) {
      let finalUrl = "/api/r/" + subredditName + "/kick-moderator";
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
 * Function to kick user from community
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 * @returns {Boolean}  return boolean to if the data if the request has been sent or not
 */
const kickMember = (dataFetch, objectData, subredditName, token) => {
  if (
    objectData?.userID !== undefined &&
    dataFetch !== undefined &&
    subredditName !== undefined &&
    token !== undefined
  ) {
    if (
      typeof objectData.userID === "string" &&
      typeof subredditName === "string" &&
      typeof token === "string"
    ) {
      let finalUrl = "/api/r/" + subredditName + "/kick-member";
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
 * @returns {Boolean}  return boolean to if the data if the request has been sent or not
 */
const getBanned = (dataFetch, subredditName, token) => {
  //let searchSubredditName = "t5_" + subredditName;
  if (
    dataFetch !== undefined &&
    subredditName !== undefined &&
    token !== undefined
  ) {
    let finalUrl = "/api/r/" + subredditName + "/about/banned";
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
 * Function to get mutted users in subreddit
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 * @returns {Boolean}  return boolean to if the data if the request has been sent or not
 */
const getMutted = (dataFetch, subredditName, token) => {
  //let searchSubredditName = "t5_" + subredditName;
  let finalUrl = "/api/r/" + subredditName + "/about/muted";
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
 * Function to ban or unban user
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 * @returns {Boolean}  return boolean to if the data if the request has been sent or not
 */
const banUser = (dataFetch, objectData, subredditName, token) => {
  if (
    objectData?.userID !== undefined &&
    objectData?.operation !== undefined &&
    dataFetch !== undefined &&
    subredditName !== undefined &&
    token !== undefined
  ) {
    if (
      typeof objectData.userID === "string" &&
      typeof subredditName === "string" &&
      typeof token === "string" &&
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

/**
 * Function to mute or unmute user
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @param {String} subredditName The name of the subreddit
 * @param {String} token The token of the user
 * @returns {Boolean}  return boolean to if the data if the request has been sent or not
 */
const muteUser = (dataFetch, objectData, subredditName, token) => {
  if (
    objectData?.userID !== undefined &&
    objectData?.operation !== undefined &&
    dataFetch !== undefined &&
    subredditName !== undefined &&
    token !== undefined
  ) {
    if (
      typeof objectData.userID === "string" &&
      typeof subredditName === "string" &&
      typeof token === "string" &&
      (objectData.operation === "mute" || objectData.operation === "unmute")
    ) {
      let finalUrl = "/api/r/" + subredditName + "/about/muted";
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

export {
  getModerators,
  getApproved,
  inviteModerator,
  leaveModerator,
  kickModerator,
  kickMember,
  getBanned,
  getMutted,
  banUser,
  muteUser,
};
