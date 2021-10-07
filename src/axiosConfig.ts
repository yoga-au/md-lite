import axios from 'axios';
import type {AxiosRequestConfig} from 'axios';

const requestConfig: AxiosRequestConfig = {
  baseURL: 'https://api.mangadex.org',
};

const instance = axios.create(requestConfig);

export default instance;
