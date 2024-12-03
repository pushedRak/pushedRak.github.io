import Link from 'next/link';
import { getMdxFiles } from '@/utils/mdx';
import styles from './page.module.css';
import { formatDate } from '@/utils/dateFormat';

const Home: React.FC = () => {
  const posts = getMdxFiles().slice(0, 5);
  const categories = [{
    category: 'cs',
    name: 'CS',
  }, {
    category: 'development',
    name: '개발',
  }];

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>최근 포스트</h2>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link href={`/posts/${post.category.toLowerCase()}/${post.slug}`} key={post.slug} className={styles.post}>
              <article className={styles.article}>
                <div className={styles.thumbnailContainer}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.metadata.thumbnail} alt={post.metadata.title} className={styles.thumbnail} />
                </div>
                <div className={styles.content}>
                  <h2>{post.metadata.title}</h2>
                  <p className={styles.description}>{post.metadata.description}</p>
                  <div className={styles.contentFooter}>
                    <time>{formatDate(post.metadata.date)}</time>
                    <p>·</p>
                    <p>{categories.find(category => category.category === post.category)?.name}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <Link href="/posts" className={styles.more}>
          모든 포스트 보기 →
        </Link>
      </section>
    </div>
  );
}

export default Home;