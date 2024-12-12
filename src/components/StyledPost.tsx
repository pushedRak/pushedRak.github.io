'use client';

import styled from 'styled-components';

const StyledArticle = styled.article`
  max-width: 1280px;
  margin: 32px auto;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const Title = styled.h1`
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

  code {
    background-color: #f4f4f4;
    padding: 1rem;
    border-radius: 4px;
    font-family: monospace;
  }
`;

interface StyledPostProps {
  title: string;
  date: string;
  children: React.ReactNode;
}

export default function StyledPost({ title, date, children }: StyledPostProps) {
  return (
    <StyledArticle>
      <Header>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Header>
      <Content>{children}</Content>
    </StyledArticle>
  );
}