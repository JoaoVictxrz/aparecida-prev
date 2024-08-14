import { useEffect, useState } from "react";
import useFetchPages from "./useFetchPages";
import Loading from "@/app/loading";
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
        const posts = await fetchPosts(url);
        const media = await fetchMedia(`/${posts[0].featured_media}`);

        setState({
          notices: { media: media, post: posts },
          loading: false,
          error: false,
        });
      } catch (error) {
        console.log("Erro ao buscar dados da página:", error);
        setState({ notices: null, loading: false, error: true });
      }
    };

    fetchData();
  }, [url]);
  return state;
}
