/* eslint-disable @next/next/no-img-element */
import styles from './Project.module.css';

interface ProjectProps {
  number: string;
  image: string;
  title: string;
  subtitle: string;
  description: string[];
  period: string;
  teamSize: number;
  stack: string[];
  award?: string;
  githubLink?: string;
  openModal: (projectId: string) => void;
}

export default function Project({
   number, 
   image, 
   title, 
   subtitle, 
   description, 
   period, 
   teamSize, 
   stack, 
   award, 
   githubLink,
   openModal,
}: ProjectProps) {
  return (
    <section className={styles.projectSection}>
      <p className={styles.projectNumber}>{number}</p>
      <img
        src={image}
        alt="projectImage"
        className={styles.projectImage}
      />
      <div className={styles.projectContent}>
        <h1 className={styles.projectTitle}>
          {title}
          <div className={styles.projectLink}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/githubIcon.png"
                alt="github"
                className={styles.projectLinkIcon}
              />
            </a>
          </div>
        </h1>
        <h2 className={styles.projectSubtitle}>
          {subtitle}
        </h2>
        <div className={styles.projectDescription}>
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
        <div className={styles.projectMore} onClick={() => openModal(number)}>
            더 보기
        </div>
        <div className={styles.projectFooter}>
          <div className={styles.projectAward}>
            {award}
          </div>
          <div className={styles.projectInfo}>
            <div>{period}</div>
            <p>|</p>
            <div>{teamSize}인</div>
            <p>|</p>
            <div>FrontEnd</div>
          </div>
          <div className={styles.projectStack}>
            {stack.map((icon, index) => (
              <div className={styles.iconWrapper} key={index}>
                <img
                  src={`/icons/${icon}Icon.png`}
                  alt={icon}
                  className={styles.projectStackIcon}
                />
                <div className={styles.iconLabel}>{icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}