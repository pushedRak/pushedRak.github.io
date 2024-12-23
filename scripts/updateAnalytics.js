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

    const [response] = await analyticsDataClient.runReport({
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
    
    console.log('Response :', JSON.stringify(response, null, 2));

    // 데이터 있는지 확인
    const hasData = response?.rows?.length > 0;

    const analyticsData = {
      timestamp: new Date().toISOString(),
      message: hasData ? "Data available" : "No data available",
      data: hasData ? response.rows : null
    };

    const filePath = path.join(process.cwd(), 'public', 'analytics-data.json');
    await fs.writeFile(filePath, JSON.stringify(analyticsData, null, 2));
    console.log('Analytics data file created');
    
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