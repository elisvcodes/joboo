import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

axios.defaults.url = BASE_URL;

export const fetchData = (route: string): Promise<AxiosResponse<any, any>> => {
  return axios.get(route);
};

export const postData = (
  route: string,
  data: Object
): Promise<AxiosResponse<any, any>> => {
  return axios.post(route, data);
};
