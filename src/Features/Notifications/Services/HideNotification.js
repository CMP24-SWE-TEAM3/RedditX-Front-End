// Import axios
import axios from "API/axios";

/**
 * Deletes a notification
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {object} dataObject The Data to be Sent in the POST request
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 */

const hideNotification = async (fetchData, dataObject ,auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  console.log("Safely inside POST Function");
  fetchData({
    axiosInstance: axios,
    method: "POST",
    url: "/api/notification/del",
    requestConfig: {
      data: dataObject,
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default hideNotification;
