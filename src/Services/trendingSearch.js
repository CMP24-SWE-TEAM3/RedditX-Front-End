// Import axios
import axios from "API/axios";

/**
 * {Function} This function is responsible for get data to show trending Search when clicked on search input element
 * @return {{requestConfig: {headers: {"Content-Language": string}}, axiosInstance: AxiosInstance, method: string, url: string}}
 */
const trendingSearch = () => {
    return ({
        axiosInstance: axios,
        method: "GET",
        url: "/TrendingPosts/",
        requestConfig: {
            headers: {
                "Content-Language": "en-US",
            },
        },
    });
};

export default trendingSearch;