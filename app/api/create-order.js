import { NextResponse } from 'next/server';

export async function POST(req) {
  const { items, totalAmount } = await req.json(); // Get data from the client

  const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
  const SECRET = process.env.PAYPAL_SECRET;
  const PAYPAL_URL = 'https://api-m.sandbox.paypal.com'; // Use live URL for production

  const credentials = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString('base64');

  try {
    // Create an access token
    const tokenResponse = await fetch(`${PAYPAL_URL}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const { access_token } = await tokenResponse.json();

    // Create a new order
    const orderResponse = await fetch(`${PAYPAL_URL}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: totalAmount,
            },
            items,
          },
        ],
      }),
    });

    const orderData = await orderResponse.json();
    return NextResponse.json(orderData);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
