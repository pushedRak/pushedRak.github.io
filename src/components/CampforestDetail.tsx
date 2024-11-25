import styles from './CampforestDetail.module.css';

export default function CampforestDetail() {
  return (<div>
    <div>
      <h1>기여한 부분</h1>
      <ul>
        <li className={styles.contribution}>커서 기반의 무한 스크롤 피드</li>
        <p>커서 기반의 무한 스크롤 피드를 구현하여 사용자가 캠핑장을 더 쉽게 찾을 수 있도록 도와주었습니다.</p>
        <li className={styles.contribution}>실시간 채팅</li>
        <p>WebSocket을 사용하여 사용자 간의 실시간 채팅과 읽음 처리 기능을 구현했습니다.</p>
        <li className={styles.contribution}>실시간 알림</li>
        <p>구독이 되지 않는 새로운 채팅방에 대한 구독과 게시글의 좋아요, 댓글이 달렸을 때 알림을 실시간으로 보내는 기능을 구현하였습니다.</p>
      </ul>
    </div>
  </div>
  );
}