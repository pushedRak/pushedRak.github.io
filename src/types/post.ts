export interface PostMetadata {
  title: string;
  createdAt: string;
  updatedAt?: string;
  description: string;
  thumbnail?: string;
  tags?: string[];
  subcategory?: string;
}

export interface PostData {
  slug: string;
  category: string;
  subcategory?: string;
  metadata: PostMetadata;
  content: string;
}