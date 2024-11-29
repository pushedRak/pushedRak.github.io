import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 모든 포스트 가져오기
export function getMdxFiles() {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  const categories = fs.readdirSync(postsDirectory);
  
  const posts = categories.flatMap((category) => {
    const categoryPath = path.join(postsDirectory, category);
    const fileNames = fs.readdirSync(categoryPath);
    
    return fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      return getPostBySlug(slug);
    });
  });

  // 날짜순으로 정렬 (최신순)
  return posts.sort((post1, post2) => {
    return post1.metadata.date > post2.metadata.date ? -1 : 1;
  });
}

// 특정 포스트 가져오기
export function getPostBySlug(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  const categories = fs.readdirSync(postsDirectory);
  
  for (const category of categories) {
    const fullPath = path.join(postsDirectory, category, `${slug}.mdx`);
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        category,
        metadata: data,
        content
      };
    }
  }
  
  throw new Error(`Post with slug '${slug}' not found`);
}

// 모든 포스트의 slug 가져오기
export function getAllPostSlugs() {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  const categories = fs.readdirSync(postsDirectory);
  
  return categories.flatMap((category) => {
    const categoryPath = path.join(postsDirectory, category);
    const fileNames = fs.readdirSync(categoryPath);
    
    return fileNames.map((fileName) => {
      return {
        params: {
          category: category,
          slug: fileName.replace(/\.mdx$/, '')
        }
      };
    });
  });
}

// 카테고리별 포스트 가져오기
export function getPostsByCategory(category?: 'cs' | 'development') {
  const posts = getMdxFiles();
  
  if (!category) return posts;

  return posts.filter((post) => post.category.toLowerCase() === category);
}
