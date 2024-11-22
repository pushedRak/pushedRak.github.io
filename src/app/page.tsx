import { getMdxFiles } from '@/utils/mdx';

const Home: React.FC = () => {
  const posts = getMdxFiles();
  return (
    <div>
      {posts.map((post) => (
        <article key={post.slug}>
          <h2>{post.metadata.title}</h2>
          <p>{post.metadata.description}</p>
        </article>
      ))}
    </div>
  )
}

export default Home;