import axios from "API/axios";

/**
 * Function to fetch Settings
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 */
const fetchPrefs = (fetchFunction, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
    fetchFunction({
      axiosInstance: axios,
      method: "GET",
      url: "/api/user/me/prefs",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer ${auth.getToken()}`,
        },
      },
    });
};

export default fetchPrefs;