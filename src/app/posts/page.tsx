import { getPostsByCategory } from '@/utils/mdx';
import PostList from '@/components/PostList';
import { PostData } from '@/types/post';

export default async function Posts() {
  const posts = getPostsByCategory() as PostData[];

  return <PostList initialPosts={posts} />;
}