'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PostData } from '@/types/post';
import Post from './Post';
import { useSearchParams } from 'next/navigation';

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 1.7rem;
`;

const NoPostMessage = styled.div`
  display: flex;
  margin: 3rem auto;
`

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
  const [currentPage, setCurrentpage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    const sub = searchParams.get('sub');

    console.log('category:', category);
    console.log('sub:', sub);

    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);
  
  const filteredPosts = selectedCategory
    ? initialPosts.filter(post => post.category === selectedCategory)
    : initialPosts;
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  return (
    <div>
      <Title>포스트 목록</Title>
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
    </div>
  );
}