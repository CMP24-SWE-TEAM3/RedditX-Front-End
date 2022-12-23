// Import axios
import axios from "API/axios";

/**
 * Marks All Notifications as read 
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {object} dataObject The Data to be Sent in the POST request
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 */

const markAllAsRead = async (fetchData, auth, dataObject) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  fetchData({
    axiosInstance: axios,
    method: "POST",
    url: "/api/message/read-all-messages",
    requestConfig: {
      data: dataObject,
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default markAllAsRead;
