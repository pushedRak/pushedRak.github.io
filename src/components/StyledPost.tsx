'use client';

import { ArrowLeft } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from './Image';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
`;

const GoBackButton = styled.button`
  display: flex;
`;

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
  margin-bottom: 0.4rem;
`;

const Thumbnail = styled.div`
  position: relative;
  width: 50%;
  aspect-ratio: 1.6;
  margin: 0 auto;
  padding: 0 17%;
`

const Content = styled.div`
  min-height: 100vh;
  padding-bottom: 80vh;
  color: #191b1d;
  font-size: 1.1rem;
  * {
    margin-bottom: 1.2rem;
  }

  h1 {
    font-size: 2.3rem;
    margin-top: 5rem;
  }

  h2 {
    font-size: 1.85rem;
    margin-top: 4rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 3rem;
  }

  p {
    line-height: 1.75;
  }

  pre {
    background-color: #f8f9fa;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    line-height: 1.5;
  }

  ul li, ol li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    position: relative;
    margin: 0 0 1.2rem;
    padding: 1rem 2rem;
    background-color: #f8f9fa;

    &::before { // 왼쪽 끝에 검은색 색칠 추가
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 5px;
      background-color: black;
    }

    p {
      margin-bottom: 0;
    }
  }
`;

const TocContainer = styled.nav`
  position: fixed;
  top: 30%;
  right: 0;
  width: 15%;
  color: #555;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: 400;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      &.active > a {
        font-weight: 800;
      }
    }

    li.level-2 {
      margin-left: 0.5rem;
    }

    li.level-3 {
      margin-left: 1rem;
    }
  }
`;

interface StyledPostProps {
  title: string;
  createdDate: string;
  updatedDate?: string;
  thumbnail: string;
  children: React.ReactNode;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function StyledPost({ title, createdDate, updatedDate, thumbnail, children }: StyledPostProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null); // 현재 활성화된 섹션 ID
  const contentRef = useRef<HTMLDivElement>(null);

  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h1, h2, h3');
      const toc = Array.from(headings).map((heading) => {
        const id = heading.id || heading.textContent?.replace(/\s+/g, '-').toLowerCase();
        if (id) {
          heading.id = id;
        }
        return {
          id: id || '',
          text: heading.textContent || '',
          level: parseInt(heading.tagName[1], 10),
        };
      });
      setTocItems(toc);
    }
  }, [children]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.scrollY + elementPosition - topOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            setActiveId(entry.target.id); // 현재 보이는 섹션의 ID 설정
          }
        });
      },
      { rootMargin: `-100px 0px -${window.innerHeight - 105}px 0px`,
        threshold: 0
       }
    );

    const headings = contentRef.current?.querySelectorAll('h1, h2, h3');
    headings?.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  return (
    <article>
      <Header>
        <Title>
          <GoBackButton onClick={handleGoBack}>
            <ArrowLeft size={'2rem'} />
          </GoBackButton>
          {title}
        </Title>
        <Date>{createdDate} 게시</Date>
        {updatedDate && <Date>{updatedDate} 수정</Date>}
      </Header>
      {thumbnail && 
        <Thumbnail>
          <Image thumbnail={thumbnail} alt={title}/>
        </Thumbnail>
      }
      <Content ref={contentRef}>{children}</Content>
      <TocContainer>
        <ul>
          {tocItems.map((item) => (
            <li
              key={item.id}
              className={`level-${item.level} ${activeId === item.id ? 'active' : ''}`}
            >
              <a onClick={() => handleScroll(item.id)}>{item.text}</a>
            </li>
          ))}
        </ul>
      </TocContainer>
    </article>
  );
}
