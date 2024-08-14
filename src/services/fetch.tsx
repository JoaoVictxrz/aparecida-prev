import { mediaProps, PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "./axios";
import { AxiosError } from "axios";

type StatusCode = {
  404: "Bad Request";
  200: "OK";
  204: "No Content";
  500: "Internal Server Error";
};

interface Response<T> {
  statusCode: keyof StatusCode;
  data: T;
}

export class getAllDataPages {
  constructor() {}

  private async getData<T>(url: string): Promise<Response<T[]>> {
    try {
      const response = await AxiosInstance.get(url);
      if (response.data.length === 0) {
        return {
          statusCode: 204,
          data: [] as T[],
        };
      }
      if (response.data.length > 10) {
        const responsePage2 = await AxiosInstance.get(`${url}&page=2`);
        response.data.push(...responsePage2.data);
      }
      return { statusCode: 200, data: response.data };
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response && error.response.status === 404) {
          return {
            statusCode: 404,
            data: [],
          };
        }
      } else if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw error;
    }
  }

  async getAllPages(url: string): Promise<Response<PostsProps[]>> {
    const response = await this.getData<PostsProps>(`/pages${url}`);
    return { statusCode: response.statusCode, data: response.data };
  }

  async getAllPosts(url: string): Promise<Response<PostsProps[]>> {
    const response = await this.getData<PostsProps>(`/posts${url}`);
    if (response.statusCode === 204) {
      return {
        statusCode: 204,
        data: [] as PostsProps[],
      };
    }
    return { statusCode: response.statusCode, data: response.data };
  }

  async getAllMedia(url: string): Promise<Response<mediaProps[]>> {
    const response = await this.getData<mediaProps>(`/media${url}`);
    if (response.statusCode === 204) {
      return {
        statusCode: 204,
        data: [] as mediaProps[],
      };
    }
    return { statusCode: response.statusCode, data: response.data };
  }
}
