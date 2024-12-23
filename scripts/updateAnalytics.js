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
    console.log('GA4 Property ID check:', {
      id: process.env.GA4_PROPERTY_ID,
      isNumeric: /^\d+$/.test(process.env.GA4_PROPERTY_ID)
    });

    // 첫 번째 시도: 기본 이벤트 카운트
    console.log('\nAttempt 1: Basic event count...');
    const [response1] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '90daysAgo',
          endDate: 'today'
        },
      ],
      metrics: [
        { name: 'eventCount' }
      ]
    });
    
    console.log('Response 1:', JSON.stringify(response1, null, 2));

    // 두 번째 시도: 다른 기본 메트릭들
    console.log('\nAttempt 2: Other basic metrics...');
    const [response2] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '90daysAgo',
          endDate: 'today'
        },
      ],
      metrics: [
        { name: 'totalUsers' },
        { name: 'screenPageViews' }
      ]
    });
    
    console.log('Response 2:', JSON.stringify(response2, null, 2));

    // 세 번째 시도: 이벤트 이름 확인
    console.log('\nAttempt 3: Checking available events...');
    const [response3] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '90daysAgo',
          endDate: 'today'
        },
      ],
      dimensions: [
        { name: 'eventName' }
      ],
      metrics: [
        { name: 'eventCount' }
      ]
    });
    
    console.log('Response 3:', JSON.stringify(response3, null, 2));

    // 데이터가 없는 경우에도 일단 빈 데이터로 파일 생성
    const analyticsData = {
      timestamp: new Date().toISOString(),
      hasData: false,
      message: "No data available",
      propertyId: process.env.GA4_PROPERTY_ID
    };

    const filePath = path.join(process.cwd(), 'public', 'analytics-data.json');
    await fs.writeFile(filePath, JSON.stringify(analyticsData, null, 2));
    console.log('Analytics data file created (empty data)');
    
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      details: error.details,
      stack: error.stack
    });
    process.exit(1);
  }
}

fetchAnalyticsData();