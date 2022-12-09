// Import axios
import axios from "API/axios";

/**
 * Function to create a new community
 * @param {Function} fetchData Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @return {Boolean}
 */

const createCommunity = (fetchData, objectData) => {
  if (
    objectData.communityName !== undefined &&
    objectData.type !== undefined &&
    objectData.nsfw !== undefined
  ) {
    if (
      typeof objectData.communityName === "string" &&
      typeof objectData.type == "string" &&
      typeof objectData.nsfw === "boolean"
    ) {
      fetchData({
        axiosInstance: axios,
        method: "post",
        url: "/api/r/create-subreddit/",
        requestConfig: objectData,
      });
      return true;
    }
    return false;
  }
  return false;
};

export default createCommunity;
