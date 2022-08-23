import {
  GET,
  POST,
  UPDATE,
  DELETE,
} from "../../constants/action-types/auth/requestMethods";
import apiRequest from "./apiRequest";

export const saveData = async (url, data) => apiRequest(POST, url, data);
export const fetchData = async (url) => apiRequest(GET, url);
export const updateData = async (url, data) => apiRequest(UPDATE, url, data);
export const deleteData = async ({ url, data }) =>
  apiRequest(DELETE, url, data);
