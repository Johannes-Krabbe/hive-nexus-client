import axios from "axios";

export const request = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://hive-nexus-api-sep6lno5xq-ey.a.run.app"
      : "http://localhost:8080",
  timeout: 1000,
  withCredentials: true,
});
