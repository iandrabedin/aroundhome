import axios, { AxiosError, AxiosResponse } from "axios";
import API from "./api";

export const getCompanies = () => {
  return API.get("/companies").then(handleResponse).catch(handleError);
};

const handleResponse = (response: AxiosResponse) => {
  return response.data ? response.data : {};
};

const handleError = (error: AxiosError) => {
  if (axios.isCancel(error)) {
    return undefined;
  } else {
    throw new Error(`Could not get companies: ${error}`);
  }
};
