// Import axios
import axios from "API/axios";

/**
 * {Function} This function is responsible for fetching the data to show  random categories cart
 * @return {{requestConfig: {headers: {"Content-Language": string}}, axiosInstance: AxiosInstance, method: string, url: string}}
 */
const randomCategories = dataFetch => {
    return ({
        axiosInstance: axios,
        method: "GET",
        url: "/r/random-category/",
        requestConfig: {
            headers: {
                "Content-Language": "en-US",
            },
        },
    });
};

export default randomCategories;