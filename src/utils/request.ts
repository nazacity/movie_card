import axios from 'axios';
import getConfig from 'next/config';

const timeout = 15000;

const { publicRuntimeConfig } = getConfig();

// const setHeaders = async () => {
//   let headers = {
//     'Content-Type': 'application/json',
//   };

//   return headers;
// };

const request = axios.create({
  baseURL: publicRuntimeConfig.BASE_API_URL ||process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout,
});

// const onRequestInterceptor = async (config: AxiosRequestConfig) => {
//   const headers = await setHeaders();

//   config.headers = headers;

//   return config;
// };

// request.interceptors.request.use(onRequestInterceptor);

export default request;
