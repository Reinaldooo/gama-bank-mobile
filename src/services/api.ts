import axios, { AxiosInstance } from "axios";
import { isAuth } from "./auth";

const api: AxiosInstance = axios.create({
  baseURL: "https://accenture-java-desafio.herokuapp.com",
});

const authDetails = isAuth();
// const

api.defaults.headers.Authorization = authDetails.then(
  res =>{
    return res?.token;
  }
);

export default api;
