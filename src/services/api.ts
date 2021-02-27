import axios, { AxiosInstance } from "axios";
import { AuthDetails, isAuth } from "./auth";

const api: AxiosInstance = axios.create({
  baseURL: "https://accenture-java-desafio.herokuapp.com",
});

let authDetails: AuthDetails | undefined;

isAuth().then((res) => {
  authDetails = res;
});

if (authDetails?.token) {
  api.defaults.headers.Authorization = authDetails.token;
}

export default api;
