'use client';

import Navigation from '@/components/NavigationBar';
import styles from './layout.module.css';
import '@/app/globals.css';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <html lang="ko">
      <body>
        {pathname !== '/portfolio' && <Navigation />}
        <main className={styles.main} data-portfolio={pathname === '/portfolio'}>
          {children}
        </main>
      </body>
    </html>
  )
}