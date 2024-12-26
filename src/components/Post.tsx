import styled from 'styled-components';
import Link from 'next/link';
import { PostData } from '@/types/post';
import { formatDate } from '@/utils/dateFormat';
import { getCategoryName } from '@/utils/categoryFormat';
import Image from './Image';

const Container = styled(Link)`
  padding: 2rem 0;
  border-top: 1px solid #e5e7e9;
  text-decoration: none;
  color: inherit;

  &:last-child {
    border-bottom: 1px solid #e5e7e9;
  }
`;

const Article = styled.article`
  display: flex;
  gap: 16px;
`;

const ThumbnailContainer = styled.div`
  width: 200px;
  height: 150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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

interface PostProps {
  post: PostData;
}

export default function Post({post}: PostProps) {
  return (
    <Container href={`/posts/${post.category}/${post.slug}`}>
      <Article>
        <ThumbnailContainer>
          {post.metadata.thumbnail &&
            <Image 
            thumbnail={post.metadata.thumbnail}
            alt={post.metadata.title}
            />
          } 
        </ThumbnailContainer>
        <Content>
          <h2>{post.subcategory && `[${post.subcategory}] `}{post.metadata.title}</h2>
          <Description>{post.metadata.description}</Description>
          <ContentFooter>
            <time>{formatDate(post.metadata.createdAt)}</time>
            <p>·</p>
            <p>{getCategoryName(post.category)}</p>
          </ContentFooter>
        </Content>
      </Article>
    </Container>
  );
}