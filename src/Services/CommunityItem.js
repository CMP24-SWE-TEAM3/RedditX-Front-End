import axios from "API/axios"
import useFetchFunction from "../Hooks/useFetchFunction";
import {useEffect} from "react";

const RandomCommunities = () => {
    const [posts, error, loading, axiosFetch] = useFetchFunction();

    const getData = () => {
        axiosFetch({
            axiosInstance: axios,
            method: 'GET',
            url: 'http://localhost/5000/feeback',
            requestConfig: {
                data: {
                    userId: '1',
                    title: 'axios',
                    body: 'axios'
                }
            }
        })
    }
    useEffect(() => {
        return () => {
            getData();
        };
    }, []);

}
export default RandomCommunities;