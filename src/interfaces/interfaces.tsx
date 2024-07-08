export interface PostsProps {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  jetpack_featured_media_url: string;
}

export interface mediaProps {
  id: number;
  post: number;
  guid: {
    rendered: string;
  };
  media_details: {
    width: number;
    height: number;
  };
  source_url: string;
  jetpack_featured_media_url: string;
}
