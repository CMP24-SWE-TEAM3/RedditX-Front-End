// Import hooks
import { useState, useEffect } from "react";

/**
 * @description Custom hook to fetch data from an API
 *
 * @param {Object} axiosInstance - Axios instance
 * @param {String} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {String} url - URL to fetch
 * @param {Object} requestConfig - Request configuration object
 * @returns {Array} - Array of response, error, loading, and axiosFetch
 */
const useFetch = ({ axiosInstance, method, url, requestConfig = {} }) => {
  // The response state
  const [response, setResponse] = useState([]);
  // The error state
  const [error, setError] = useState("");
  // The loading state (used to show something like a spinner)
  const [loading, setLoading] = useState(true);
  // The reloading state (used to trigger a reload of the data)
  const [reload, setReload] = useState(0);

  /**
   * Used to refetch data from an API
   */
  const refetch = () => setReload((prev) => prev + 1);

  useEffect(() => {
    //let isMounted = true;
    const controller = new AbortController();

    /**
     * @description Fetch data from API
     */
    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        });
        setResponse(res.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // call the function
    fetchData();

    // useEffect cleanup function
    return () => controller.abort();

    // eslint-disable-next-line
  }, [reload]);

  return [response, error, loading, refetch];
};

export default useFetch;
