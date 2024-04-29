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
}
