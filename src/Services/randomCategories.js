// Import axios
import axios from "API/axios";

/**
 * {Function} This function is responsible for fetching the data to show  random categories cart
 * @return {{requestConfig: {headers: {"Content-Language": string}}, axiosInstance: AxiosInstance, method: string, url: string}}
 * @param {dataFetch} - fetch data from back end server
 * @param {auth} - authorization to make user has an access
 */
const randomCategories = (dataFetch, auth) => {
    dataFetch({
        axiosInstance: axios,
        method: "GET",
        url: "/r/random-category/",
        requestConfig: {
            headers: {
                "Content-Language": "en-US",
                Authorization: `Bearer ${auth.getToken()}`
            },
        },
    });
};

export default randomCategories;