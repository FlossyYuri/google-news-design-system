export interface Source {
  id: string | null;
  name: string;
}
export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
}
export interface Everything {
  status: string;
  totalResults: number;
  articles: Article[];
}
