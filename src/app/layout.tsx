'use client';

import Navigation from '@/components/NavigationBar';
import '@/app/globals.css';
import { usePathname } from 'next/navigation';
import StyledComponentsRegistry from '@/lib/registry';
import Script from 'next/script';

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
          <main>
            {children}
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}