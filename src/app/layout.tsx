import Script from 'next/script';
import { getCategoryStructure } from '@/utils/mdx';
import ClientLayout from '@/app/ClientLayout';


const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categoryStructure = getCategoryStructure();
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
      <ClientLayout categories={categoryStructure}>
        {children}
      </ClientLayout>
    </html>
  );
}