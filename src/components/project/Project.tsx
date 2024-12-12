import styled from 'styled-components';

const ProjectSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  position: relative;
  flex-shrink: 0;
  width: calc(100vw - 30rem);
  height: calc(100vh - 18rem);
  padding: 9rem 15rem;
`;

const ProjectNumber = styled.p`
  position: absolute;
  z-index: 10;
  top: 5rem;
  left: 7.5rem;
  font-size: 10rem;
  font-weight: 900;
`;

const ProjectImage = styled.img`
  width: 55%;
  height: 100%;
  object-fit: contain;
  background-color: #fff;
  border-radius: 1rem;
`;

const ProjectContent = styled.div`
  width: calc(45% - 3rem);
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 1.5rem;
  font-size: 5rem;
  font-weight: 900;
  margin: 0;
  padding: 0;
`;

const ProjectLink = styled.div`
  width: 2rem;
  height: 2rem;
`;

const ProjectLinkIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
`;

const ProjectAward = styled.div`
  line-height: 1.25rem;
  font-size: 1.25rem;
  color: #333;
`;

const ProjectSubtitle = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.25rem 0 3rem 0;
  padding: 0;
  color: #333;
`;

const ProjectDescription = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
`;

const ProjectFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
  margin-bottom: 1rem;
`;

const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 300;
  color: #666;
`;

const ProjectStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const ProjectStackIcon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  background-color: #fff;
  border-radius: 0.5rem;
`;

const ProjectMore = styled.div`
  width: 3rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    .icon-label {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const IconLabel = styled.div`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
`;

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
    <ProjectSection>
      <ProjectNumber>{number}</ProjectNumber>
      <ProjectImage src={image} alt="projectImage" />
      <ProjectContent>
        <ProjectTitle>
          {title}
          <ProjectLink>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <ProjectLinkIcon src="/icons/githubIcon.png" alt="github" />
            </a>
          </ProjectLink>
        </ProjectTitle>
        <ProjectSubtitle>{subtitle}</ProjectSubtitle>
        <ProjectDescription>
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </ProjectDescription>
        <ProjectMore onClick={() => openModal(number)}>더 보기</ProjectMore>
        <ProjectFooter>
          <ProjectAward>{award}</ProjectAward>
          <ProjectInfo>
            <div>{period}</div>
            <p>|</p>
            <div>{teamSize}인</div>
            <p>|</p>
            <div>FrontEnd</div>
          </ProjectInfo>
          <ProjectStack>
            {stack.map((icon, index) => (
              <IconWrapper key={index}>
                <ProjectStackIcon src={`/icons/${icon}Icon.png`} alt={icon} />
                <IconLabel className="icon-label">{icon}</IconLabel>
              </IconWrapper>
            ))}
          </ProjectStack>
        </ProjectFooter>
      </ProjectContent>
    </ProjectSection>
  );
}