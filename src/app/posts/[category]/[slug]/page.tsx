import { getPostBySlug, getAllPostSlugs } from '@/utils/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './post.module.css';
import { formatDate } from '@/utils/dateFormat';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();

  return posts.map((post) => ({
    category: post.params.category.toLowerCase(),
    slug: post.params.slug,
  }));
}
const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className={styles.heading1} {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className={styles.heading2} {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className={styles.paragraph} {...props} />,
  code: (props: React.HTMLAttributes<HTMLElement>) => <code className={styles.codeBlock} {...props} />,
};

export default function Post({ params }: { params: { category: string; slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.metadata.title}</h1>
        <time className={styles.date}>{formatDate(post.metadata.date)}</time>
      </header>
      <div className={styles.content}>
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}