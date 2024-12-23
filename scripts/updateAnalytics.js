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
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '30daysAgo',
          endDate: 'today',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
        {
          name: 'screenPageViews',
        },
        {
          name: 'sessions',
        },
      ],
    });

    const analyticsData = {
      users: response.rows?.[0].metricValues[0].value || '0',
      pageViews: response.rows?.[0].metricValues[1].value || '0',
      sessions: response.rows?.[0].metricValues[2].value || '0',
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