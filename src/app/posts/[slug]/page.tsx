import { getPostBySlug, getAllPostSlugs } from '@/utils/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './post.module.css';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  
  return posts.map((post) => ({
    slug: post.params.slug,
  }));
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  return (
    <article className={styles.article}>
      <header>
        <h1>{post.metadata.title}</h1>
        <time>{post.metadata.date}</time>
      </header>
      <div className={styles.content}>
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}