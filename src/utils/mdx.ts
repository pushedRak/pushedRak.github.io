import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 모든 포스트 가져오기
export function getMdxFiles() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    return getPostBySlug(slug);
  });

  // 날짜순으로 정렬 (최신순)
  return posts.sort((post1, post2) => {
    return post1.metadata.date > post2.metadata.date ? -1 : 1;
  });
}

// 특정 포스트 가져오기
export function getPostBySlug(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data,
    content
  };
}

// 모든 포스트의 slug 가져오기
export function getAllPostSlugs() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, '')
      }
    };
  });
}