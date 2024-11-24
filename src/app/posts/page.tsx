import Link from 'next/link';
import { getMdxFiles } from '@/utils/mdx';
import styles from './posts.module.css';

export default function Posts() {
  const posts = getMdxFiles();
  
  return (
    <div className={styles.container}>
      <h1>블로그 포스트</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug} className={styles.post}>
            <article>
              <h2>{post.metadata.title}</h2>
              <p>{post.metadata.description}</p>
              <time>{post.metadata.date}</time>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}