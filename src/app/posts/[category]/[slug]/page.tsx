import { getPostBySlug, getAllPostSlugs } from '@/utils/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { formatDate } from '@/utils/dateFormat';
import StyledPost from '@/components/StyledPost';
import CodeBlock from '@/components/CodeBlock';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();

  return posts.map((post) => ({
    category: post.params.category,
    slug: post.params.slug,
  }));
}

const components = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: (props: any) => <CodeBlock {...props} />,
};


export default function Post({ params }: { params: { category: string; slug: string } }) {
  const post = getPostBySlug(params.slug, params.category);

  return (
    <StyledPost
      title={post.metadata.title}
      createdDate={formatDate(post.metadata.createdAt)}
      updatedDate={formatDate(post.metadata.updatedAt)}
      thumbnail={post.metadata.thumbnail}
    >
      <MDXRemote source={post.content} components={components}/>
    </StyledPost>
  );
}