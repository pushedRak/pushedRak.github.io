'use client';

import Navigation from '@/components/NavigationBar';
import '@/app/globals.css';
import { usePathname } from 'next/navigation';
import StyledComponentsRegistry from '@/lib/registry';
import Script from 'next/script';
import styled from 'styled-components';
import AnalyticsCounter from '@/components/AnalyticsCounter';

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

const MainSection = styled(Section)`
  flex: 3;  
  gap: 16px;
  width: 1024px;
  margin: 0 auto;
`

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isPortfolio = pathname === '/portfolio';

  return (
    <html lang="ko">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <title>Rak Blog</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </head>
      <body>
        <StyledComponentsRegistry>
          {!isPortfolio && <Navigation />}
          <Container>
            <Section>
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
    </html>
  );
}