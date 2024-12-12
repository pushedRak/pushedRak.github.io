/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 96px;
  padding: 7.5rem 10rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  overflow-x: visible;
`;

const Skill = styled.div`
  position: relative;
  min-width: 176px;
  height: 176px;
  border: 1px solid #999;
  border-radius: 8px;
  aspect-ratio: 1;
  transition: all 0.5s ease;
  overflow: hidden;

  &:hover {
    min-width: 400px;
    
    img {
      left: 78px;
    }

    div {
      opacity: 1;
    }
  }
`;

const SkillIcon = styled.img`
  position: absolute;
  top: 88px;
  left: 88px;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  object-fit: contain;
  transition: all 0.5s ease;
`;

const SkillDetail = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 135px;
  width: 240px;
  height: 144px;
  padding: 16px;
  opacity: 0;
  transition: all 0.5s ease;

  h4 {
    font-size: 18px;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #333;
  }
`;

const SkillPeriodContainer = styled.p`
  margin-top: auto;
`;

const SkillPeriodTitle = styled.span`
  color: #666;
  margin-right: 4px;
`;

const SkillPeriod = styled.span`
  color: #666;
  font-size: 14px;
`;

export default function Skills() {
  return (
    <Container>
      <div>
        <Title>기술 스택</Title>
        <SkillTitle>사용에 능숙해요</SkillTitle>
        <SkillList>
          <Skill>
            <SkillIcon src="/icons/reactIcon.png" alt="react" />
            <SkillDetail>
              <h4>React</h4>
              <p>컴포넌트 설계와 상태관리에 능숙합니다.</p>
              <p>React를 활용한 2개의 프로젝트(캠핑 장비 대여 SNS, 국내 뉴스 기반 영어 학습 플랫폼)에서 우수상을 수상한 이력이 있습니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>6개월</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
          <Skill>
            <SkillIcon src="/icons/javascriptIcon.png" alt="javascript" />
            <SkillDetail>
              <h4>JavaScript</h4>
              <p>ES6 문법과 비동기 처리에 능숙합니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>6개월</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
          <Skill>
            <SkillIcon src="/icons/typescriptIcon.png" alt="typescript" />
            <SkillDetail>
              <h4>TypeScript</h4>
              <p>타입 안전성과 객체지향 프로그래밍에 능숙합니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>6개월</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
          <Skill>
            <SkillIcon src="/icons/cssIcon.png" alt="css" />
            <SkillDetail>
              <h4>CSS</h4>
              <p>CSS 애니메이션과 반응형 디자인에 능숙합니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>9개월</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
          <Skill>
            <SkillIcon src="/icons/cppIcon.png" alt="cpp" />
            <SkillDetail>
              <h4>C++</h4>
              <p>제어 및 자동화 시스템 연구실에서 C++을 활용하여 POSCO 열연 공정 불량 검출 프로젝트를 진행했습니다.</p>
              <p>포인터와 레퍼런스를 활용한 메모리 관리에 능숙합니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>2년</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
          <Skill>
            <SkillIcon src="/icons/javaIcon.png" alt="java" />
            <SkillDetail>
              <h4>Java</h4>
              <p>Java 언어로 알고리즘 문제를 풀이하는 것에 능숙합니다.</p>
              <p>Java에 입문한지 2개월 만에 백준 사이트 기준 플래티넘 등급을 달성하였습니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>6개월</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
        </SkillList>
      </div>
      <div>
        <SkillTitle>사용해본 적이 있어요</SkillTitle>
        <SkillList>
          <Skill>
            <SkillIcon src="/icons/htmlIcon.png" alt="html" />
            <SkillDetail>
              <h4>HTML</h4>
              <p>삼성 청년 소프트웨어 아카데미에서 웹 개발 교육을 이수하며 HTML을 배웠습니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>1년</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
          <Skill>
            <SkillIcon src="/icons/pythonIcon.png" alt="python" />
            <SkillDetail>
              <h4>Python</h4>
              <p>금오공과대학교 졸업 프로젝트에서 Python과 OpenCV를 사용하여 스마트폰 디스플레이 결함 검출 시스템을 개발했습니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>1년 6개월</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
          <Skill>
            <SkillIcon src="/icons/recoilIcon.png" alt="recoil" />
            <SkillDetail>
              <h4>Recoil</h4>
              <p>국내 뉴스 기반 영어 학습 플랫폼에서 AccessToken, UserInfo 등의 상태관리를 위해 Recoil을 사용했습니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>2개월</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
          <Skill>
            <SkillIcon src="/icons/reduxIcon.png" alt="redux" />
            <SkillDetail>
              <h4>Redux</h4>
              <p>캠핑 장비 대여 SNS 서비스 프로젝트에서 1:1 채팅방, UserInfo 등의 상태관리를 위해 Redux를 사용했습니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>2개월</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
          <Skill>
            <SkillIcon src="/icons/zustandIcon.png" alt="zustand" />
            <SkillDetail>
              <h4>Zustand</h4>
              <p>중, 고등학교 학습 보조 서비스 프로젝트에서 문제 보관함(Windows의 파일 탐색기와 유사한 구조) 상태관리를 위해 Zustand를 사용했습니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>2개월</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
          <Skill>
            <SkillIcon src="/icons/nextJSIcon.png" alt="nextjs" />
            <SkillDetail>
              <h4>Next.js</h4>
              <p>Github 개인 블로그를 만들기 위해 Next.js를 사용했습니다. 현재 페이지도 Next.js로 만들어졌습니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>1개월</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
          <Skill>
            <SkillIcon src="/icons/reactIcon.png" alt="react-native" />
            <SkillDetail>
              <h4>React Native</h4>
              <p>React Native를 사용하여 중, 고등학교 학습 보조 서비스 프로젝트를 진행하였습니다.</p>
              <SkillPeriodContainer>
                <SkillPeriodTitle>경력</SkillPeriodTitle>
                <SkillPeriod>2개월</SkillPeriod>
              </SkillPeriodContainer>
            </SkillDetail>
          </Skill>
        </SkillList>
      </div>
    </Container>
  );
}