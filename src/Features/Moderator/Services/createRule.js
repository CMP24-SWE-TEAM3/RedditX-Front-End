// Import axios
import axios from "API/axios";

/**
 * Function to create new rule
 * @param {Function} fetchData Coming from useFetchFunction custom hook
 * @param {Object} objectData Object that contains the data that will be sent to the api
 * @return {Boolean}
 */

const createRule = (fetchData, auth, objectData) => {
  if (objectData.rule !== undefined && objectData.srName !== undefined) {
    if (
      typeof objectData.rule === "object" &&
      typeof objectData.srName === "string" &&
      objectData.rule.title.length > 0
    ) {
      fetchData({
        axiosInstance: axios,
        method: "post",
        url: "/api/r/community-rule",
        requestConfig: {
          data: objectData,
          headers: {
            "Content-Language": "en-US",
            authorization: `Bearer ${auth.getToken()}`,
          },
        },
      });
    }
  }
};

export default createRule;
