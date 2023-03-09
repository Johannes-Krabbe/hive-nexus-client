import axios from "axios";

export const request = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://example.com"
      : "http://localhost:3001",
  timeout: 1000,
  withCredentials: true,
});
