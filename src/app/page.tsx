import { getMdxFiles } from '@/utils/mdx';
import HomeContent from '@/components/HomeContent';

export default async function Page() {
  const posts = getMdxFiles().slice(0, 5);
  
  const typedPosts = posts.map(post => ({
    ...post,
    metadata: {
      title: post.metadata.title || '',
      createdAt: post.metadata.createdAt || '',
      description: post.metadata.description || '',
      thumbnail: post.metadata.thumbnail || '',
      subcategory: post.metadata.subcategory || '',
    }
  }));

  return <HomeContent posts={typedPosts} />;
}