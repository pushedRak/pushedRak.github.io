'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { PostData } from '@/types/post';
import Post from './Post';
import AnalyticsCounter from './AnalyticsCounter';

const Container = styled.div`
  display: flex;
  margin-top: 32px;
  min-height: calc(100vh - 96px);
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const PostListSection = styled(Section)`
  flex: 3;  
  gap: 16px;
  width: 1024px;
  margin: 0 auto;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  margin-bottom: 11px;
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
    <Container>
      <Section>
      </Section>
      <PostListSection>
        <Title>최근 포스트</Title>
        <Posts>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </Posts>
        <More href="/posts">
          모든 포스트 보기 →
        </More>
      </PostListSection>
      <Section>
        <AnalyticsCounter />
      </Section>
    </Container>
  );
}