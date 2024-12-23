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
      isNumeric: /^\d+$/.test(process.env.GA4_PROPERTY_ID),
    });

    // 2024-12-01 기준 총 방문자 수와 총 페이지 뷰
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '2024-12-01',
          endDate: 'today',
        },
      ],
      metrics: [
        { name: 'totalUsers' },
        { name: 'screenPageViews' },
      ],
    });

    const [todayResponse] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: 'today',
          endDate: 'today',
        },
      ],
      metrics: [{ name: 'totalUsers' }],
    });

    console.log('Total Response:', JSON.stringify(response, null, 2));
    console.log('Today Response:', JSON.stringify(todayResponse, null, 2));

    const hasData = response?.rows?.length > 0;

    const analyticsData = {
      timestamp: new Date().toISOString(),
      message: hasData ? 'Data available' : 'No data available',
      data: hasData
        ? {
            totalUsers: response.rows[0]?.metricValues[0]?.value || '0',
            screenPageViews: response.rows[0]?.metricValues[1]?.value || '0',
            todayUsers: todayResponse.rows[0]?.metricValues[0]?.value || '0',
          }
        : null,
    };

    const filePath = path.join(process.cwd(), 'public', 'analytics-data.json');
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(analyticsData, null, 2));
    console.log('Analytics data file created successfully:', filePath);
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      details: error.details,
      stack: error.stack,
    });
    process.exit(1);
  }
}

fetchAnalyticsData();
