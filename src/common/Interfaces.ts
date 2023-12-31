export interface Post {
  title: string;
  author: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  pubDate: string;
  tags: string[];
}
