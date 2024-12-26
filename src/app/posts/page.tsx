import { getPostsByCategory } from '@/utils/mdx';
import PostList from '@/components/PostList';
import { PostData } from '@/types/post';
import { Suspense } from 'react';

export default async function Posts() {
  const posts = getPostsByCategory() as PostData[];

  return (
    <Suspense>
      <PostList initialPosts={posts} />
    </Suspense>
  );
}