export interface PostMetadata {
  title: string;
  createdAt: string; // 생성 일자 추가
  updatedAt?: string; // 수정 일자 추가
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