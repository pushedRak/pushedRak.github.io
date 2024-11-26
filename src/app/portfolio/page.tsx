'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './portfolio.module.css';
import Link from 'next/link';

export default function PortfolioPage() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const isScrollingRef = useRef(false);

  // 애니메이션 완료 후 animationComplete 상태 변경
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 소개 페이지 스크롤 처리
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // 애니메이션이 완료되지 않았으면 모든 스크롤 방지
      if (!animationComplete) {
        e.preventDefault();
        return;
      }

      const main = mainRef.current;
      if (!main) return;

      if (main.scrollTop < window.innerHeight) {
        e.preventDefault();

        if (isScrollingRef.current) return;

        isScrollingRef.current = true;

        const direction = e.deltaY > 0 ? 1 : -1;
        const targetScroll = window.innerHeight * direction;

        main.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000);
      }
    };

    const main = mainRef.current;
    if (main) {
      main.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (main) {
        main.removeEventListener('wheel', handleWheel);
      }
    };
  }, [animationComplete]);

  return (
    <main
      ref={mainRef}
      className={styles.container}
    >
      <nav>
        <Link href="/" className={styles.backToBlog}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/logo.png" alt="logo" className={styles.backToBlogIcon} />
          블로그로 돌아가기
        </Link>
      </nav>
      <section className={`${styles.introduction} ${styles.section}`}>
        <p className={styles.textFadeIn}>안녕하세요</p>
        <p className={styles.secondText}>
          프론트엔드 개발자 <span className={styles.name}>손민락</span>입니다.</p>
      </section>
      <section className={styles.section}>
        <h2>기술 스택</h2>
      </section>
    </main>
  );
}