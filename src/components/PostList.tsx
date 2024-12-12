'use client';

import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { PostData } from '@/types/post';
import { formatDate } from '@/utils/dateFormat';

const Container = styled.div`
  margin-top: 32px;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostLink = styled(Link)`
  padding: 1.5rem 0;
  border-top: 1px solid #e0e0e0;
  text-decoration: none;
  
  &:last-child {
    border-bottom: 1px solid #e0e0e0;
  }
  
  &:visited {
    color: inherit;
  }
`;

const Article = styled.article`
  display: flex;
  gap: 16px;
`;

const ThumbnailContainer = styled.div`
  width: 200px;
  height: 150px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  padding: 0.75rem 0;
`;

const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  font-size: 0.875rem;
  color: #666;
`;

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
    <Container>
      <Categories>
        <CategoryButton
          $active={!selectedCategory}
          onClick={() => setSelectedCategory(undefined)}
        >
          전체
        </CategoryButton>
        <CategoryButton
          $active={selectedCategory === 'cs'}
          onClick={() => setSelectedCategory('cs')}
        >
          CS
        </CategoryButton>
        <CategoryButton
          $active={selectedCategory === 'development'}
          onClick={() => setSelectedCategory('development')}
        >
          개발
        </CategoryButton>
      </Categories>

      <Posts>
        {filteredPosts.map((post) => (
          <PostLink href={`/posts/${post.category.toLowerCase()}/${post.slug}`} key={post.slug}>
            <Article>
              <ThumbnailContainer>
                <Thumbnail src={post.metadata.thumbnail} alt={post.metadata.title} />
              </ThumbnailContainer>
              <Content>
                <h2>{post.metadata.title}</h2>
                <Description>{post.metadata.description}</Description>
                <ContentFooter>
                  <time>{formatDate(post.metadata.date)}</time>
                  <p>·</p>
                  <p>{categories.find(category => category.category === post.category)?.name}</p>
                </ContentFooter>
              </Content>
            </Article>
          </PostLink>
        ))}
      </Posts>
    </Container>
  );
}