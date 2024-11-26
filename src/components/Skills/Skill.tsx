import { SKILL_INFO } from '@/constants/skillInfo';
import styles from './Skill.module.css';

interface SkillProps {
  name: string;
  icon: string;
}

export default function Skill({ name, icon }: SkillProps) {
  return (
    <div className={styles.skillWrapper}>
      <div className={styles.skill}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt={name} className={styles.skillIcon} />
        {name}
      </div>
      <div className={styles.tooltip}>
        <p className={styles.tooltipTitle}>{name}</p>
        {SKILL_INFO[name as keyof typeof SKILL_INFO]?.description.map((description, index) => (
          <p key={index} className={styles.tooltipDesc}>{description}</p>
        ))}
        <div className={styles.tooltipInfo}>
          <span>숙련도: {SKILL_INFO[name as keyof typeof SKILL_INFO]?.proficiency}</span>
          <span>경력: {SKILL_INFO[name as keyof typeof SKILL_INFO]?.experience}</span>
        </div>
      </div>
    </div>
  );
}