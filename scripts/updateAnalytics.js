import { BetaAnalyticsDataClient } from '@google-analytics/data';
import fs from 'fs/promises';
import path from 'path';

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});

async function fetchAnalyticsData() {
  try {
    // GA4 Property ID 형식 확인
    console.log('GA4 Property ID check:', {
      id: process.env.GA4_PROPERTY_ID,
      isNumeric: /^\d+$/.test(process.env.GA4_PROPERTY_ID)
    });

    console.log('Fetching analytics data...');
    
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '90daysAgo',
          endDate: 'today'
        },
      ],
      metrics: [
        { name: 'sessions' }
      ]
    });
    
    console.log('GA4 API Response:', JSON.stringify(response, null, 2));

    if (!response.rows || response.rows.length === 0) {
      console.error('No rows found in the response.');
      
      // 오류 상황에서 자세한 정보 출력
      console.log('Response structure:', {
        hasRows: !!response.rows,
        rowCount: response.rows?.length || 0,
        metadata: response.metadata,
        propertyQuota: response.propertyQuota
      });
      
      process.exit(1);
    }

    const analyticsData = response.rows.map(row => ({
      sessions: row.metricValues?.[0]?.value || '0'
    }));

    const filePath = path.join(process.cwd(), 'public', 'analytics-data.json');
    await fs.writeFile(filePath, JSON.stringify(analyticsData, null, 2));
    console.log('Analytics data updated successfully');
  } catch (error) {
    console.error('Error fetching analytics data:', {
      message: error.message,
      code: error.code,
      details: error.details,
      metadata: error.metadata
    });
    process.exit(1);
  }
}

fetchAnalyticsData();