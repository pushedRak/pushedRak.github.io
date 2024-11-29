'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import { usePathname } from 'next/navigation';
export default function Navigation() {
  const pathname = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <div className={styles.space} />
      <nav className={`${styles.nav} ${visible ? '' : styles.hidden}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/logo.png" alt="logo" /> Rak Blog
          </Link>
          <div className={styles.menu}>
            <Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
            <Link href="/posts" className={pathname === '/posts' ? styles.active : ''}>Posts</Link>
            <Link href="/portfolio" className={pathname === '/portfolio' ? styles.active : ''}>Portfolio</Link>
          </div>
        </div>
      </nav>
    </>
  );
}