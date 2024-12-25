'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { PostData } from '@/types/post';
import Post from './Post';

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  margin-bottom: 1.7rem;
`;

const More = styled(Link)`
  margin-left: auto;
  text-decoration: none;
  color: inherit;
`;

interface HomeContentProps {
  posts: PostData[];
}

export default function HomeContent({ posts }: HomeContentProps) {
  return (
    <div>
      <Title>최근 포스트</Title>
      <Posts>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Posts>
      <More href="/posts">
        모든 포스트 보기 →
      </More>
    </div>
  );
}