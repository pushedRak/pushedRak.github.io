import Project from './Project';
import styles from './projects.module.css';

export default function Projects() {
  return <section className={styles.projects}>
    <div className={styles.navigation}>
      <div className={styles.navigationItem}>All</div>
      <div className={styles.navigationItem}>Frontend</div>
      <div className={styles.navigationItem}>Backend</div>
    </div>
    <div className={styles.projectListContainer}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectList}>
        <Project
          image=""
          title="디스플레이 결함 자동 검출 시스템"
          award="🏆 금오공대 졸업논문 발표회 동상"
          period="2023.03 ~ 2023.12"
          teamSize={3}
          description="스마트폰 디스플레이 결함 자동 검출 시스템입니다."
          techStack={[]} />
        <Project
          githubLink="https://github.com/camforest/CampForest"
          image="/images/project-1.png"
          title="Campforest"
          award="🏆 SSAFY 공통 프로젝트 우수상(3등)"
          period="2024.07 ~ 2024.08"
          teamSize={6}
          description={
            "캠핑 장비 대여 SNS 서비스입니다."
          }
          techStack={["React", "TypeScript", "Tailwind", "Redux"]}
        />
        <Project
          githubLink="https://github.com/zozoclub/newlearn"
          image="/images/project-2.png"
          title="NewLearn"
          award="🏆 SSAFY 특화 프로젝트 우수상(1등)"
          period="2024.08 ~ 2024.10"
          teamSize={6}
          description={"국내 뉴스 기반 영어 학습 서비스입니다."}
          techStack={["React", "TypeScript", "Styled-Components", "Recoil"]}
        />
        <Project
          githubLink="https://github.com/eum-silvertown/eum"
          image="/images/project-3.png"
          title="이음"
          award="SSAFY 자율 프로젝트"
          period="2024.10 ~ 2024.11"
          teamSize={6}
          description={"학교 수업을 보조해주는 서비스입니다."}
          techStack={["React-Native", "TypeScript", "Zustand"]}
        />
      </div>
    </div>
  </section>
}