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
      return getPostBySlug(slug, category);
    });
  });

  // 날짜순으로 정렬 (최신순)
  return posts.sort((post1, post2) => {
    return post1.metadata.createdAt > post2.metadata.createdAt ? -1 : 1;
  });
}

// 특정 포스트 가져오기
export function getPostBySlug(slug: string, category: string) {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  
  const fullPath = path.join(postsDirectory, category, `${slug}.mdx`);
  if (fs.existsSync(fullPath)) {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      category: category,
      subcategory: data.subcategory ? data.subcategory : undefined,
      metadata: data,
      content
    };
    
  }
  
  throw new Error(`Post with slug '${slug}' category '${category}' not found`);
 }

// 모든 포스트의 slug 가져오기
export function getAllPostSlugs() {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  const categories = fs.readdirSync(postsDirectory);
  
  return categories.flatMap((category) => {
    const categoryPath = path.join(postsDirectory, category);
    const fileNames = fs.readdirSync(categoryPath);
    
    return fileNames.map((fileName) => ({
      params: {
        category: category,
        slug: fileName.replace(/\.mdx$/, '')
      }
    }));
  });
}

// 카테고리별 포스트 가져오기
export function getPostsByCategory(category?: string, subcategory?: string) {
  const posts = getMdxFiles();
  if (!category) return posts;
 
  return posts.filter((post) => {
    const categoryMatch = post.category === category;
    if (!subcategory) return categoryMatch;
    return categoryMatch && 
           post.metadata.subcategory || '' === subcategory;
  });
 }

 export function getCategoryStructure() {
  const posts = getMdxFiles();
  const structure: Record<string, Set<string>> = {};
 
  posts.forEach((post) => {
    const category = post.category;
    const subcategory = post.metadata.subcategory ? 
      post.metadata.subcategory : undefined;
 
    if (!structure[category]) {
      structure[category] = new Set();
    }
    
    if (subcategory) {
      structure[category].add(subcategory);
    }
  });
 
  return Object.fromEntries(
    Object.entries(structure).map(([category, subcategories]) => [
      category,
      Array.from(subcategories)
    ])
  );
 }