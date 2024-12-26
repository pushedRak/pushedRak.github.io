  'use client'
  import Navigation from '../components/NavigationBar';
  import StyledComponentsRegistry from '@/lib/registry';
  import styled from 'styled-components';
  import AnalyticsCounter from '../components/AnalyticsCounter';
  import { GlobalStyle } from '@/styles/globalStyle';
import CategoryNavigation from '@/components/CategoryNavigation';
import { Suspense } from 'react';

  const Container = styled.div`
    display: flex;
    margin-top: 2rem;
    min-height: calc(100vh - 96px);
  `;

  const Section = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
  `

  const MainSection = styled(Section)`
    flex: 3;
    gap: 16px;
    max-width: 1024px;
    margin: 0 auto;
  `

  export default function ClientLayout({ 
    children, 
    categories 
  }: { 
    children: React.ReactNode;
    categories: Record<string, string[]>;
  }) {
    console.log(categories);
    return (
      <body>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Navigation />
            <Container>
              <Section>
                <Suspense>
                  <CategoryNavigation categories={categories}/>
                </Suspense>
              </Section>
              <MainSection>
                {children}
              </MainSection>
              <Section>
                <AnalyticsCounter />
              </Section>
            </Container>
          </StyledComponentsRegistry>
        </body>
    );
  }