import Navigation from '@/components/NavigationBar';
import styles from './layout.module.css';
import '@/app/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}