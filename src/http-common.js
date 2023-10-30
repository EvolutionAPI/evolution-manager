import axios from "axios";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();

appStore

const http = axios.create({
  headers: {
    "Content-type": "application/json"
  }
});

http.interceptors.request.use(
  config => {
    config.baseURL = appStore.connection.host;
    config.headers["apikey"] = appStore.connection.globalApiKey;

    return config;
  },
  error => Promise.reject(error)
);

export default http;
