import axios from "axios";

const stackAIApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export default stackAIApi;
