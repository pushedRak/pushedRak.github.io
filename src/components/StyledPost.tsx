'use client';

import { ArrowLeft } from 'lucide-react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const GoBackButton = styled.button`
  display: flex;
`

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 2.75rem;
  margin-bottom: 0.75rem;
  color: #333;
`;

const Date = styled.time`
  font-size: 1rem;
  color: #666;
`;

const Content = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    color: #444;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }

  pre {
    background-color: #f4f4f4;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    line-height: 1.5;
  }
`;

interface StyledPostProps {
  title: string;
  date: string;
  children: React.ReactNode;
}

export default function StyledPost({ title, date, children }: StyledPostProps) {
  const handleGoBack = () => {
    window.history.back(); // 브라우저 히스토리에서 이전 페이지로 이동
  };

  return (
    <article>
      <Header>
        <Title>
          <GoBackButton onClick={handleGoBack}>
            <ArrowLeft size={'2rem'}/>
          </GoBackButton>
          {title}
        </Title>
        <Date>{date}</Date>
      </Header>
      <Content>{children}</Content>
    </article>
  );
}