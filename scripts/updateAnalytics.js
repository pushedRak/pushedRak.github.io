import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { GoogleAnalyticsAdmin } from '@google-analytics/admin';
import fs from 'fs/promises';
import path from 'path';

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});

const analyticsAdmin = new GoogleAnalyticsAdmin();

async function checkAccess() {
  try {
    const [accounts] = await analyticsAdmin.listAccountSummaries();
    console.log('Available accounts:', accounts);
  } catch (error) {
    console.error('Access check error:', error.message);
  }
}

async function fetchAnalyticsData() {
  try {
    const property = await analyticsDataClient.getProperty({
      name: `properties/${process.env.GA4_PROPERTY_ID}`
    });
    console.log('Property details:', JSON.stringify(property, null, 2));
  } catch (error) {
    console.error('Error getting property:', error.message);
  }
  
  try {
    console.log('Fetching analytics data...');
    console.log('Environment Variables:', {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.substring(0, 10) + '...',
      property_id: process.env.GA4_PROPERTY_ID,
    });

    // GA4 Property ID는 보통 숫자로만 이루어진 형태입니다 (예: 123456789)
    console.log('GA4 Property ID format check:', process.env.GA4_PROPERTY_ID.match(/^\d+$/));

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '7daysAgo',
          endDate: 'today'
        },
      ],
      dimensions: [
        { name: 'date' }
      ],
      metrics: [
        { name: 'totalUsers' }
      ]
    });
    
    console.log('GA4 API Response:', JSON.stringify(response, null, 2));

    if (!response.rows || response.rows.length === 0) {
      console.error('No rows found in the response.');
      process.exit(1);
    }

    const analyticsData = response.rows.map(row => ({
      date: row.dimensionValues?.[0]?.value,
      eventName: row.dimensionValues?.[1]?.value,
      eventCount: row.metricValues?.[0]?.value || '0',
      pageViews: row.metricValues?.[1]?.value || '0'
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

checkAccess();
fetchAnalyticsData();
