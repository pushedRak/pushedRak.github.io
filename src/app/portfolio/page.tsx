/* eslint-disable @next/next/no-img-element */
import Project from '@/components/Project';
import styles from './portfolio.module.css';

export default function PortfolioPage() {
  return (
    <main className={styles.container}>
      {/* 자기소개 */}
      <section>
        <h1 className={styles.title}>Introduction</h1>
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

      {/* 기술 스택 */}
      <section className={styles.skills}>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.skillList}>
          <div className={styles.skill}>
            <img src="/icons/reactJSIcon.webp" alt="react" className={styles.skillIcon} />
            ReactJS
          </div>
          <div className={styles.skill}>
            <img src="/icons/vueJSIcon.webp" alt="vue" className={styles.skillIcon} />
            VueJS
          </div>
          <div className={styles.skill}>
            <img src="/icons/nextJSIcon.webp" alt="next" className={styles.skillIcon} />
            NextJS
          </div>
          <div className={styles.skill}>
            <img src="/icons/javascriptIcon.webp" alt="javascript" className={styles.skillIcon} />
            Javascript
          </div>
          <div className={styles.skill}>
            <img src="/icons/typescriptIcon.webp" alt="typescript" className={styles.skillIcon} />
            Typescript
          </div>
          <div className={styles.skill}>
            <img src="/icons/reduxIcon.webp" alt="redux" className={styles.skillIcon} />
            Redux
          </div>
          <div className={styles.skill}>
            <img src="/icons/zustandIcon.webp" alt="zustand" className={styles.skillIcon} />
            Zustand
          </div>
          <div className={styles.skill}>
            <img src="/icons/reactQueryIcon.webp" alt="react-query" className={styles.skillIcon} />
            React Query
          </div>
          <div className={styles.skill}>
            <img src="/icons/tailwindIcon.webp" alt="tailwind" className={styles.skillIcon} />
            TailwindCSS
          </div>
          <div className={styles.skill}>
            <img src="/icons/styledComponentsIcon.webp" alt="styled-components" className={styles.skillIcon} />
            Styled-Components
          </div>
          <div className={styles.skill}>
            <img src="/icons/cplusplusIcon.webp" alt="cplusplus" className={styles.skillIcon} />
            C++
          </div>
          <div className={styles.skill}>
            <img src="/icons/javaIcon.webp" alt="java" className={styles.skillIcon} />
            Java
          </div>
          <div className={styles.skill}>
            <img src="/icons/pythonIcon.webp" alt="python" className={styles.skillIcon} />
            Python
          </div>
        </div>
      </section>

      {/* 프로젝트 */}
      <section className={styles.projects}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projectList}>
          <Project
            githubLink="https://github.com/camforest/CampForest"
            image="/images/project-1.png"
            title="CampForest" 
            award="🏆 SSAFY 공통 프로젝트 우수상(3등)" 
            period="2024.07 ~ 2024.08" 
            description={[
              "캠핑 장비 대여 SNS 서비스입니다.",
              "저렴한 장비 대여, 캠핑장에 대한 신뢰성 있는 정보를 제공합니다.",
              "그리고 캠퍼 간의 활발한 정보 교류를 통해 경제적인 캠핑 문화를 즐길 수 있습니다."]
            }
            techStack={["React", "TypeScript", "Tailwind", "Redux"]}
          />
          <Project 
            githubLink="https://github.com/zozoclub/newlearn"
            image="/images/project-2.png"
            title="NewLearn" 
            award="🏆 SSAFY 특화 프로젝트 우수상(1등)" 
            period="2024.08 ~ 2024.10" 
            description={[
              "국내 뉴스 기반 영어 학습 서비스입니다.",
              "추천 기능을 바탕으로 사용자의 관심사에 맞는 뉴스를 추천합니다.",
              "단어 학습, 발음 테스트와 수준별 뉴스를 바탕으로 영어 학습을 도와줍니다."]
            }
            techStack={["React", "TypeScript", "Styled-Components", "Recoil"]}
          />
          <Project 
            githubLink="https://github.com/eum-silvertown/eum"
            image="/images/project-3.png"
            title="이음" 
            award="SSAFY 자율 프로젝트" 
            period="2024.10 ~ 2024.11" 
            description={[
              "학교 수업을 보조해주는 서비스입니다.",
              "실시간 화면 공유, 시험, 숙제 등을 통해 원할한 수업 진행을 도와줍니다.",
              "또한 PDF 파일에서 자동으로 문제를 추출하여 선생님의 수업 준비를 쉽게 할 수 있도록 도와줍니다."]
            }
            techStack={["React-Native", "TypeScript", "Zustand"]}
          />
        </div>
      </section>
    </main>
  );
}