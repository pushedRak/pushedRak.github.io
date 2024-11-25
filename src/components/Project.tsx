'use client';

import { useState } from 'react';
import styles from './Project.module.css';
import CampforestDetail from './CampforestDetail';
import NewLearnDetail from './NewLearnDetail';
import EumDetail from './EumDetail';


interface ProjectProps {
  githubLink?: string;
  image: string;
  title: string;
  award: string;
  period: string;
  description: string[];
  techStack: string[];
}


export default function Project({
  githubLink,
  image,
  title,
  award,
  period,
  description,
  techStack,
}: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    const iconMapping: { [key: string]: string } = {
      'react': '/icons/reactJSIcon.webp',
      'typescript': '/icons/typescriptIcon.webp',
      'tailwind': '/icons/tailwindIcon.webp',
      'redux': '/icons/reduxIcon.webp',
      'styled-components': '/icons/styledComponentsIcon.webp',
      'recoil': '/icons/recoilIcon.webp',
      'zustand': '/icons/zustandIcon.webp',
      'react-native': '/icons/reactJSIcon.webp',
    };
    return iconMapping[techLower];
  };

  const renderDetailComponent = () => {
    switch (title) {
      case 'Campforest':
        return <CampforestDetail />;
      case 'NewLearn':
        return <NewLearnDetail />;
      case '이음':
        return <EumDetail />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${styles.project} ${isExpanded ? styles.expanded : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={styles.projectMainContent}>
        <div className={styles.projectImageContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image ? image : "/images/noImage.png"}
            alt={`${title} 프로젝트 이미지`}
            className={styles.projectImage}
          />
        </div>
        <div className={styles.projectDescriptionContainer}>
          <div className={styles.projectHeader}>
            <div className={styles.projectTitleContainer}>
              <p className={styles.projectTitle}>{title}</p>
              {githubLink &&
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/githubIcon.png" alt="github" className={styles.githubIcon} />
                  <p>GitHub</p>
                </a>
              }
            </div>
            <p className={styles.projectAward}>{award}</p>
          </div>
          <div className={styles.projectPeriod}>
            <p>{period}</p>
          </div>
          {description.map((desc, index) => (
            <p key={index} className={styles.projectDescription}>{desc}</p>
          ))}
          <div className={styles.projectTechStack}>
            <div className={styles.techList}>
              {techStack.map((tech, index) => (
                <span key={index} className={styles.tech}>
                  {getTechIcon(tech) && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={getTechIcon(tech)}
                      alt={tech}
                      className={styles.techIcon}
                    />
                  )}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className={styles.projectDetails}>
          {renderDetailComponent()}
        </div>
      )}
    </div>
  );
}