import { mediaProps, PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "./axios";

export class getAllDataPages {
  constructor() {}

  async getAllPages(url: string): Promise<PostsProps[]> {
    try {
      const response = await AxiosInstance.get(`/pages${url}`);
      if (response.data.length < 0) {
        throw new Error("A página não existe ou está vázia");
      }
      if (response.data.length > 10) {
        const responsePage2 = await AxiosInstance.get(`/pages${url}&page=2`);
        response.data.push(...responsePage2.data);
      }
      const data = response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAllPosts(url: string): Promise<PostsProps[]> {
    try {
      const response = await AxiosInstance.get(`/posts${url}`);
      if (response.data.length < 0) {
        throw new Error("A página não existe ou está vázia");
      }
      if (response.data.length > 10) {
        const responsePage2 = await AxiosInstance.get(`/posts${url}&page=2`);
        response.data.push(...responsePage2.data);
      }
      const data = response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAllMedia(url: string): Promise<mediaProps[]> {
    try {
      const response = await AxiosInstance.get(`/media${url}`);
      const data = response.data;
      if (response.data.length < 0) {
        throw new Error("A página não existe ou está vázia");
      }
      if (data.length > 10) {
        const responsePage2 = await AxiosInstance.get(`/media${url}&page=2`);
        data.push(...responsePage2.data);
      }
      return data;
    } catch (error) {
      throw error;
    }
  }
}
