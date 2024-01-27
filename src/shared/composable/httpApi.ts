import axios from 'axios';

/**
 * @default settings axios
 * @type {axios.AxiosInstance}
 */
export const httpApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  validate(status: number): boolean {
    return ![401, 405, 408, 429].includes(status) && status <= 500;
  },
});
