import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const analytics = google.analytics('v3');

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/analytics.readonly']
});

export async function GET() {
  try {
    const response = await analytics.data.ga.get({
      auth,
      ids: `ga:${process.env.GA_VIEW_ID}`,
      'start-date': '30daysAgo',
      'end-date': 'today',
      metrics: 'ga:pageviews,ga:users,ga:sessions'
    });

    return NextResponse.json({
      pageviews: response.data.totalsForAllResults?.['ga:pageviews'] || '0',
      users: response.data.totalsForAllResults?.['ga:users'] || '0',
      sessions: response.data.totalsForAllResults?.['ga:sessions'] || '0'
    });
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics data' }, { status: 500 });
  }
}