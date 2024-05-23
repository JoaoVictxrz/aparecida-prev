import { AxiosInstance } from "./axios";

export async function getData(url: string) {
  try {
    const response = await AxiosInstance.get(`${url}`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
}
