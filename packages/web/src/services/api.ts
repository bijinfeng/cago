import { toast } from '@pingtou/ui';
import axios from 'axios';
import { get } from 'radash';
import { USER_TOKEN } from '@/lib/constants';

export const api = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(USER_TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { status } = error.response;

    if (status === 401) {
      localStorage.removeItem(USER_TOKEN);
    }

    const errorMessage = get<string>(error, 'response.data.error.message');
    if (errorMessage) {
      toast.error(errorMessage);
    }

    return Promise.reject(error);
  },
);
