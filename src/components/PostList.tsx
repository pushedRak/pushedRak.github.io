'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { PostData } from '@/types/post';
import Post from './Post';

const Container = styled.div`
  margin-top: 32px;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NoPostMessage = styled.div`
  display: flex;
  margin: 3rem auto;
`

const Categories = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

const CategoryButton = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: ${props => props.$active ? '#000' : 'none'};
  color: ${props => props.$active ? '#fff' : 'inherit'};
  cursor: pointer;
  transition: all 0.2s ease;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`

const Button = styled.button<{ $selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.75rem;
  height: 1.75rem;
  background-color: ${props => props.$selected ? "#000" : "transparent"};
  color: ${props => props.$selected ? "#fff" : "inherit"};
  border: none;
  border-radius: 9999px;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
`

interface PostListProps {
  initialPosts: PostData[];
}

const POSTS_PER_PAGE = 5;

export default function PostList({ initialPosts }: PostListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [currentPage, setCurrentpage] = useState(1);
  const categories = [{
    category: 'cs',
    name: 'CS',
  }, {
    category: 'development',
    name: '개발',
  }, {
    category: 'algoritym',
    name: '알고리즘',
  }];
  const filteredPosts = selectedCategory
    ? initialPosts.filter(post => post.category === selectedCategory)
    : initialPosts;
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  return (
    <Container>
      <Categories>
        <CategoryButton
          $active={!selectedCategory}
          onClick={() => setSelectedCategory(undefined)}
        >
          전체
        </CategoryButton>
        {categories.map((category, index) => (
          <CategoryButton 
            key={index}
            $active={selectedCategory === category.category}
            onClick={() => setSelectedCategory(category.category)}
          >
            {category.name}
          </CategoryButton>
          ))}
      </Categories>

      <Posts>
        {paginatedPosts.length !== 0 ? paginatedPosts.map((post, index) => (
          <Post key={index} post={post} />
        )) : (
          <NoPostMessage>
            포스트가 없습니다.
          </NoPostMessage>
        )}
      </Posts>

      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button $selected={index + 1 === currentPage} key={index + 1} onClick={() => setCurrentpage(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </Pagination>
    </Container>
  );
}