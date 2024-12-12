'use client';

import Link from 'next/link';
import { formatDate } from '@/utils/dateFormat';
import styled from 'styled-components';
import { PostData } from '@/types/post';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const Post = styled(Link)`
  padding: 1.5rem 0;
  border-top: 1px solid #e0e0e0;
  text-decoration: none;
  color: inherit;

  &:last-child {
    border-bottom: 1px solid #e0e0e0;
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

const More = styled(Link)`
  margin-left: auto;
  text-decoration: none;
  color: inherit;
`;

interface HomeContentProps {
  posts: PostData[];
  categories: { category: string; name: string; }[];
}

export default function HomeContent({ posts, categories }: HomeContentProps) {
  return (
    <Container>
      <Section>
        <Title>최근 포스트</Title>
        <Posts>
          {posts.map((post) => (
            <Post href={`/posts/${post.category.toLowerCase()}/${post.slug}`} key={post.slug}>
              <Article>
                <ThumbnailContainer>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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
            </Post>
          ))}
        </Posts>
        <More href="/posts">
          모든 포스트 보기 →
        </More>
      </Section>
    </Container>
  );
}