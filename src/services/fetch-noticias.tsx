import { mediaProps, PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "./axios";

export const fetchPosts = async (page: number): Promise<PostsProps[]> => {
  const response = await AxiosInstance.get(`/posts?categories=2&page=${page}`);
  return response.data;
};

export const fetchMedia = async (mediaIds: number[]): Promise<mediaProps[]> => {
  const response = await AxiosInstance.get(
    `/media?include=${mediaIds.join(",")}`,
  );
  return response.data;
};
