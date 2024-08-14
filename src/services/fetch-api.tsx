import { getAllDataPages } from "@/services/fetch";
import { mediaProps, PostsProps } from "@/interfaces/interfaces";

export const fetchPosts = async (slug: string): Promise<PostsProps[]> => {
  const getData = new getAllDataPages();
  const response = await getData.getAllPosts(`${slug}`);
  if (response.statusCode === 204) {
    throw new Error("Nenhuma postagem encontrada.");
  }
  return response.data;
};

export const fetchPages = async (slug: string): Promise<PostsProps[]> => {
  const getData = new getAllDataPages();
  const response = await getData.getAllPages(`${slug}`);
  if (response.statusCode === 204) {
    throw new Error("Nenhuma página encontrada.");
  }
  return response.data;
};

export const fetchMedia = async (slug: string): Promise<mediaProps[]> => {
  const getData = new getAllDataPages();
  const response = await getData.getAllMedia(`${slug}`);
  if (response.statusCode === 204) {
    throw new Error("Nenhuma imagem encontrada.");
  }
  return response.data;
};
