'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PostData } from '@/types/post';
import styles from './PostList.module.css';
import { formatDate } from '@/utils/dateFormat';

interface PostListProps {
  initialPosts: PostData[];
}

export default function PostList({ initialPosts }: PostListProps) {
  const [selectedCategory, setSelectedCategory] = useState<'cs' | 'development' | undefined>();
  const categories = [{
    category: 'cs',
    name: 'CS',
  }, {
    category: 'development',
    name: '개발',
  }];
  const filteredPosts = selectedCategory
    ? initialPosts.filter(post => post.category === selectedCategory)
    : initialPosts;

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <button
          className={`${styles.categoryButton} ${!selectedCategory ? styles.active : ''}`}
          onClick={() => setSelectedCategory(undefined)}
        >
          전체
        </button>
        <button
          className={`${styles.categoryButton} ${selectedCategory === 'cs' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('cs')}
        >
          CS
        </button>
        <button
          className={`${styles.categoryButton} ${selectedCategory === 'development' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('development')}
        >
          개발
        </button>
      </div>

      <div className={styles.posts}>
        {filteredPosts.map((post) => (
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
    </div>
  );
}