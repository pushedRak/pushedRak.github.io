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
      private_key: process.env.GOOGLE_PRIVATE_KEY?.substring(0, 10) + '...',
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
      dimensions: [
        { name: 'date' },
        { name: 'pageTitle' },
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

    const analyticsData = response.rows.map(row => ({
      date: row.dimensionValues?.[0]?.value,
      pageTitle: row.dimensionValues?.[1]?.value,
      users: row.metricValues?.[0]?.value || '0',
      pageViews: row.metricValues?.[1]?.value || '0',
      sessions: row.metricValues?.[2]?.value || '0',
    }));

    const filePath = path.join(process.cwd(), 'public', 'analytics-data.json');
    await fs.writeFile(filePath, JSON.stringify(analyticsData, null, 2));
    console.log('Analytics data updated successfully');
  } catch (error) {
    console.error('Error updating analytics data:', error);
    process.exit(1);
  }
}

fetchAnalyticsData();
