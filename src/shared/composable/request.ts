import axios, { AxiosInstance } from 'axios';

/**
 * @default settings axios
 * @type {axios.AxiosInstance}
 */
export const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
