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

interface Stats {
  totalUsers: string;
  screenPageViews: string;
  todayUsers: string;
}

export default function AnalyticsCounter() {
  const [stats, setStats] = useState<Stats>({
    totalUsers: '0',
    screenPageViews: '0',
    todayUsers: '0',
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/analytics-data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch analytics data');
        }
        const data = await response.json();
        if (data.message === 'Data available' && data.data) {
          setStats(data.data);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    }

    fetchStats();
  }, []);

  return (
    <StatsContainer>
      <StatItem>
        <h3>Total</h3>
        <p>{stats.totalUsers}</p>
      </StatItem>
      <StatItem>
        <h3>Today</h3>
        <p>{stats.todayUsers}</p>
      </StatItem>
      <StatItem>
        <h3>Page View</h3>
        <p>{stats.screenPageViews}</p>
      </StatItem>
    </StatsContainer>
  );
}
