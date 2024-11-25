import styles from './NewLearnDetail.module.css';

export default function NewLearnDetail() {
  return (<div>
    <div>
      <div className={styles.contributionHeader}>
        <h1>기여한 부분</h1>
        <p>Frontend</p>
      </div>
      <ul>
        <li className={styles.contribution}>소셜 로그인</li>
        <p>OAuth를 활용한 소셜 로그인과 HTTPOnly Cookie JWT 인증을 구현하여 사용자의 로그인 정보를 안전하게 보관하였습니다.</p>
        <li className={styles.contribution}>서비스 성능 최적화</li>
        <p>Swiper와 같이 무거울 수 있는 라이브러리를 리렌더링 하지 않도록 useMemo를 활용하여 성능을 최적화하였습니다.</p>
        <p>애니메이션 효과들이 무분별하게 리렌더링되는 것을 방지하기 위해 requestAnimationFrame을 활용하여 성능을 최적화하였습니다.</p>
        <img src="/images/newlearn/메인페이지.gif" className={styles.contributionImage} loading="lazy" />
        <li className={styles.contribution}>반응형 UI 구현</li>
        <p>styled-components와 분리된 테마 파일을 통하여 다크모드와 라이트모드를 구분하였습니다.</p>
        <p>또한 데스크탑, 태블릿, 모바일 화면에 맞게 반응형 UI를 구현하였습니다.</p>
        <img src="/images/newlearn/반응형UI.png" className={styles.contributionImage} loading="lazy" />
        <li className={styles.contribution}>애니메이션 효과</li>
        <p>다크모드, 라이트모드를 토글하는 버튼이 가정용 스위치처럼 보이도록 애니메이션 효과를 구현하였습니다.</p>
        <p>한글, 영어 토글 버튼이 돌아가는 것처럼 애니메이션을 구현하였습니다.</p>
        <p>내비게이션 바의 요소들에 마우스를 올렸을 때 아이콘이 올라오는 것처럼 보이도록 애니메이션 효과를 구현하였습니다.</p>
        <p>랭킹 순위들이 위에서 아래로 서서히 나타나는 것처럼 애니메이션을 구현하였습니다.</p>
        <img src="/images/newlearn/다크모드토글.gif" className={styles.contributionImage} loading="lazy" />
        <li className={styles.contribution}>커스텀 가능한 아바타</li>
        <p>아바타의 섹션을 피부, 눈, 마스크로 나누고 각 섹션을 가로로 긴 이미지로 삽입한 뒤, translateX를 통하여 아바타를 전환할 수 있게 하고,
          이전, 다음 버튼을 눌렀을 때 각 섹션마다 아바타가 바뀔 수 있도록 구현하였습니다.
          또한 모든 아바타는 직접 제작하였으며, 두 프레임으로 작성함으로써 아바타가 움직이는 것처럼 보이도록 하였습니다.
        </p>
        <img src="/images/newlearn/아바타커스텀.gif" className={styles.contributionImage} loading="lazy" />
        <li className={styles.contribution}>단어 하이라이팅</li>
        <p>뉴스 상세 페이지에서 단어를 드래그하였을 때, 드래그된 단어의 뜻을 다음 사전 API를 통해 받아와 Modal 형식으로 출력하였습니다.</p>
        <p>뜻과 더불어 미국, 영어 발음 음성 파일도 실행될 수 있도록 하였습니다.</p>
        <p>이미 하이라이팅된 단어들은 형광펜이 쳐진 듯한 효과를 주어 하이라이팅이 되었음을 알려주었습니다.</p>
        <p>사용자가 형광펜으로 하이라이팅을 하고 있는 느낌을 주기 위해 단어 위에서의 마우스 커서 모양을 형광펜 모양으로 수정하였습니다.</p>
        <img src="/images/newlearn/단어하이라이팅.gif" className={styles.contributionImage} loading="lazy" />
      </ul>
    </div>
  </div>
  );
}