import "dotenv/config";
import axios from "axios";

const { TOKEN, URL_API } = process.env;
const contentType = { "Content-Type": "application/json" };
const defaultUrls = { apiV1: "/api/v1" };

const api = axios.create({
  baseURL: URL_API,
  headers: contentType,
});

api.defaults.headers.common["Authorization"] = TOKEN;
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

const apiRequest = async ({ requestMethod, url, data }) => {
  const requestHeader = {
    contentType,
    Authorization: `Bearer ${TOKEN}`,
  };

  const requestOptions = {
    method: requestMethod,
    headers: requestHeader,
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${defaultUrls.apiV1}/${url}`, requestOptions);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export default apiRequest;
