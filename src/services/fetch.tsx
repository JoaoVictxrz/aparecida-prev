import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "./axios";

export async function getData(url: string): Promise<PostsProps> {
  try {
    const response = await AxiosInstance.get<PostsProps>(`${url}`);
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
}
