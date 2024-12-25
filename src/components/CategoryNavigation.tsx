import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-self: end;
  width: 13.5rem;
  padding: 1rem 1.5rem 0;
`

const CategoryTitle = styled.div`
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: #666;
  border-bottom: 1px solid #999;
`

const NavItem = styled.div`
`

const CategoryLink = styled(Link)<{$isSelected: boolean}>`
  font-weight: ${props => props.$isSelected ? 'bold' : ''};
  &:hover {
    text-decoration: underline;
  }
`

const SubCategories = styled.div`
`

interface CategoryNavigationProps {
  categories: Record<string, string[]>;
}

export default function CategoryNavigation ({categories}: CategoryNavigationProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const pathname = usePathname();

  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    const sub = searchParams.get('sub');

    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
    }

    if (sub) {
      setSelectedSubcategory(sub);
    } else {
      setSelectedSubcategory(null);
    }
  }, [searchParams]);

  if (pathname.startsWith('/posts/') && pathname !== '/posts/') {
    return null;
  }

  return (
    <Container>
      <CategoryTitle>
        카테고리 목록
      </CategoryTitle>
      {Object.entries(categories).map(([category, subs]) => (
        <NavItem key={category}>
          <CategoryLink 
            $isSelected={selectedCategory === category && !selectedSubcategory} 
            href={`/posts?category=${category}`}
          >
            {category}
          </CategoryLink>

          <SubCategories>
            {subs.map((sub, index) => (
              <>
                {index === subs.length - 1 ? '└ ' : '├ '}
                <CategoryLink
                  key={sub}
                  $isSelected={selectedCategory === category && selectedSubcategory === sub} 
                  href={`/posts?category=${category}&sub=${sub}`}
                >
                  {decodeURIComponent(sub)}
                </CategoryLink>
              </>
            ))}
          </SubCategories>
        </NavItem>
      ))}
    </Container>
  )
}