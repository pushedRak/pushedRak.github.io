export interface PostMetadata {
  title: string;
  date: string;
  description: string;
  tags?: string[];
}

export interface PostData {
  slug: string;
  metadata: PostMetadata;
  content: string;
}