import { useEffect, useState } from "react";
import { mediaProps, PostsProps } from "@/interfaces/interfaces";
import { fetchMedia, fetchPosts } from "@/services/fetch-api";
import { all } from "axios";

interface NoticesProps {
  post: PostsProps[];
  media: mediaProps[];
}
interface Props {
  notices: NoticesProps | null;
  loading: boolean;
  error: boolean;
}

export function useNotices(url: string) {
  const [state, setState] = useState<Props>({
    notices: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      let hasMore = true;
      let allPosts: PostsProps[] = [];
      let allMedia: mediaProps[] = [];
      let page = 1;

      try {
        while (hasMore) {
          try {
            const postsResponse = await fetchPosts(url + `&page=${page}`);
            allPosts.push(...postsResponse);

            if (allPosts.length === 0) {
              hasMore = false;
              setState({
                notices: null,
                loading: false,
                error: true,
              });
              break;
            }

            if (postsResponse.length === 0) {
              hasMore = false;
              setState({
                notices: null,
                loading: false,
                error: true,
              });
              break;
            } else {
              for (const post of postsResponse) {
                try {
                  const mediaResponse = await fetchMedia(
                    `/${post.featured_media}`,
                  );
                  allMedia.push(...mediaResponse);
                } catch (mediaError) {
                  console.log("Erro ao buscar mídia:", mediaError);
                }
              }
              setState({
                notices: {
                  media: allMedia,
                  post: allPosts,
                },
                loading: false,
                error: false,
              });

              page++;
            }
          } catch (error) {
            console.log("Erro ao buscar informações:", error);
            hasMore = false;
          }
        }
      } catch (error) {
        console.log("Erro ao buscar informações:", error);
        if (allPosts.length > 0) {
          setState({
            notices: { post: allPosts, media: allMedia },
            loading: false,
            error: false,
          });
        }
      }
    };

    fetchData();
  }, [url]);
  return state;
}
