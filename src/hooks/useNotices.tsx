import { useEffect, useState } from "react";
import { mediaProps, PostsProps } from "@/interfaces/interfaces";
import { fetchMedia, fetchPosts } from "@/services/fetch-api";

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
      try {
        const posts = await fetchPosts(url + "&per_page=100");
        const media = await fetchMedia(`/${posts[0].featured_media}`);
        setState({
          notices: { media: media, post: posts },
          loading: false,
          error: false,
        });

        if (posts.length >= 100) {
          const allPosts = [...posts];
          const allMedia = [...media];
          for (let i = 2; i <= Math.ceil(posts.length / 100); i++) {
            const postsResponse = await fetchPosts(
              url + `&per_page=100&page=${i}`,
            );
            if (postsResponse.length === 0) break;
            if (postsResponse.length > 0) {
              allPosts.push(...postsResponse);
              if (postsResponse.length > 0) {
                for (const posts of postsResponse) {
                  const mediaResponse = await fetchMedia(
                    `/${posts.featured_media}`,
                  );
                  allMedia.push(...mediaResponse);
                }
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
          }
        }
      } catch (error) {
        console.log("Erro ao buscar dados da página:", error);
        setState({
          notices: null,
          loading: false,
          error: true,
        });
      }
    };

    fetchData();
  }, [url]);
  return state;
}
