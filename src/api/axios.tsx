import axios, {AxiosInstance, AxiosError} from 'axios';

const BASE_URL: string =
  process.env.REACT_APP_API_URL || 'http://10.0.2.2:8080/';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async config => {
  config.baseURL = BASE_URL;
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      // Handle unauthorized or forbidden access (e.g., redirect to login)
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
