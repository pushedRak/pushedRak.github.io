import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { PostData } from '@/types/post';
import { formatDate } from '@/utils/dateFormat';

const Container = styled(Link)`
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingSpinner = styled(Loader2)`
  position: absolute;
  color: #666;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container href={`/posts/${decodeURIComponent(post.category)}/${post.slug}`}>
      <Article>
        <ThumbnailContainer>
          {isLoading && <LoadingSpinner size={24} />}
          <Image 
            src={post.metadata.thumbnail || ''} 
            alt={post.metadata.title}
            fill
            style={{
              objectFit: 'contain',
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.3s ease'
            }}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </ThumbnailContainer>
        <Content>
          <h2>{post.metadata.title}</h2>
          <Description>{post.metadata.description}</Description>
          <ContentFooter>
            <time>{formatDate(post.metadata.createdAt)}</time>
            <p>·</p>
            <p>{decodeURIComponent(post.category)}</p>
            {post.subcategory && (
              <>
                <p>·</p>
                <p>{decodeURIComponent(post.subcategory)}</p>
              </>
            )}
          </ContentFooter>
        </Content>
      </Article>
    </Container>
  );
}