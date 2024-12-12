import { Contribution, ContributionHeader } from '../../styles/project/projectDetailStyle';

export default function EumDetail() {
  return (<div>
    <div>
      <ContributionHeader>
        <h1>기여한 부분</h1>
        <p>Frontend</p>
      </ContributionHeader>
      <ul>
        <Contribution>스크롤 기반의 배경 애니메이션</Contribution>
        <p>시간표의 스크롤을 인식하여, 현재 시간에 맞는 배경색과 해, 달의 위치를 보여주도록 인터랙티브한 애니메이션을 구현했습니다.</p>
        <p>구현하는 과정에서 구름과 별 애니메이션이 제대로 종료되지 않아 메모리 누수가 발생하는 문제가 있었고
          useMemo와 페이지를 빠져나갈 때 animation을 멈추는 방법을 사용하여 메모리 누수를 막을 수 있었습니다.
        </p>
        <Contribution>디렉토리 구조의 문제 보관함</Contribution>
        <p>zustand의 상태 관리 기능을 활용하여 파일 탐색기와 같은 디렉토리 구조의 문제 보관함을 구현하였습니다.</p>
        <p>구현 내용에 뒤로 가기, 앞으로 가기와 같은 히스토리 기능도 있었는데, 폴더나 파일이 추가, 이동, 삭제될 때 히스토리가 제대로 바뀌지 않는다는 문제가 있었고</p>
        <p>트리 구조를 update 시키는 함수를 추가함으로써 히스토리 업데이트가 되지 않던 문제를 해결하였습니다.</p>
        <Contribution>인터랙티브 UI</Contribution>
        <p>수업 목록의 수업을 책 형태로 표시하였고, 목록의 수업을 클릭하였을 때 책이 열리는 듯한 애니메이션 효과를 구현하였습니다.</p>
        <p>react native의 transform rotate의 기능이 축을 기준으로 제대로 회전하지 않는 문제가 있어, perspective 속성에 높은 값을 줌으로써 축에 최대한 가깝게 회전할 수 있도록 하여
          책이 제대로 열리도록 할 수 있었습니다.
        </p>
        <p>내비게이션 바를 숨기고 확장할 수 있는데 이때 토글 버튼이 회전하거나, 내비게이션 바가 서서히 확장됨과 동시에 content 요소의 상자를 작게 함으로써
          인터렉티브한 효과를 구현하였습니다.
        </p>
      </ul>
    </div>
  </div>
  );
}