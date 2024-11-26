import styles from './introduction.module.css';

export default function Introduction() {
  return (<section className={styles.container}>
    <div className={styles.nameContainer}>
      <p>안녕하세요, 프론트엔드 개발자</p>
      <p className={styles.name}>손민락</p>
      <p>입니다.</p>
    </div>
    <div className={styles.description}>
      <p className={styles.descriptionTitle}>사용자 경험을 중요하게 생각합니다.</p>
      <p>단순한 기능 구현을 넘어 사용자에게 인상깊은 경험을 남기고자 합니다.</p>
      <p>사용자 경험을 해칠 수 있는 사소한 디테일에도 신경을 많이 쓰는 편입니다.</p>
    </div>
  </section>
  );
}
