import Skill from './Skill';
import styles from './skills.module.css';

export default function Skills() {
  return <section className={styles.skills}>
    <h1 className={styles.title}>Skills</h1>
    <div className={styles.skillListContainer}>
      <div className={styles.skillListTitle}>중상</div>
      <div className={styles.skillList}>
        <Skill name="ReactJS" icon="/icons/reactJSIcon.webp" />
        <Skill name="Javascript" icon="/icons/javascriptIcon.webp" />
        <Skill name="Typescript" icon="/icons/typescriptIcon.webp" />
        <Skill name="Zustand" icon="/icons/zustandIcon.webp" />
        <Skill name="TailwindCSS" icon="/icons/tailwindIcon.webp" />
        <Skill name="Styled-Components" icon="/icons/styledComponentsIcon.webp" />
        <Skill name="C++" icon="/icons/cplusplusIcon.webp" />
      </div>
      <div className={styles.skillListTitle}>중</div>
      <div className={styles.skillList}>
        <Skill name="Java" icon="/icons/javaIcon.webp" />
        <Skill name="VueJS" icon="/icons/vueJSIcon.webp" />
        <Skill name="Redux" icon="/icons/reduxIcon.webp" />
        <Skill name="NextJS" icon="/icons/nextJSIcon.webp" />
        <Skill name="React Query" icon="/icons/reactQueryIcon.webp" />
        <Skill name="Python" icon="/icons/pythonIcon.webp" />
      </div>
    </div>
  </section>
}