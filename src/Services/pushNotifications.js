// Import axios
import axios from "API/axios";


const pushNotifications = () => {
    return ({
        axiosInstance: axios,
        method: "GET",
        url: "/Notifications/",
        requestConfig: {
            headers: {
                "Content-Language": "en-US",
            },
        },
    });
};

export default pushNotifications;