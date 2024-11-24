import styles from './portfolio.module.css';

export default function PortfolioPage() {
  return (
    <main>
      {/* 자기소개 */}
      <section className={styles.introduction}>
        <h2>Introduction</h2>
        <div className={styles.nameContainer}>
          <p>안녕하세요, 프론트엔드 개발자</p>
          <p className={styles.name}>손민락</p>
          <p>입니다.</p>
        </div>
        <div>
          <p>사용자 경험을 중요하게 생각합니다.</p>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skillList}>
          <div className={styles.skill}>HTML</div>
          <div className={styles.skill}>CSS</div>
          <div className={styles.skill}>JavaScript</div>
          <div className={styles.skill}>TypeScript</div>
        </div>
      </section>
    </main>
  );
}