/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './portfolio.module.css';
import Link from 'next/link';
import Projects from '@/components/project/Projects';
import Skills from '@/components/skill/Skills';
import NewLearnDetail from '@/components/project/NewLearnDetail';
import CampforestDetail from '@/components/project/CampforestDetail';
import EumDetail from '@/components/project/EumDetail';

export default function PortfolioPage() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const isScrollingRef = useRef(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<string>('intro');

  const openModal = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const renderProjectDetail = () => {
    if (!selectedProject) return null;

    const modalContent = () => {
      switch (selectedProject) {
        case '01':
          return <NewLearnDetail />;
        case '02':
          return <CampforestDetail />;
        case '03':
          return <EumDetail />;
        default:
          return null;
      }
    };

    return (
      <div className={styles.modalOverlay} onClick={closeModal}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
          {modalContent()}
        </div>
      </div>
    );
  };

  // 애니메이션 완료 후 animationComplete 상태 변경
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 휠 이벤트 핸들러
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // 모달이 열려있고, 이벤트가 모달 내부에서 발생한 경우 기본 스크롤 동작 허용
    if (selectedProject && (
      (e.target as HTMLElement).closest(`.${styles.modal}`)
    )) {
      return;  // 모달 내부 스크롤은 기본 동작 유지
    }
    
      if (!animationComplete || selectedProject) {
        e.preventDefault();
        return;
      }

      const main = mainRef.current;
      if (!main) return;

      e.preventDefault();

      if (isScrollingRef.current) return;

      isScrollingRef.current = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const targetScroll = main.scrollTop + main.clientHeight * direction;

      main.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
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
  }, [animationComplete, selectedProject]);

  useEffect(() => {
    const handleScroll = () => {
      const main = mainRef.current;
      if (!main) return;

      const sections = main.querySelectorAll('section');
      const scrollPosition = main.scrollTop + main.clientHeight / 3;

      sections.forEach((section) => {
        if(!section.id) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(section.id);
        }
      });
    };

    const main = mainRef.current;
    if (main) {
      main.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (main) {
        main.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const main = mainRef.current;
    if (!main) return;

    const section = main.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main
      ref={mainRef}
      className={styles.container}
    >
      <nav className={styles.backToBlogContainer}>
        <Link href="/" className={styles.backToBlog}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/logo.png" alt="logo" className={styles.backToBlogIcon} />
          블로그로 돌아가기
        </Link>
      </nav>

      <section id="intro" className={`${styles.introduction} ${styles.section}`}>
        <p className={styles.textFadeIn}>안녕하세요</p>
        <p className={styles.secondText}>
          프론트엔드 개발자 <span className={styles.name}>손민락</span>입니다.</p>
      </section>

      <section id="skills" className={styles.section}>
        <Skills />
      </section>

      <section id="projects" className={`${styles.section} ${styles.graySection}`}>
        <Projects openModal={openModal} />
      </section>

      <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.contactList}>
          <div>
            <div className={styles.contactItem}>
              <p className={styles.contactTitle}>Email</p>
              <p>hohosamdy@gmail.com</p>
            </div>
          </div>
          <div>
            <a href="https://github.com/pushedRak" target="_blank" rel="noreferrer" className={styles.contactIcon}>
              <img src="/icons/githubIcon.png" alt="github" className={styles.contactIconImage} />
            </a>
          </div>
        </div>
      </section>

      <nav className={styles.sideNav}>
        <ul>
          <li className={currentSection === 'intro' ? styles.active : ''}>
            <button onClick={() => scrollToSection('intro')}>소개</button>
          </li>
          <li className={currentSection === 'skills' ? styles.active : ''}>
            <button onClick={() => scrollToSection('skills')}>기술 스택</button>
          </li>
          <li className={currentSection === 'projects' ? styles.active : ''}>
            <button onClick={() => scrollToSection('projects')}>프로젝트</button>
          </li>
          <li className={currentSection === 'contact' ? styles.active : ''}>
            <button onClick={() => scrollToSection('contact')}>연락처</button>
          </li>
        </ul>
      </nav>

      {renderProjectDetail()}
    </main>
  );
}