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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  
  h3 {
    margin: 0;
    color: #495057;
    font-size: 0.9rem;
  }
  
  p {
    margin: 0;
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

  const CLOUDFRONT_URL = "https://dpq55bd562rz5.cloudfront.net";

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch(`${CLOUDFRONT_URL}/analytics/latest.json`, {
            headers: {
                'Origin': 'https://pushedrak.github.io'
            },
            credentials: 'include'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
        setStats({
          totalUsers: '0',
          screenPageViews: '0',
          todayUsers: '0',
        });
    } catch (error) {
        console.error('Analytics fetch error:', error);
    }
    }
  
    fetchStats();
  }, []);

  return (
    <StatsContainer>
      <StatItem>
        <h3>Total</h3>
        <p>{stats.totalUsers || 0}</p>
      </StatItem>
      <StatItem>
        <h3>Today</h3>
        <p>{stats.todayUsers || 0}</p>
      </StatItem>
      <StatItem>
        <h3>Page View</h3>
        <p>{stats.screenPageViews || 0}</p>
      </StatItem>
    </StatsContainer>
  );
}
