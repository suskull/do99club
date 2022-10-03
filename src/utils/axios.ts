import Axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import history from './history';
import configs from './configs';

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: configs.BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (config) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }
    return config;
  },
  (error) => Promise.reject(error),
);

function logout() {
  localStorage.clear();
  Cookies.remove('token');
  history.push('/');
}

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      logout();
    }
  },
);

export function sendGet(url: string, params?: any) {
  return axiosInstance.get(url, { params }).then((res) => res.data);
}
export function sendPost(url: string, params?: any, queryParams?: any) {
  return axiosInstance
    .post(url, params, { params: queryParams })
    .then((res) => res.data);
}
export function sendPut(url: string, params?: any) {
  return axiosInstance.put(url, params).then((res) => res.data);
}
export function sendPatch(url: string, params?: any) {
  return axiosInstance.patch(url, params).then((res) => res.data);
}
export function sendDelete(url: string, params?: any) {
  return axiosInstance.delete(url, { params }).then((res) => res.data);
}
