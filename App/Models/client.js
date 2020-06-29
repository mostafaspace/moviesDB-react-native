import axios from 'axios';

export default function client() {
    const instance = axios.create();
    instance.defaults.baseURL = 'https://api.themoviedb.org/3/';
    instance.interceptors.request.use(
        async (config) => {
            config.params.api_key = 'd00fda3959a3ab8b2ddfd3ae3a46d774';
            return config;
        },
        (error) => Promise.reject(error),
    );

    return instance;
}
