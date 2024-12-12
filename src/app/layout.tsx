'use client';

import Navigation from '@/components/NavigationBar';
import '@/app/globals.css';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';

const Main = styled.main<{ $isPortfolio: boolean }>`
  padding-top: ${props => props.$isPortfolio ? '0' : '80px'};
  max-width: ${props => props.$isPortfolio ? 'none' : '1012px'};
  margin: ${props => props.$isPortfolio ? '0' : '0 auto'};
  padding: ${props => props.$isPortfolio ? '0' : '0 16px'};
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isPortfolio = pathname === '/portfolio';

  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          {!isPortfolio && <Navigation />}
          <Main $isPortfolio={isPortfolio}>
            {children}
          </Main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}