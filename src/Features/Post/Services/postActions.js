import axios from "API/axios";

/**
 * Function to give vote to post
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 */
export const giveVote = (dataFetch, objectData, token) => {
  console.log(objectData);

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
          headers: {
            "Content-Language": "en-US",
            authorization: `bearer ${token}`,
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
 * Function to follow or unfollow post
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 */
export const makeFollow = (dataFetch, objectData, token) => {
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
 * Function hide post
 * @param {Function} dataFetch Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 */
export const hidePost = (dataFetch, objectData, token) => {
  if (objectData.linkID !== undefined) {
    if (typeof objectData.linkID === "string") {
      dataFetch({
        axiosInstance: axios,
        method: "post",
        url: "/api/listing/hide",
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
