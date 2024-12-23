import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  padding: 1rem;
  border-radius: 8px;
  margin: auto 0 1rem;
`;

const StatItem = styled.div`
  text-align: center;
  
  h3 {
    margin: 0;
    color: #495057;
    font-size: 0.9rem;
  }
  
  p {
    margin: 0.5rem 0 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #212529;
  }
`;

export default function AnalyticsCounter() {
  const [stats, setStats] = useState({ pageviews: '0', users: '0', sessions: '0' });

  useEffect(() => {
    async function fetchStats() {
      try {
        // 이 부분이 변경되었습니다
        const response = await fetch('/api/analytics');
        if (!response.ok) {
          throw new Error('Failed to fetch analytics data');
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    }

    fetchStats();
  }, []);

  return (
    <StatsContainer>
      <StatItem>
        <h3>총 방문자</h3>
        <p>{stats.users}</p>
      </StatItem>
      <StatItem>
        <h3>총 세션</h3>
        <p>{stats.sessions}</p>
      </StatItem>
      <StatItem>
        <h3>총 페이지뷰</h3>
        <p>{stats.pageviews}</p>
      </StatItem>
    </StatsContainer>
  );
}