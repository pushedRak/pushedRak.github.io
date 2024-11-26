'use client';

import { useState } from 'react';
import styles from './Project.module.css';
import CampforestDetail from '../CampforestDetail';
import NewLearnDetail from '../NewLearnDetail';
import EumDetail from '../EumDetail';


interface ProjectProps {
  githubLink?: string;
  image: string;
  title: string;
  award: string;
  period: string;
  teamSize: number;
  description: string;
  techStack: string[];
}


export default function Project({
  image,
  title,
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
          <p className={styles.projectTitle}>{title}</p>
          <p className={styles.projectDescription}>{description}</p>

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