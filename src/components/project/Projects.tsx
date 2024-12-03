import { useState } from "react";
import styles from "./Projects.module.css";
import Project from "./Project";

interface ProjectsProps { 
  openModal: (projectId: string) => void;
}

export default function Projects({ openModal }: ProjectsProps) {
  const [currentProject, setCurrentProject] = useState(0);

  const handlePrevProject = () => {
    if(currentProject === 0) return;
    setCurrentProject(prev => prev - 1);
  }

  const handleNextProject = () => {
    if(currentProject === 2) return;
    setCurrentProject(prev => prev + 1);
  }

  return (
    <div className={styles.container}>
      <div 
        onClick={handlePrevProject} 
        className={styles.prevNavigationButton}
        style={{ opacity: currentProject === 0 ? 0.3 : 1 }}
      >
        {'<'}
      </div>
      <div 
        onClick={handleNextProject} 
        className={styles.nextNavigationButton}
        style={{ opacity: currentProject === 2 ? 0.3 : 1 }}
      >
        {'>'}
      </div>

      <div 
        className={styles.projectList} 
        style={{ transform: `translateX(-${currentProject * 33.333}%)` }}
      >
        <Project 
          number="01"
          image="/images/project-1.png"
          title="NewLearn"
          subtitle="국내 뉴스 기반 영어 학습 서비스"
          description={["NewLearn은 국내 뉴스 기반 영어 학습 서비스입니다.", "추천 기능을 바탕으로 사용자의 관심사에 맞는 뉴스를 추천합니다.", "단어 학습, 발음 테스트와 수준별 뉴스를 바탕으로 영어 학습을 도와줍니다."]}
          period="2024.08 ~ 2024.10"
          teamSize={6}
          stack={["react", "typescript", "styledComponents", "recoil"]}
          award="🏆 SSAFY 특화 프로젝트 우수상(1등)"
          githubLink="https://github.com/zozoclub/newlearn" 
          openModal={openModal}
        />
        <Project 
          number="02"
          image="/images/project-2.png"
          title="Campforest"
          subtitle="캠핑 장비 대여 SNS 서비스"
          description={["캠핑 장비 대여 SNS 서비스입니다.", "저렴한 장비 대여, 캠핑장에 대한 신뢰성 있는 정보를 제공합니다.", "그리고 캠퍼 간의 활발한 정보 교류를 통해 경제적인 캠핑 문화를 즐길 수 있습니다."]}
          period="2024.07 ~ 2024.08"
          teamSize={6}
          stack={["react", "typescript", "tailwind", "redux"]}
          award="🏆 SSAFY 공통 프로젝트 우수상(3등)"
          githubLink="https://github.com/camforest/CampForest" 
          openModal={openModal}
        />
        <Project 
          number="03"
          image="/images/project-3.png"
          title="이음"
          subtitle="학교 수업 보조 서비스"
          description={["학교 수업을 보조해주는 서비스입니다.", "실시간 화면 공유, 시험, 숙제 등을 통해 원할한 수업 진행을 도와줍니다.", "또한 PDF 파일에서 자동으로 문제를 추출하여 선생님의 수업 준비를 쉽게 할 수 있도록 도와줍니다."]}
          period="2024.10 ~ 2024.11"
          teamSize={6}
          stack={["react-Native", "typescript", "zustand"]}
          award="🏆 SSAFY 자율 프로젝트 우수상(3등)"
          githubLink="https://github.com/eum-silvertown/eum"
          openModal={openModal}
        />
      </div>
    </div>
  )
}
