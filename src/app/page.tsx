import Link from 'next/link';
import { getMdxFiles } from '@/utils/mdx';
import styles from './page.module.css';

const Home: React.FC = () => {
  const posts = getMdxFiles().slice(0, 5);
  
  return (
    <div className={styles.container}>
      <section className={styles.posts}>
        <h2>최근 포스트</h2>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <article className={styles.post}>
              <h3>{post.metadata.title}</h3>
              <p>{post.metadata.description}</p>
              <time>{post.metadata.date}</time>
            </article>
          </Link>
        ))}
        <Link href="/posts" className={styles.more}>
          모든 포스트 보기 →
        </Link>
      </section>
    </div>
  );
}

export default Home;