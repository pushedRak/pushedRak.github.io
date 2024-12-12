import { Contribution, ContributionHeader } from '../../styles/project/projectDetailStyle';

export default function CampforestDetail() {
  return (<div>
    <div>
      <ContributionHeader>
        <h1>기여한 부분</h1>
        <p>Frontend</p>
      </ContributionHeader>
      <ul>
        <Contribution>커서 기반의 무한 스크롤 피드</Contribution>
        <p>많은 피드들을 한 번에 불러오게 되면 사이트의 성능을 저하할 수 있는 우려가 있어 페이지네이션을 구현하게 되었습니다.</p>
        <p>하지만 기존의 페이지 방식의 페이지네이션은 중복된 글을 불러올 수 있다는 문제가 있었습니다.</p>
        <p>따라서 마지막으로 불러온 글의 Id를 기반으로 다음 글을 불러오는
          커서 기반의 무한 스크롤 피드를 구현하여 사용자가 중복된 글을 읽을 수 있는 문제를 해결했습니다.</p>
        <Contribution>실시간 채팅</Contribution>
        <p>WebSocket을 사용하여 사용자 간의 실시간 채팅과 읽음 처리 기능을 구현했습니다.</p>
        <p>Redux를 활용하여 새로운 채팅 개수에 대한 숫자를 내비게이션 바에 표시하였습니다.</p>
        <p>구독 당시의 변수값을 참조하는 클로저의 특성 상 변수값의 변동을 인식하지 못하는 문제가 있었습니다.
          해당 문제를 해결하기 위해 useRef()를 사용하여 참조값을 넘겨줌으로써 값의 변동을 구독 함수가 알 수 있도록 했습니다.
        </p>
        <p>또한 새로운 채팅방이 개설되면 구독이 되어있지 않기 때문에 실시간으로 알 수 없기 때문에 SSE를 활용하여 서버측에서 메세지를 전송함으로써
          새로운 채팅방에 대한 구독 처리를 할 수 있었습니다.
        </p>
        <Contribution>실시간 알림</Contribution>
        <p>게시글의 좋아요, 댓글이 달렸을 때, 다른 사용자가 나를 팔로우 하거나 새로운 채팅방 개설 등에 대한
          알림을 실시간으로 보내는 기능을 구현하였습니다.</p>
        <p>SSE 기술을 활용하여 도착한 메세지의 type을 case로 나누어 각각의 알림에 대한 기능을 구현하였습니다.</p>
        <p>이때 Redux를 활용한 상태 관리로 새로운 알림과 지난 알림에 대한 것을 나누고 알림 페이지에서 이를 확인할 수 있게 하였습니다.</p>
      </ul>
    </div>
  </div>
  );
}