import { PostData } from '@/types/post';
import Link from 'next/link';

interface PostListProps {
  posts: PostData[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.slug}>
          <article className="post-card">
            <h2>{post.metadata.title}</h2>
            <time>{post.metadata.date}</time>
            <p>{post.metadata.description}</p>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default PostList;