import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get('email')?.toString();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const MAILGUN_API_KEY = import.meta.env.MAILGUN_API_KEY;
    const MAILGUN_DOMAIN = import.meta.env.MAILGUN_DOMAIN;
    const MAILGUN_LIST = import.meta.env.MAILGUN_LIST;

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !MAILGUN_LIST) {
      console.error('Mailgun environment variables not configured');
      return new Response(JSON.stringify({ error: 'Newsletter service not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch(
      `https://api.mailgun.net/v3/lists/${MAILGUN_LIST}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          address: email,
          subscribed: 'yes',
          upsert: 'yes',
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Mailgun error:', errorData);
      return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Subscribe error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
