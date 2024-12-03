/* eslint-disable @next/next/no-img-element */
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.skills}>
      <div>
        <h1 className={styles.title}>기술 스택</h1>
        <h3 className={styles.skillTitle}>사용에 능숙해요</h3>
        <div className={styles.skillList}>
              <div className={styles.skill}>
                <img src="/icons/reactIcon.png" alt="react" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>React</h4>
                  <p>컴포넌트 설계와 상태관리에 능숙합니다.</p>
                  <p>React를 활용한 2개의 프로젝트(캠핑 장비 대여 SNS, 국내 뉴스 기반 영어 학습 플랫폼)에서 우수상을 수상한 이력이 있습니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>6개월</span>
                  </p>
                </div>
              </div>
              <div className={styles.skill}>
                <img src="/icons/javascriptIcon.png" alt="javascript" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>JavaScript</h4>
                  <p>ES6 문법과 비동기 처리에 능숙합니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>6개월</span>
                  </p>
                </div>
              </div>
              <div className={styles.skill}>
                <img src="/icons/typescriptIcon.png" alt="typescript" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>TypeScript</h4>
                  <p>타입 안전성과 객체지향 프로그래밍에 능숙합니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>6개월</span>
                  </p>
                </div>
              </div>
              <div className={styles.skill}>
                <img src="/icons/cssIcon.png" alt="css" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>CSS</h4>
                  <p>CSS 애니메이션과 반응형 디자인에 능숙합니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>9개월</span>
                  </p>
                </div>
              </div>
              <div className={styles.skill}>
                <img src="/icons/cppIcon.png" alt="cpp" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>C++</h4>
                  <p>제어 및 자동화 시스템 연구실에서 C++을 활용하여 POSCO 열연 공정 불량 검출 프로젝트를 진행했습니다.</p>
                  <p>포인터와 레퍼런스를 활용한 메모리 관리에 능숙합니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>2년</span>
                  </p>
                </div>
              </div>
              <div className={styles.skill}>
                <img src="/icons/javaIcon.png" alt="java" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>Java</h4>
                  <p>Java 언어로 알고리즘 문제를 풀이하는 것에 능숙합니다.</p>
                  <p>Java에 입문한지 2개월 만에 백준 사이트 기준 플래티넘 등급을 달성하였습니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>6개월</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className={styles.skillTitle}>사용해본 적이 있어요</h3>
            <div className={styles.skillList}>
              <div className={styles.skill}>
                <img src="/icons/htmlIcon.png" alt="html" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>HTML</h4>
                  <p>삼성 청년 소프트웨어 아카데미에서 웹 개발 교육을 이수하며 HTML을 배웠습니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>1년</span>
                  </p>
                </div>
              </div>
              <div className={styles.skill}>
                <img src="/icons/pythonIcon.png" alt="python" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>Python</h4>
                  <p>금오공과대학교 졸업 프로젝트에서 Python과 OpenCV를 사용하여 스마트폰 디스플레이 결함 검출 시스템을 개발했습니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>1년 6개월</span>
                  </p>
                </div>
              </div>
              <div className={styles.skill}>
                <img src="/icons/recoilIcon.png" alt="recoil" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>Recoil</h4>
                  <p>국내 뉴스 기반 영어 학습 플랫폼에서 AccessToken, UserInfo 등의 상태관리를 위해 Recoil을 사용했습니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>2개월</span>
                  </p>
                </div>
              </div>
              <div className={styles.skill}>
                <img src="/icons/reduxIcon.png" alt="redux" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>Redux</h4>
                  <p>캠핑 장비 대여 SNS 서비스 프로젝트에서 1:1 채팅방, UserInfo 등의 상태관리를 위해 Redux를 사용했습니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>2개월</span>
                  </p>
                </div>
              </div>
              <div className={styles.skill}>
                <img src="/icons/zustandIcon.png" alt="zustand" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>Zustand</h4>
                  <p>중, 고등학교 학습 보조 서비스 프로젝트에서 문제 보관함(Windows의 파일 탐색기와 유사한 구조) 상태관리를 위해 Zustand를 사용했습니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>2개월</span>
                  </p>
                </div>
              </div>
              <div className={styles.skill}>
                <img src="/icons/nextJSIcon.png" alt="nextjs" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>Next.js</h4>
                  <p>Github 개인 블로그를 만들기 위해 Next.js를 사용했습니다. 현재 페이지도 Next.js로 만들어졌습니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>1개월</span>
                  </p>
                </div>
              </div>
              <div className={styles.skill}>
                <img src="/icons/reactIcon.png" alt="react-native" className={styles.skillIcon} />
                <div className={styles.skillDetail}>
                  <h4>React Native</h4>
                  <p>React Native를 사용하여 중, 고등학교 학습 보조 서비스 프로젝트를 진행하였습니다.</p>
                  <p className={styles.skillPeriodContainer}>
                    <span className={styles.skillPeriodTitle}>경력</span>
                    <span className={styles.skillPeriod}>2개월</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}