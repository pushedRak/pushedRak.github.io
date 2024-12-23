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
    console.log('Fetching analytics data...');
    console.log('Environment Variables:', {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.substring(0, 10) + '...', // 민감 정보 일부만 출력
      property_id: process.env.GA4_PROPERTY_ID,
    });

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '30daysAgo',
          endDate: 'today',
        },
      ],
      metrics: [
        { name: 'activeUsers' },
        { name: 'screenPageViews' },
        { name: 'sessions' },
      ],
    });

    console.log('GA4 API Response:', JSON.stringify(response, null, 2));

    if (!response.rows || response.rows.length === 0) {
      console.error('No rows found in the response.');
      process.exit(1);
    }

    const firstRow = response.rows[0];
    if (!firstRow.metricValues || firstRow.metricValues.length < 3) {
      console.error('Metric values are missing or incomplete in the first row:', firstRow);
      process.exit(1);
    }

    const users = firstRow.metricValues[0]?.value || '0';
    const pageViews = firstRow.metricValues[1]?.value || '0';
    const sessions = firstRow.metricValues[2]?.value || '0';

    const analyticsData = {
      users,
      pageViews,
      sessions,
      lastUpdated: new Date().toISOString(),
    };

    const filePath = path.join(process.cwd(), 'public', 'analytics-data.json');
    await fs.writeFile(filePath, JSON.stringify(analyticsData, null, 2));
    console.log('Analytics data updated successfully');
  } catch (error) {
    console.error('Error updating analytics data:', error);
    process.exit(1);
  }
}

fetchAnalyticsData();
