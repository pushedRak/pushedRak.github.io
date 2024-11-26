/* eslint-disable @next/next/no-img-element */
import styles from './portfolio.module.css';
import Introduction from '@/components/Introduction';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function PortfolioPage() {
  return (
    <main className={styles.container}>
      <div className={styles.snapContainer}>
        {/* 각 섹션들 */}
        <section className={styles.snapSection}>
          <Introduction />
        </section>

        <section className={styles.snapSection}>
          <Skills />
        </section>

        <section className={styles.snapSection}>
          <Projects />
        </section>

        <section className={styles.snapSection}>
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
      </div>
    </main>
  );
}