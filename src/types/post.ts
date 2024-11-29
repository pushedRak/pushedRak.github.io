export interface PostMetadata {
  title: string;
  date: string;
  description: string;
  thumbnail?: string;
  tags?: string[];
}

export interface PostData {
  slug: string;
  category: string;
  metadata: PostMetadata;
  content: string;
}