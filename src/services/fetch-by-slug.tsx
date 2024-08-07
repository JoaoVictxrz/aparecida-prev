import { getAllDataPages } from "@/services/fetch";
import { PostsProps } from "@/interfaces/interfaces";

export const fetchPostsBySlug = async (slug: string): Promise<PostsProps[]> => {
  const getData = new getAllDataPages();
  const response = await getData.getAllPosts(`?slug=${slug}`);
  if (response.statusCode === 204) {
    throw new Error("Nenhuma postagem encontrada.");
  }
  return response.data;
};
