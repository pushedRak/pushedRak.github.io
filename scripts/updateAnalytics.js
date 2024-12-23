import { BetaAnalyticsDataClient } from '@google-analytics/data';
import pkg from '@google-analytics/admin';
const { GoogleAnalyticsAdmin } = pkg;

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});

const analyticsAdmin = new GoogleAnalyticsAdmin({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});

async function checkAccess() {
  try {
    console.log('GA4 Property ID format check:', process.env.GA4_PROPERTY_ID.match(/^\d+$/));
    const [accounts] = await analyticsAdmin.listAccountSummaries();
    console.log('Available accounts:', JSON.stringify(accounts, null, 2));
  } catch (error) {
    console.error('Access check error:', error.message);
  }
}

async function fetchAnalyticsData() {
  try {
    await checkAccess();
    
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
          startDate: '90daysAgo',
          endDate: 'today'
        },
      ],
      dimensions: [
        { name: 'date' }
      ],
      metrics: [
        { name: 'activeUsers' }
      ]
    });
    
    console.log('GA4 API Response:', JSON.stringify(response, null, 2));

    if (!response.rows || response.rows.length === 0) {
      console.error('No rows found in the response.');
      process.exit(1);
    }

    const analyticsData = response.rows.map(row => ({
      date: row.dimensionValues?.[0]?.value,
      users: row.metricValues?.[0]?.value || '0',
    }));

    const filePath = path.join(process.cwd(), 'public', 'analytics-data.json');
    await fs.writeFile(filePath, JSON.stringify(analyticsData, null, 2));
    console.log('Analytics data updated successfully');
  } catch (error) {
    console.error('Error updating analytics data:', error);
    if (error.message) console.error('Error message:', error.message);
    if (error.stack) console.error('Error stack:', error.stack);
    process.exit(1);
  }
}

fetchAnalyticsData();