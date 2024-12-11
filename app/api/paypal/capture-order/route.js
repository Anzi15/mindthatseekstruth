import { NextResponse } from 'next/server';

export async function POST(req) {
  const { orderID } = await req.json();

  const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
  const SECRET = process.env.PAYPAL_SECRET;
  const PAYPAL_URL = 'https://api-m.sandbox.paypal.com'; // Use live URL for production

  const credentials = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString('base64');

  try {
    const tokenResponse = await fetch(`${PAYPAL_URL}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const { access_token } = await tokenResponse.json();

    const captureResponse = await fetch(`${PAYPAL_URL}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    });

    const captureData = await captureResponse.json();
    return NextResponse.json(captureData);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
