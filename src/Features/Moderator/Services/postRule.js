// Import axios
import axios from "API/axios";

/**
 * Function to create new rule
 * @param {Function} fetchData Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @return {Boolean}
 */

const postRule = (fetchData, auth, objectData) => {
  if (objectData.rule !== undefined) {
    if (typeof objectData.rule === "string") {
      fetchData({
        axiosInstance: axios,
        method: "post",
        url: "/api/r/create-rule/",
        requestConfig: {
          data: objectData,
          headers: {
            "Content-Language": "en-US",
            authorization: `Bearer ${auth.getToken()}`,
          },
        },
      });
      return true;
    }
    return false;
  }
  return false;
};

export default postRule;
