import axios from "API/axios";

/**
 * Function to give vote to post
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 */
export const giveVote = (dataFetch, objectData) => {
  if (objectData.id !== undefined && objectData.dir !== undefined) {
    if (
      typeof objectData.id === "string" &&
      (objectData.dir === 1 ||
        objectData.dir === -1 ||
        objectData.dir === 0 ||
        objectData.dir === 2)
    ) {
      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/api/listing/vote",
        requestConfig: {
          data: objectData,
        },
      });
      return true;
    }
    return false;
  }
  return false;
};

/**
 * Function to follow or unfollow post
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 */
export const makeFollow = (dataFetch, objectData) => {
  if (objectData.linkID !== undefined && objectData.action !== undefined) {
    if (
      typeof objectData.linkID === "string" &&
      typeof objectData.action === "boolean"
    ) {
      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/api/listing/follow-post",
        requestConfig: {
          data: objectData,
        },
      });
      return true;
    }
    return false;
  }
  return false;
};
