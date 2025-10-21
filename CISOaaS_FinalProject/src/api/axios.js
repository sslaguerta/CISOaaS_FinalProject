import axios from "axios";

export const apiUser = axios.create({
  baseURL: "https://localhost:7084/api",
  withCredentials: true,
});
