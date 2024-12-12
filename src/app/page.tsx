import { getMdxFiles } from '@/utils/mdx';
import HomeContent from '@/components/HomeContent';

export default async function Page() {
  const posts = getMdxFiles().slice(0, 5);
  const categories = [{
    category: 'cs',
    name: 'CS',
  }, {
    category: 'development',
    name: '개발',
  }];

  const typedPosts = posts.map(post => ({
    ...post,
    metadata: {
      title: post.metadata.title || '',
      date: post.metadata.date || '',
      description: post.metadata.description || '',
      thumbnail: post.metadata.thumbnail || '',
    }
  }));

  return <HomeContent posts={typedPosts} categories={categories} />;
}