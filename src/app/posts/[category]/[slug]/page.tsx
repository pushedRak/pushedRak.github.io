import { getPostBySlug, getAllPostSlugs } from '@/utils/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { formatDate } from '@/utils/dateFormat';
import StyledPost from '@/components/StyledPost';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    category: post.params.category.toLowerCase(),
    slug: post.params.slug,
  }));
}

export default function Post({ params }: { params: { category: string; slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <StyledPost
      title={post.metadata.title}
      date={formatDate(post.metadata.date)}
    >
      <MDXRemote source={post.content} />
    </StyledPost>
  );
}