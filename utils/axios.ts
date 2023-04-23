import axios from "axios";

export const request = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://hive-nexus-api-sep6lno5xq-ey.a.run.app"
      : "http://localhost:8080",
  timeout: 1000,
});

request.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("hn-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.post["x-access-token"] = token;
    }
  }
  return config;
});
